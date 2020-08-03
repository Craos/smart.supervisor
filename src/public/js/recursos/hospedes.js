window.recursos.hospedes = class Hospedes extends Cadastro {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'hospedes',
            titulo: 'Hóspedes',
            icone: 'fas fa-street-view',
            requer_unidade: false,
            pesquisavel: true
        }
    };

    Exibir() {

    }

};