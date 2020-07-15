class EndPoint {
    endpoint;
    pesquisar;

    constructor() {
        this.host = window.location.origin;
    }

    Listar() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'GET',
                url: this.host + this.endpoint,
                dataType: 'json',
                success: function (response) {
                    resolve(response);
                }
            }).fail(function (jqXHR) {
                if (jqXHR.responseJSON !== undefined)
                    reject(new Error(jqXHR.responseJSON.message));
                console.error(jqXHR);
            });
        });
    };

    Combo() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'GET',
                url: this.host + this.endpoint,
                dataType: 'json',
                success: function (response) {
                    let options = [];
                    response.filter(function (item) {
                        options.push({value: item.id, text: item.descricao})
                    });
                    resolve(options);
                }
            }).fail(function (jqXHR) {
                if (jqXHR.responseJSON !== undefined)
                    reject(new Error(jqXHR.responseJSON.message));
                console.error(jqXHR);
            });
        });
    };

    // Pesquisa um registro utilizando o id da tabela
    Pesquisar(id) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'GET',
                url: this.host + this.endpoint + this.pesquisar + id,
                dataType: 'json',
                headers: {
                    Prefer: 'return=representation',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                success: function (response) {
                    resolve(response);
                }
            }).fail(function (jqXHR) {
                if (jqXHR.responseJSON !== undefined)
                    reject(new Error(jqXHR.responseJSON.message));
                console.error(jqXHR);
            });
        });
    };

    // Envia o registro para a tabela
    Adicionar() {

        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: this.host + this.endpoint,
                dataType: 'json',
                headers: {
                    Prefer: 'return=representation',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                success: function (response) {
                    resolve(response);
                },
                data: this.novodados
            }).fail(function (jqXHR) {
                if (jqXHR.responseJSON !== undefined)
                    reject(new Error(jqXHR.responseJSON.message));
                console.error(jqXHR);
            });
        });
    };

    // Altera o registro de uma tabela
    Editar() {

        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'PATCH',
                url: this.host + this.endpoint,
                dataType: 'json',
                headers: {
                    Prefer: 'return=representation',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                success: function (response) {
                    this.novodados = undefined;
                    resolve(response);
                }.bind(this),
                data: this.novodados
            }).fail(function (jqXHR) {
                if (jqXHR.responseJSON !== undefined)
                    reject(new Error(jqXHR.responseJSON.message));
                console.error(jqXHR);
            });
        });
    };

    // Remove o registro da tabela
    Remover() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'DELETE',
                url: this.host + this.endpoint,
                dataType: 'json',
                headers: {
                    Prefer: 'return=representation',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                success: function (response) {
                    resolve(response);
                },
                data: this.data
            }).fail(function (jqXHR) {
                if (jqXHR.status === 406) {
                    resolve('O registro foi removido anteriormente');
                }
                if (jqXHR.responseJSON !== undefined)
                    reject(new Error(jqXHR.responseJSON.message));
                console.error(jqXHR);
            });
        });
    };


}

class Foto extends EndPoint {

    constructor() {
        super();
    }

}

class Cadastro extends EndPoint {

    constructor() {
        super();
        this.foto = new Foto();
    }

}

class ContaUsuario extends Cadastro {
    
    constructor() {
        super();
    }
    
}

class NotificacoesUnidade extends EndPoint {

    constructor() {
        super();
    }

}

class InformacoesGerais extends EndPoint {

    constructor() {
        super();
        this.notificacoes = new NotificacoesUnidade();
    }

}

class Office extends EndPoint {

    constructor() {
        super();
    }
}

class Moradores extends Cadastro {

    constructor() {
        super();
        this.reserva = new Office();
    }

}

class Veiculos extends Cadastro {

    constructor() {
        super();
    }

}

class Funcionarios extends Cadastro {

    constructor() {
        super();
    }

}

class PreAutorizados extends Cadastro {

    constructor() {
        super();
    }

}

class RegistroAcesso extends EndPoint {

