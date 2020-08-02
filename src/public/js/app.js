class Usuario {

    constructor() {

    }

    Exibir() {

    }

}

class Perfil {

    constructor() {

    }

    Exibir() {

    }

}

class Supervisor {

    dados = {};
    seletor;
    layoutapp;
    mainmenu;
    mainpage;

    constructor() {

        this.acesso = new Acesso();

        if (sessionStorage.usuario === undefined) {
            this.PreparaAcessoUsuario();
            return;
        }

        this.usuario = JSON.parse(sessionStorage.usuario);

        if (sessionStorage.unidade !== undefined)
            this.unidade = JSON.parse(sessionStorage.unidade);

        this.Iniciar();
    }

    RastreiaAlteracoes() {

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        let hour = today.getHours();
        let mi = today.getMinutes();
        let se = today.getSeconds();

        this.dados.lastuser = this.usuario.login;
        this.dados.lastdate = `${yyyy}-${mm}-${dd}`;
        this.dados.lasttime = `${hour}:${mi}:${se}`;
        this.dados.condominio = this.unidade.condominio;
        this.dados.bloco = this.unidade.bloco;
        this.dados.andar = this.unidade.andar;
        this.dados.unidade = this.unidade.num;
    }

    PreparaAcessoUsuario() {

        this.acesso.AoEfetuarLogin = function (usuario) {
            sessionStorage.usuario = JSON.stringify(usuario);
            this.usuario = usuario;
            window.usuario = usuario;
            this.Iniciar();
        }.bind(this);

        this.acesso.AoFalharLogin = function () {

        };

        this.acesso.AoSolicitarRecuperarSenha = function () {

        };

        this.acesso.AoSolicitarNovoUsuário = function () {

        };

        this.acesso.ExibirLogin();
    }

    Iniciar() {

        this.layoutapp = new MainLayout();
        this.header = new MainHeader(this.layoutapp.mainlayout, this.layoutapp.header, this.usuario);
        this.mainmenu = new MainMenu(this.layoutapp.menu, this.usuario.recursos);
        this.mainpage = new MainPage(this.layoutapp.page);
        this.seletor = new Seletor(this.mainpage.seletor);

        this.header.AoCarregarHeader = function () {
            if (this.unidade !== undefined)
                this.header.ApresentaUnidade(this.unidade);
        }.bind(this);

        window.addEventListener('AoSelecionarUnidade', function(e) {
            this.unidade = e.detail;
            sessionStorage.unidade = JSON.stringify(this.unidade);
            this.header.ApresentaUnidade(this.unidade);
        }.bind(this));

        window.addEventListener('AoSelecionarItemMenu', function (e) {
            this.AbreRecurso(e.detail);
        }.bind(this));

    }

    AbreRecurso(item) {

        if (item.acesso_unidade === true && this.unidade === undefined) {
            dhtmlx.alert({
                title: 'Atenção',
                type: 'alert-warning',
                text: 'Selecione a unidade para acesso'
            });
            return;
        }

        this.mainpage.display.detachObject(true);

        /**
         * Inicia a execução do recurso
         */
        new (Object.values(window.recursos).find(value => value.name === item.objeto))({
            page: this.mainpage.display,
            usuario: this.usuario,
            unidade: this.unidade
        });

    }

}

$(document).ready(function () {

    /**
     * @type {Supervisor}
     */
    window.app = new Supervisor();

});

