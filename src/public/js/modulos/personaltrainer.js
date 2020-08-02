class AtividadesPersonalTrainer extends EndPoint {

    constructor() {
        super();
    }

}

class PersonalTrainer extends EndPoint {

    constructor() {
        super();
        this.atividades = new AtividadesPersonalTrainer()
    }

    Exibir() {

    }

}