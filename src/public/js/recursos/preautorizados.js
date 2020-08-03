window.recursos.preautorizados = class PreAutorizados extends Cadastro {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'prestadores',
            titulo: 'Prestadores de serviço',
            icone: 'supervised_user_circle',
            requer_unidade: false,
            pesquisavel: true
        }
    };

    Exibir() {

    }

};