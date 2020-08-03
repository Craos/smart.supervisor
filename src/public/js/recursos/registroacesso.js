window.recursos.registroacesso = class RegistroAcesso extends EndPoint {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'registroacesso',
            titulo: 'Registro de acesso',
            icone: 'fas fa-chalkboard-teacher',
            requer_unidade: false,
            pesquisavel: false
        }
    };

    Exibir() {

    }

};