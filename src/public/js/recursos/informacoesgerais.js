window.recursos.geral = class InformacoesGerais extends EndPoint {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'geral',
            titulo: 'Informações gerais',
            icone: 'fas fa-home',
            requer_unidade: true,
            pesquisavel: false
        }
    };

    Exibir() {

    }

};