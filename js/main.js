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

    MontaNavegadorLateral() {

        this.siderbar = this.layout.cells('b').attachSidebar({
            template: 'details',
            icons_path: 'img/siderbar/',
            single_cell: false,
            width: 220,
            header: true,
            autohide: false,
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            items:sidebaritens
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

        if (info.unidade.moradores.length > 0)
            info.siderbar.cells('moradores').setBubble(info.unidade.moradores.length);

        if (info.unidade.veiculos.length > 0)
            info.siderbar.cells('veiculos').setBubble(info.unidade.veiculos.length);

        if (info.unidade.funcionarios.length > 0)
            info.siderbar.cells('funcionarios').setBubble(info.unidade.funcionarios.length);

        if (info.unidade.hospedes.length > 0)
            info.siderbar.cells('hospedes').setBubble(info.unidade.hospedes.length);

        if (info.unidade.pets.length > 0)
            info.siderbar.cells('pets').setBubble(info.unidade.pets.length);

        if (info.unidade.preautorizados.length > 0)
            info.siderbar.cells('preautorizados').setBubble(info.unidade.preautorizados.length);


        info.siderbar.attachEvent('onSelect', function (id) {

            let cell = info.siderbar.cells(id);
            
            switch (id) {
                case 'usuario':
                    new Usuario(cell, info).MontaLayout();
                    break;
                case 'unidade':
                    new Informacoes(cell, info).MontaLayout();
                    break;
                case 'moradores':
                    new Moradores(cell, info).MontaLayout();
                    break;
                case 'veiculos':
                    new Veiculos(cell, info).MontaLayout();
                    break;
                case 'funcionarios':
                    new Funcionarios(cell, info).MontaLayout();
                    break;
                case 'hospedes':
                    new Hospedes(cell, info).MontaLayout();
                    break;
                case 'pets':
                    new Pets(cell, info).MontaLayout();
                    break;
                case 'preautorizados':
                    new Preautorizados(cell, info).MontaLayout();
                    break;
                case 'personal':
                    new Personal(cell, info).MontaLayout();
                    break;
                case 'portaria':
                    new Portaria(cell, info).MontaLayout();
                    break;
                case 'notificacoes':
                    new Notificacoes(cell, info).MontaLayout();
                    break;
            }


        });
    }
}
