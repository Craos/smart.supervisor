window.recursos.reservaespacos = class ReservaEspacos extends EndPoint {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'reservaespacos',
            titulo: 'Reserva de espaços',
            icone: 'fas fa-bell',
            requer_unidade: false,
            pesquisavel: false
        }
    };

    Exibir() {

    }

};