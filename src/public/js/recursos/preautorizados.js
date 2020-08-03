window.recursos.preautorizados = class PreAutorizados extends Cadastro {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'prestadores',
            titulo: 'Prestadores de serviço',
            icone: 'fas fa-id-card-alt',
            requer_unidade: false,
            pesquisavel: true
        }
    };

    Exibir() {

    }

};