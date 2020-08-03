window.recursos.veiculos = class Veiculos extends Cadastro {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'veiculos',
            titulo: 'Veículos',
            icone: 'fas fa-car',
            requer_unidade: true,
            pesquisavel: true
        }
    };

    Exibir() {

    }

};