window.recursos.academia = class Academia extends EndPoint {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'academia',
            titulo: 'Academia',
            icone: 'fas fa-dumbbell',
            requer_unidade: false,
            pesquisavel: false
        }
    };

    Exibir() {

    }

};