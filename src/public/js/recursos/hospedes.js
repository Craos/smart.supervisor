window.recursos.hospedes = class Hospedes extends Cadastro {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'hospedes',
            titulo: 'Hóspedes',
            icone: 'contact_mail',
            requer_unidade: false,
            pesquisavel: true
        }
    };

    Exibir() {

    }

};