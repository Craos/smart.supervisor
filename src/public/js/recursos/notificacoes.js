window.recursos.notificacoes = class Notificacoes extends Cadastro {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'notificacoes',
            titulo: 'Multas e notificações',
            icone: 'menu_book',
            requer_unidade: false,
            pesquisavel: false
        }
    };

    Exibir() {

    }

};