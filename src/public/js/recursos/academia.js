window.recursos.academia = class Academia extends EndPoint {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'academia',
            titulo: 'Academia',
            icone: 'directions_bike',
            requer_unidade: false,
            pesquisavel: false
        }
    };

    Exibir() {

    }

};