window.recursos.pets = class Pets extends Cadastro {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'pets',
            titulo: 'Pets',
            icone: 'pets',
            requer_unidade: true,
            pesquisavel: true
        }
    };

    Exibir() {

    }

};