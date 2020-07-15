class EndPoint {
    
    constructor(param) {
        this.param = param;
    }
    
    Listar() {
        
    }
    
    Pesquisar() {
        
    }
    
    Combo() {
        
    }
    
    Adicionar() {
        
    }
    
    Editar() {
        
    }
    
    Remover() {
        
    }
    
}

class Login extends EndPoint {
    
    constructor(param) {
        super(param);
    }
    
}

class Supervisor {
    
    constructor(param) {
        
        this.param = param;
        
        if (sessionStorage.user === undefined) {
            this.PreparaAcessoUsuario();
            return;
        }
        this.Iniciar();
    }

    PreparaAcessoUsuario() {
        
        let login = new Login(this.param);
        
        login.AoEfetuarLogin = function () {
            this.Iniciar();
        }.bind(this);
        
        login.AoFalharLogin = function () {

        };
        
        login.AoSolicitarRecuperarSenha = function () {

        };
        
        login.AoSolicitarNovoUsuário = function () {

        }
        
    }

    Iniciar() {
        
    }
}

class Cadastro extends EndPoint {
    
    constructor(endpoint) {
        super(endpoint);
    }

}

class ContaUsuario extends Cadastro {
    
    constructor(endpoint) {
        super(endpoint);
    }
    
}

class NotificacoesUnidade extends EndPoint {

    constructor(endpoint) {
        super(endpoint);
    }

}

class InformacoesGerais extends EndPoint {

    constructor(endpoint) {
        super(endpoint);
        this.notificacoes = new NotificacoesUnidade();
    }

}

class Office extends EndPoint {

    constructor(endpoint) {
        super(endpoint);
    }
}

class Moradores extends Cadastro {

    constructor(endpoint) {
        super(endpoint);
        this.reserva = new Office(endpoint);
    }

}

class Veiculos extends Cadastro {

    constructor(endpoint) {
        super(endpoint);
    }

}

class Funcionarios extends Cadastro {

    constructor(endpoint) {
        super(endpoint);
    }

}

class PreAutorizados extends Cadastro {

    constructor(endpoint) {
        super(endpoint);
    }

}

class RegistroAcesso extends EndPoint {

    constructor(endpoint) {
        super(endpoint);
    }

}

class AtividadesPersonalTrainer extends EndPoint {

    constructor(endpoint) {
        super(endpoint);
    }

}

class PersonalTrainer extends EndPoint {

    constructor(endpoint) {
        super(endpoint);
        this.atividades = new AtividadesPersonalTrainer()
    }

}

class TransporteEscolar extends EndPoint {

    constructor(endpoint) {
        super(endpoint);
    }
}

class Hospedes extends Cadastro {

    constructor(endpoint) {
        super(endpoint);
    }

}

class Pets extends Cadastro {

    constructor(endpoint) {
        super(endpoint);
    }

}

class Academia extends EndPoint {

    constructor(endpoint) {
        super(endpoint);
    }

}

let endpoint = 'http://anima.craos.net/condominio';

window.app = new Supervisor({
    endpoint: endpoint,
    recursos: [
        {id: 'conta', titulo: 'Conta do usuário', icone: 'conta.png', recurso: new ContaUsuario(endpoint)},
        {id: 'geral', titulo: 'Informações gerais', icone: 'info.png', recurso: new InformacoesGerais(endpoint)},
        {id: 'moradores', titulo: 'Moradores da unidade', icone: 'moradores.png', recurso: new Moradores(endpoint)},
        {id: 'veiculos', titulo: 'Veículos', icone: 'veiculos.png', recurso: new Veiculos(endpoint)},
        {id: 'funcionarios', titulo: 'Funcionários da unidade', icone: 'funcionarios.png', recurso: new Funcionarios(endpoint)},
        {id: 'preautorizados', titulo: 'Visitantes pré-autorizados', icone: 'preautorizados.png', recurso: new PreAutorizados(endpoint)},
        {id: 'registroAcesso', titulo: 'Registro de acesso', icone: 'registroacesso.png', recurso: new RegistroAcesso(endpoint)},
        {id: 'personaltrainer', titulo: 'Personal trainer', icone: 'personaltrainer.png', recurso: new PersonalTrainer(endpoint)},
        {id: 'transporteescolar', titulo: 'Transporte escolar', icone: 'transporteescolar.png', recurso: new TransporteEscolar(endpoint)},
        {id: 'hospedes', titulo: 'Hóspedes', icone: 'hospedes.png', recurso: new Hospedes(endpoint)},
        {id: 'pets', titulo: 'Pets', icone: 'pets.png', recurso: new Pets(endpoint)},
        {id: 'academia', titulo: 'Academia', icone: 'academia.png', recurso: new Academia(endpoint)},

    ]
});