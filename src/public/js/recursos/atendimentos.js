window.recursos.atendimentos = class Atendimentos extends EndPoint {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'atendimentos',
            titulo: 'Atendimentos',
            icone: 'support_agent',
            requer_unidade: false,
            pesquisavel: true
        }
    };

    Exibir() {

    }

};