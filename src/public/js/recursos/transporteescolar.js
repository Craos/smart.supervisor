window.recursos.transporteescolar = class TransporteEscolar extends EndPoint {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'transporteescolar',
            titulo: 'Transporte escolar',
            icone: 'directions_bus',
            requer_unidade: false,
            pesquisavel: false
        }
    };

    Exibir() {

    }

};