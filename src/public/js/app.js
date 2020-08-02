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

class MainLayout {

    mainlayout;
    header;
    menu;
    page;

    constructor() {
        this.mainlayout = new dhtmlXLayoutObject({
            parent: document.body,
            pattern: '3T',
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            cells: [
                {id: 'a', header: false, height: 40, fix_size: [true, true]},
                {id: 'b', header: false, width: 230},
                {id: 'c', header: false},
            ]
        });

        this.header = this.mainlayout.cells('a');
        this.menu = this.mainlayout.cells('b');
        this.page = this.mainlayout.cells('c');
    }

}

class MainMenu {

    mainManu;

    constructor(cell, lista) {

        this.mainManu = cell.attachList({
            container: 'data_container',
            type: {
                template: 'http->./html/mainmenu.html',
                height: 45
            }
        });

        this.mainManu.parse(lista, 'json');
        this.mainManu.attachEvent('onItemClick', function (id) {
            window.dispatchEvent(new CustomEvent('AoSelecionarItemMenu', {
                detail: lista.find(x => x.id.toString() === id)
            }));
            return true;
        });

    }

}

class MainPage {

    page;
    seletor;
    display;

    constructor(cell) {

        this.page = cell.attachLayout({
            pattern: '2E',
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            cells: [
                {id: 'a', header: false, height: 40, fix_size: [true, true]},
                {id: 'b', header: false, width: 240},
            ]
        });

        this.seletor = this.page.cells('a');
        this.display = this.page.cells('b');

    }

}

class MainHeader extends EndPoint {

    ifr;

    constructor(component, cell, usuario) {
        super();
        component.attachEvent('onContentLoaded', function (id) {
            this.ifr = component.cells(id).getFrame();
            this.ifr.contentWindow.document.getElementById('nome').innerText = usuario.nome.split(' ')[0];
            this.AoCarregarHeader();
        }.bind(this));

        cell.attachURL('./html/mainheader.html', null);

    }

    ApresentaUnidade(unidade) {
        this.ifr.contentWindow.document.getElementById('bloco').innerText = unidade.bloco;
        this.ifr.contentWindow.document.getElementById('unidade').innerText = unidade.unidade;
        this.ifr.contentWindow.document.getElementById('responsavel').innerText = unidade.nome_proprietario;
        this.ifr.contentWindow.document.getElementById('header-unidade').style.display = 'block';
    }
}

class Supervisor {

    dados = {};
    seletor;
    layoutapp;
    mainmenu;
    mainpage;

    recursos = [
        Atendimentos,
        ContaUsuario,
        InformacoesGerais,
        Moradores,
        Veiculos,
        Funcionarios,
        PreAutorizados,
        Hospedes,
        Pets,
        RegistroAcesso,
        Notificacoes,
        PersonalTrainer,
        TransporteEscolar,
        Academia,
        Usuario,
        Perfil,
        Prestadores
    ];

    constructor() {

        $(document).ready(function(){
            $.getScript('js/endpoint.js');
        });

        this.acesso = new Acesso();

        if (sessionStorage.usuario === undefined) {
            this.PreparaAcessoUsuario();
            return;
        }
        this.perfil = new PerfilAcesso();
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
            console.debug(usuario);
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

        let recurso = this.recursos.find(value => value.name === item.objeto);

        new recurso({
            page: this.mainpage.display,
            usuario: this.usuario,
            unidade: this.unidade
        });
    }

}

/**
 * @todo código em arquivos separados
 * @body Separar o código em arquivos que representem os objetos do app
 * @type {Supervisor}
 */
window.app = new Supervisor();