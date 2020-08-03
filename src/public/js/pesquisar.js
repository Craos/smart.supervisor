class Pesquisar extends EndPoint {

    toolbar;
    form;
    list;
    layout;

    constructor() {
        super();

        this.icones = [];
        this.titulos = [];

        window.usuario.autorizacoes.forEach(autorizacao => {
            if (typeof window.recursos[autorizacao.nome].prototype.Config === "function") {
                let recurso = window.recursos[autorizacao.nome].prototype.Config();
                this.icones[autorizacao.nome] = recurso.icone;
                this.titulos[autorizacao.nome] = recurso.titulo;
            }
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
        window.usuario.autorizacoes.forEach(function (autorizacao) {

            /**
             * Verifica se o objeto está na lista
             */
            if (typeof window.recursos[autorizacao.nome].prototype.Config !== "function")
                return;

            /**
             * Obtem as informações do recurso
             */
            let recurso = window.recursos[autorizacao.nome].prototype.Config();

            /**
             * Se o objeto não oferecer pesquisas encerra
             */
            if (recurso.pesquisavel === false)
                return;

            /**
             * O objeto oferece pesquisa mas o perfil do usuário está negado para esta ação
             */
            if (autorizacao.pesquisar === false)
                return;


            itensform++;
            this.form.addItem('labelregistros', {type:'checkbox', offsetTop: 0, name:autorizacao.nome, label: "<div class='material-icons esquerda'>"+recurso.icone+"</div><div class='mainmenu-titulo esquerda'>"+recurso.titulo+"</div>", checked: false});
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

        console.debug(resultado);

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