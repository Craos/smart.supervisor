window.recursos.geral = class InformacoesGerais extends EndPoint {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'geral',
            titulo: 'Informações gerais',
            icone: 'roofing',
            requer_unidade: true,
            pesquisavel: false
        }
    };

    Exibir() {

    }

};