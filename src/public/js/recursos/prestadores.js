window.recursos.prestadores = class Prestadores extends Cadastro {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'preautorizados',
            titulo: 'Visitantes pré-autorizados',
            icone: 'fas fa-user-edit',
            requer_unidade: true,
            pesquisavel: true
        }
    };

    Exibir() {

    }

};