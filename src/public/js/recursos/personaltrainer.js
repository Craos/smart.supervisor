class AtividadesPersonalTrainer extends EndPoint {

    constructor() {
        super();
    }

}

window.recursos.personaltrainer = class PersonalTrainer extends EndPoint {

    constructor() {
        super();
        this.atividades = new AtividadesPersonalTrainer()
    }

    Config() {
        return {
            id: 'personaltrainer',
            titulo: 'Personal trainer',
            icone: 'fas fa-id-badge',
            requer_unidade: false,
            pesquisavel: true
        }
    };

    Exibir() {

    }

};