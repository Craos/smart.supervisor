/**
 * @class Supervisor
 * @description O supervisor faz parte do conjunto de subsistemas que compõem o sistema Verticals
 * @copyright 2020 Craos.NET
 * @author Oberdan Brito
 * @version 2
 */
class Supervisor {

    /**
     * Contém o objeto responsável pela seleção da unidade corrente
     */
    seletor;

    /**
     * Contém o objeto responsável pelo layout do aplicativo
     */
    layoutapp;

    /**
     * Contém o objeto responsável pelo menu seletor de recursos
     */
    mainmenu;

    /**
     * Contém o objeto responsável pela exibicao da pagina corrente
     */
    mainpage;

    constructor() {

        this.acesso = new Acesso();

        if (sessionStorage.usuario === undefined) {
            this.PreparaAcessoUsuario();
            return;
        }

        this.PreencheObjetos();
        this.Iniciar();
    }

    PreencheObjetos() {

        this.usuario = JSON.parse(sessionStorage.usuario);
        window.usuario = this.usuario;

        if (sessionStorage.unidade !== undefined)
            window.unidade = JSON.parse(sessionStorage.unidade);

    }

    PreparaAcessoUsuario() {

        /**
         * Recebe o evento ao efetuar login do usuário
         * @type {void}
         */
        this.acesso.AoEfetuarLogin = function (usuario) {
            sessionStorage.usuario = JSON.stringify(usuario);
            this.PreencheObjetos();
            this.Iniciar();
        }.bind(this);

        /**
         * @todo Adicionar método ao falar login
         * @constructor
         */
        /*this.acesso.AoFalharLogin = function () {

        };*/

        /**
         * @todo Adicionar método ao solictar a recuperação de senha
         * @constructor
         */
        /*this.acesso.AoSolicitarRecuperarSenha = function () {

        };*/

        /**
         * @todo Adicionar método para solicitação de novo usuário
         * @constructor
         */
        /*this.acesso.AoSolicitarNovoUsuário = function () {

        };*/

        this.acesso.ExibirLogin();
    }

    Iniciar() {

        this.layoutapp = new MainLayout();
        this.header = new MainHeader(this.layoutapp.mainlayout, this.layoutapp.header);
        this.mainmenu = new MainMenu(this.layoutapp.menu);
        this.mainpage = new MainPage(this.layoutapp.page);
        this.seletor = new Seletor(this.mainpage.seletor);

        this.header.AoCarregarHeader = function () {
            if (window.unidade !== undefined)
                this.header.ApresentaUnidade(window.unidade);
        }.bind(this);

        window.addEventListener('AoSelecionarUnidade', function(e) {
            window.unidade = e.detail;
            sessionStorage.unidade = JSON.stringify(window.unidade);
            this.header.ApresentaUnidade(window.unidade);
        }.bind(this));

        window.addEventListener('AoSelecionarItemMenu', function (e) {
            this.AbreRecurso(e.detail);
        }.bind(this));

    }

    AbreRecurso(recurso) {

        if (recurso.prototype.Config().requer_unidade === true && window.unidade === undefined) {
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
        new recurso({
            page: this.mainpage.display,
            usuario: window.usuario,
            unidade: window.unidade
        });

    }

}

/**
 * @todo comentários nas linhas do código do arquivo app
 * @body Incluir os comentários que descrevem os objetos e também a execução de métodos para facilitar o entendimento
 */
$(document).ready(function () {

    /**
     * @type {Supervisor}
     */
    window.app = new Supervisor();

});

