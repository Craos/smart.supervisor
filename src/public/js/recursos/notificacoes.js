window.recursos.notificacoes = class Notificacoes extends Cadastro {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'notificacoes',
            titulo: 'Multas e notificações',
            icone: 'fas fa-bell',
            requer_unidade: false,
            pesquisavel: false
        }
    };

    Exibir() {

    }

};