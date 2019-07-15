dhtmlxEvent(window, 'load', function () {

    /*if (!sessionStorage.auth) {

        sessionStorage.credentials = JSON.stringify({
            client_id: 'OEUh02c5D7x3BE'
        });

        window.location = '../smart.auth';
        return;
    }*/

    new Supervisor();

});


class Supervisor extends Admunidade {

    constructor(props) {

        super(props);
        this.MontaLayout();
        this.MontaCabecalho();
        this.MontaNavegadorLateral();
        this.MontaBarraSelecaoUnidade();

    }

    MontaLayout() {

        this.layout = new dhtmlXLayoutObject({
            parent: document.body,
            pattern: '2E',
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            cells: [
                {
                    id: 'a',
                    height: 50,
                    header: false,
                    fix_size: [true, true]
                },
                {
                    id: 'b',
                    header: false,
                }
            ]
        });

    }

    MontaCabecalho() {

        //let that = this;
        this.layout.attachEvent("onContentLoaded", function (id) {

            //let ifr = that.layout.cells(id).getFrame().contentWindow.document;

        });

        this.layout.cells('a').attachURL("./html/cabecalho.html");

    }

    MontaNavegadorLateral() {

        this.siderbar = this.layout.cells('b').attachSidebar({
            template: 'details',
            icons_path: 'img/siderbar/',
            single_cell: false,
            width: 220,
            header: false,
            autohide: false,
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            items: sidebaritens
        });

    }

    MontaBarraSelecaoUnidade() {

        let that = this;

        this.toolbar = this.layout.cells('b').attachToolbar({
            icon_path: 'img/toolbar/',
            items: [
                {type: "buttonInput", id: "bloco", width: 30},
                {type: "buttonInput", id: "unidade", width: 30},
                {type: 'button', id: 'selecionar', img: 'selecionar.png', text: 'Selecionar'},
                {type: "separator", id: "sep1"},
                {type: 'button', id: 'pesquisar', img: 'pesquisar.png', text: 'Pesquisa avançada'},
                {type: "separator", id: "sep2"},
                {type: "text", id: "lbresponsavel", text: "Responsável:"},
                {type: "text", id: "responsavel"}
            ]
        });

        this.toolbar.hideItem('lbresponsavel');
        this.toolbar.hideItem('responsavel');

        this.toolbar.attachEvent("onClick", function (id) {

            if (id === 'selecionar') {
                that.Identificar(
                    that.toolbar.getValue('bloco'),
                    that.toolbar.getValue('unidade'),
                    that.ApresentaUnidade
                )
            }

        });

        this.toolbar.attachEvent("onEnter", function () {

            that.Identificar(
                that.toolbar.getValue('bloco'),
                that.toolbar.getValue('unidade'),
                that.ApresentaUnidade
            )
        });

    }

    ApresentaUnidade(info) {

        info.toolbar.showItem('lbresponsavel');
        info.toolbar.setItemText('responsavel', info.unidade.geral.nome_proprietario);
        info.toolbar.showItem('responsavel');

        info.siderbar.forEachCell(function (item) {
            info.siderbar.cells(item.getId()).clearBubble();
        });

        if (info.unidade.registros !== null)
            info.unidade.registros.filter(function (item) {
                info.siderbar.cells(item.tipo).setBubble(item.quantidade);
            });

        info.siderbar.attachEvent('onSelect', function (id) {

            let item = sidebaritens.find(x => x.id === id).executar();
            item.info = info;
            item.container = info.siderbar.cells(id);
            item.MontaLayout();

        });
    }

    FormLimpar(form) {
        form.clear();
        form.reset();
        form.setFormData(null);
    }

    FormEditar(api, data, filter, callback) {

        this.api = api;
        this.Atualizar({
            data: data,
            filter: filter,
            callback: function (response) {
                dhtmlx.message({
                    text: "Informações atualizadas com sucesso!",
                    expire: 2000,
                    type: "messagem_sucesso"
                });
                callback(response);
            }
        });

    }

    FormSalvar(api, data, callback) {

        this.api = api;
        this.Atualizar({
            data: data,
            callback: function (response) {
                dhtmlx.message({
                    text: "As informações foram registradas com sucesso!",
                    expire: 2000,
                    type: "messagem_sucesso"
                });
                callback(response);
            }
        });

    }

    FormRemover(api, mensagem, filter, callback) {

        let that = this;
        dhtmlx.confirm({
            title: "Supervisor",
            ok: "Sim",
            cancel: "Não",
            text: mensagem,
            callback: function (result) {

                if (result === true) {
                    that.api = api;
                    that.Remover({
                        filter: filter,
                        callback: function (response) {
                            dhtmlx.message({
                                text: "O registro foi removido com sucesso!",
                                expire: 2000,
                                type: "messagem_sucesso"
                            });
                            callback(response);
                        }
                    });
                }

            }
        });

    }

    FormObterFoto(field, callback) {

    }

    FormImprimir(form) {

    }

    FormEnviarEmail(form) {

    }

    FormExportarArquivo(form) {

    }

    GridRegistros() {

    }

    ListaRegistros(params) {

        let that = this;

        this.list = params.cell.attachList({
            container: "data_container",
            type: {
                template: 'http->'+params.template,
                height: 'auto'
            }
        });

        this.api = params.api;

        this.Listar({
            fields: params.fields,
            filter: {
              unidade: params.unidade.unidade.geral.num
            },
            callback: function (response) {

                that.list.parse(response.dados, 'json');
                let callbackclick = params.onclick;

                that.list.attachEvent("onItemClick", function (id) {
                    callbackclick(that.list.get(id));
                    return true;
                })
            }
        });

    }

    DataViewRegistros() {

    }

    GridExportarArquivo() {

    }

    ListaExportarArquivo() {

    }

    DataViewExportarArquivo() {

    }

}
