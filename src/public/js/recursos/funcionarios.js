window.recursos.funcionarios = class Funcionarios extends Cadastro {

    constructor() {
        super();
    }

    Config() {
        return {
            id: 'funcionarios',
            titulo: 'Funcionários da unidade',
            icone: 'baby_changing_station',
            requer_unidade: true,
            pesquisavel: true
        }
    };

    Exibir() {

    }

};