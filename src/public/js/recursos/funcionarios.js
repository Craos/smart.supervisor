window.recursos.funcionarios = class Funcionarios extends Cadastro {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'funcionarios',
            titulo: 'Funcionários da unidade',
            icone: 'fas fa-id-card-alt',
            requer_unidade: true,
            pesquisavel: true
        }
    };

    Exibir() {

    }

};