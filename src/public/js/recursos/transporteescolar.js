window.recursos.transporteescolar = class TransporteEscolar extends EndPoint {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'transporteescolar',
            titulo: 'Transporte escolar',
            icone: 'fas fa-universal-access',
            requer_unidade: false,
            pesquisavel: false
        }
    };

    Exibir() {

    }

};