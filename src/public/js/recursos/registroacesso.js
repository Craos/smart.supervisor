window.recursos.registroacesso = class RegistroAcesso extends EndPoint {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'registroacesso',
            titulo: 'Registro de acesso',
            icone: 'chrome_reader_mode',
            requer_unidade: false,
            pesquisavel: false
        }
    };

    Exibir() {

    }

};