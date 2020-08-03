window.recursos.reservaespacos = class ReservaEspacos extends EndPoint {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'reservaespacos',
            titulo: 'Reserva de espaços',
            icone: 'layers',
            requer_unidade: false,
            pesquisavel: false
        }
    };

    Exibir() {

    }

};