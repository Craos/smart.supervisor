window.recursos.atendimentos = class Atendimentos extends EndPoint {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'atendimentos',
            titulo: 'Atendimentos',
            icone: 'fas fa-calendar-check',
            requer_unidade: false,
            pesquisavel: true
        }
    };

    Exibir() {

    }

};