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
                    this.InformacoesUsuario(this.dados.login).then(usuario => {
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

    InformacoesUsuario(email) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: window.location.origin + '/condominio/rpc/userinfo',
                dataType: 'json',
                headers: {
                    Prefer: 'params=single-object',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                data: {
                    email: email
                },
                success: function (response) {
                    resolve(response);
                }
            }).fail(function (jqXHR) {
                console.error(jqXHR);
                reject(jqXHR)
            });
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