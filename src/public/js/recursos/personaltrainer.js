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

    Exibir() {

    }

}