    constructor() {
        super();
    }

}

class AtividadesPersonalTrainer extends EndPoint {

    constructor() {
        super();
    }

}

class PersonalTrainer extends EndPoint {

    constructor() {
        super();
        this.atividades = new AtividadesPersonalTrainer()
    }

}

class TransporteEscolar extends EndPoint {

    constructor() {
        super();
    }
}

class Hospedes extends Cadastro {

    constructor() {
        super();
    }

}

class Pets extends Cadastro {

    constructor() {
        super();
    }

}

class Academia extends EndPoint {

    constructor() {
        super();
    }

}

class Seletor extends EndPoint {

    constructor(cell) {
        super();
        this.endpoint = '/condominio/unidades';
        this.pesquisar = '?';

        let form = cell.attachForm([
            {type: 'input', name: 'bloco', label: 'Bloco', required: true},
            {type: 'newcolumn'},
            {type: 'input', name: 'unidade', label: 'Unidade', required: true},
            {type: 'newcolumn'},
            {type: 'button', name: 'acessar', value: 'Selecionar'},
        ]);

        form.attachEvent('onAfterValidate', function (status) {
            if (status === true) {
                let dados = form.getFormData();
                let id = 'bloco=eq.' + dados.bloco + '&unidade=eq.' + dados.unidade;
                this.Pesquisar(id).then(unidade => {
                    window.dispatchEvent(new CustomEvent('AoSelecionar', {
                        detail: unidade
                    }));
                })
            }
        }.bind(this));

        form.attachEvent('onButtonClick', function () {
            form.validate();
        });
    }
}

class PerfilAcesso extends EndPoint {

    constructor() {
        super();
    }
}

class Acesso extends EndPoint {

    constructor() {
        super();
        this.endpoint = '/condominio/userinfo';
        this.pesquisar = '?email=eq.';
        this.dados = {
            login: null,
            password: null
        };
    }

    ExibirLogin() {

        let id = 'login';
        let wins = new dhtmlXWindows({
            image_path: 'codebase/imgs/',
        });

        wins.createWindow({
            id: id,
            width: 350,
            height: 350,
            center: true,
            park: false,
            resize: false,
            move: false,
            caption: 'Acesso ao sistema'
        });

        wins.window(id).button('stick').hide();
        wins.window(id).button('help').hide();
        wins.window(id).button('park').hide();
        wins.window(id).button('minmax').hide();
        wins.window(id).button('close').hide();

        let form = wins.window(id).attachForm([
            {type: 'input', name: 'login', label: 'Usuário', tooltip: 'Seu nome de usuário', required: true},
            {type: 'password', name: 'password', label: 'Senha'},
            {type: 'button', name: 'acessar', value: 'Iniciar'},
        ]);

        form.attachEvent('onAfterValidate', function (status) {
            if (status === true) {
                this.dados = form.getFormData();
                wins.window(id).progressOn();
                this.LogarUsuario(this.dados).then(() => {
                    this.Pesquisar(this.dados.login).then(usuario => {
                        wins.window(id).close();
                        this.AoEfetuarLogin(usuario);
                    });
                }).catch(reason => {
                    dhtmlx.alert({
                        title: 'Atenção',
                        type: 'alert-error',
                        text: reason
                    });
                }).finally(() => {
                    wins.window(id).progressOff();
                });
            }
        }.bind(this));

        form.attachEvent('onButtonClick', function () {
            form.validate();
        });

    }

    Encerrar() {
        if (this.parametros.logoff !== null)
            this.parametros.logoff.addEventListener('click', function () {
                this.RegistraSaida().then(() => {
                    this.AoEeturarLogoff();
                }).catch(reason => {
                    console.error(reason);
                });
            }.bind(this));
    }

