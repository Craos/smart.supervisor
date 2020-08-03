window.recursos.conta = class ContaUsuario extends Cadastro {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'conta',
            titulo: 'Conta do usuário',
            icone: 'account_circle',
            requer_unidade: true,
            pesquisavel: false
        }
    };

    Exibir() {

    }

};