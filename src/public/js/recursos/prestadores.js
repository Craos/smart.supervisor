window.recursos.prestadores = class Prestadores extends Cadastro {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'preautorizados',
            titulo: 'Visitantes pré-autorizados',
            icone: 'engineering',
            requer_unidade: true,
            pesquisavel: true
        }
    };

    Exibir() {

    }

};