    // @todo: Criar o procedimento logoff no banco de dados
    RegistraSaida() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: window.location.origin + '/condominio/rpc/logoff',
                dataType: 'json',
                success: function (response) {
                    resolve(response);
                }.bind(this),
                data: {email: this.parametros.user.value}
            }).fail(function (jqXHR) {
                reject(new Error(jqXHR));
            }.bind(this));
        });
    }

    // @todo: criar o procedimento de recuperação do usuário no banco de dados
    Recuperar() {
        if (this.parametros.recovery !== null)
            this.parametros.recovery.addEventListener('click', function () {
                $.ajax({
                    type: 'POST',
                    url: window.location.origin + '/condominio/rpc/recovery',
                    dataType: 'json',
                    headers: {
                        Prefer: 'params=single-object',
                        Accept: 'application/vnd.pgrst.object+json'
                    },
                    success: function () {
                        this.AoSolicitarRecuperacao(this.parametros.user, true);
                    }.bind(this),
                    data: {email: this.parametros.user}
                }).fail(function (jqXHR) {
                    console.error(new Error(jqXHR));
                    this.AoSolicitarRecuperacao(this.parametros.user, false);
                }.bind(this));
            })
    }

    LogarUsuario(dados) {

        return new Promise(((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: window.location.origin + '/condominio/rpc/login',
                dataType: 'json',
                headers: {
                    Prefer: 'params=single-object',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                success: function (token) {
                    resolve(token);
                }.bind(this),
                data: {email: dados.login, pass: dados.password}
            }).fail(function (jqXHR) {
                if (jqXHR.responseJSON !== undefined)
                    reject(jqXHR.responseJSON.message);
            });
        }));
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
                {id: 'b', header: false, width: 240},
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

        this.mainManu.parse(lista.recursos, 'json');

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
        this.componentbase = component;
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

    constructor(params) {

        this.params = params;
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
            sessionStorage.usuario = JSON.stringify(usuario);
            this.usuario = usuario;
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
        this.mainmenu = new MainMenu(this.layoutapp.menu, this.params);
        this.mainpage = new MainPage(this.layoutapp.page);
        this.seletor = new Seletor(this.mainpage.seletor);

        this.header.AoCarregarHeader = function () {
            console.debug('carregado');
            if (this.unidade !== undefined)
                this.header.ApresentaUnidade(this.unidade);
        }.bind(this);

        window.addEventListener('AoSelecionar', function(e) {
            this.unidade = e.detail;
            sessionStorage.unidade = JSON.stringify(this.unidade);
            this.header.ApresentaUnidade(this.unidade);
        }.bind(this));



    }

}

window.app = new Supervisor({
    recursos: [
        {id: 'conta', titulo: 'Conta do usuário', icone: 'conta.png', recurso: new ContaUsuario()},
        {id: 'geral', titulo: 'Informações gerais', icone: 'info.png', recurso: new InformacoesGerais()},
        {id: 'moradores', titulo: 'Moradores da unidade', icone: 'moradores.png', recurso: new Moradores()},
        {id: 'veiculos', titulo: 'Veículos', icone: 'veiculos.png', recurso: new Veiculos()},
        {id: 'funcionarios', titulo: 'Funcionários da unidade', icone: 'funcionarios.png', recurso: new Funcionarios()},
        {id: 'preautorizados', titulo: 'Visitantes pré-autorizados', icone: 'preautorizados.png', recurso: new PreAutorizados()},
        {id: 'registroAcesso', titulo: 'Registro de acesso', icone: 'registroacesso.png', recurso: new RegistroAcesso()},
        {id: 'personaltrainer', titulo: 'Personal trainer', icone: 'personaltrainer.png', recurso: new PersonalTrainer()},
        {id: 'transporteescolar', titulo: 'Transporte escolar', icone: 'transporteescolar.png', recurso: new TransporteEscolar()},
        {id: 'hospedes', titulo: 'Hóspedes', icone: 'hospedes.png', recurso: new Hospedes()},
        {id: 'pets', titulo: 'Pets', icone: 'pets.png', recurso: new Pets()},
        {id: 'academia', titulo: 'Academia', icone: 'academia.png', recurso: new Academia()},
    ]
});