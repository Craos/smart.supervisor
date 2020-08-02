class Pesquisar extends EndPoint {

    toolbar;
    form;
    list;
    layout;

    constructor() {
        super();

        this.icones = [];
        this.titulos = [];

        window.app.usuario.recursos.forEach((item) => {
            this.icones[item.nome] = item.icone;
            this.titulos[item.nome] = item.titulo;
        });

        this.Exibir();

    }

    Exibir() {

        let id = 'pesquisar';
        let wins = new dhtmlXWindows({
            image_path: 'codebase/imgs/',
        });

        wins.createWindow({
            id: id,
            width: 800,
            height: 600,
            center: true,
            park: false,
            resize: false,
            move: false,
            caption: 'Pesquisar'
        });

        wins.window(id).button('stick').hide();
        wins.window(id).button('help').hide();
        wins.window(id).button('park').hide();
        wins.window(id).button('minmax').hide();

        this.toolbar = wins.window(id).attachToolbar({
            iconset: 'awesome',
            items: [
                {id: 'texto', type:'buttonInput', width: 300},
                {id: 'localizar', type: 'button', text: 'Iniciar pesquisa', img: 'fas fa-search', imgdis:'fas fa-search'},
            ]
        });

        this.toolbar.attachEvent("onClick", function () {
            this.IniciarPesquisa().then(function (response) {
                this.ProcessaResultados(response);
            }.bind(this));
        }.bind(this));

        this.toolbar.attachEvent("onEnter", function () {
            this.IniciarPesquisa().then(function (response) {
                this.ProcessaResultados(response);
            }.bind(this));
        }.bind(this));

        this.layout = wins.window(id).attachLayout({
            pattern: '2E',
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            cells: [
                {id: 'a', header: false, height: 160, },
                {id: 'b', header: false},
            ]
        });

        this.form = this.layout.cells('a').attachForm([
            {type:"settings", position:"label-right", labelAlign:"left"},
            {type: 'label', name: 'labelregistros', label:'Tipo de registro'}
        ]);

        let itensform = 0;
        window.app.usuario.recursos.forEach(function (recurso) {

            if (recurso.pesquisar === false)
                return;

            itensform++;
            this.form.addItem('labelregistros', {type:'checkbox', offsetTop: 0, name:recurso.nome, label: "<i class='"+recurso.icone+"'><span class='mainmenu-titulo'>"+recurso.titulo+"</span></i>", checked: false});
            if (itensform === 3) {
                this.form.addItem('labelregistros', {type:"newcolumn", offset:10});
                itensform = 0;
            }
        }.bind(this));

        this.list = this.layout.cells('b').attachList({
            container: 'data_container',
            type: {
                template: 'http->./html/pesquisar.html',
                height: 'auto'
            }
        });

    }

    ProcessaResultados(resultado) {

        Object.keys(resultado).forEach(function (categoria) {

            if (resultado[categoria] === null)
                return;

            resultado[categoria].filter(function (registro) {
                registro.icone = this.icones[categoria];
                registro.tipo = this.titulos[categoria];
                this.list.add(registro);
            }.bind(this));
        }.bind(this));
        this.layout.cells('b').progressOff();

    }

    IniciarPesquisa() {

        let data = this.form.getFormData();
        data.texto = this.toolbar.getInput('texto').value;

        this.list.clearAll();
        this.layout.cells('b').progressOn();

        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: window.location.origin + '/condominio/rpc/pesquisar',
                dataType: 'json',
                headers: {
                    Prefer: 'params=single-object',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                data: data,
                success: function (response) {
                    resolve(response.pesquisar[0]);
                }
            }).fail(function (jqXHR) {
                console.error(jqXHR);
                reject(jqXHR)
            });
        });

    }

}