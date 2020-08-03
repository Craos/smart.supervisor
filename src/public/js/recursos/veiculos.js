window.recursos.veiculos = class Veiculos extends Cadastro {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'veiculos',
            titulo: 'Veículos',
            icone: 'drive_eta',
            requer_unidade: true,
            pesquisavel: true
        }
    };

    Exibir() {

    }

};