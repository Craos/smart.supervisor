window.recursos.conta = class ContaUsuario extends Cadastro {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'conta',
            titulo: 'Conta do usuário',
            icone: 'fas fa-user',
            requer_unidade: true,
            pesquisavel: false
        }
    };

    Exibir() {

    }

};