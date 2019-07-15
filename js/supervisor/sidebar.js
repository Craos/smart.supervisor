let sidebaritens = [
    {
        id: 'usuario',
        text: 'Conta do usuário',
        icon: 'usuario.png',
        executar: function () {
            return new Usuario();
        }
    },
    {
        id: 'unidade',
        text: 'Informações gerais',
        icon: 'unidade.png',
        executar: function () {
            return new Cadastro();
        }
    },
    {
        id: 'moradores',
        text: 'Moradores',
        icon: 'familiares.png',
        executar: function () {
            return new Moradores();
        }
    },
    {
        id: 'veiculos',
        text: 'Veículos',
        icon: 'veiculos.png',
        executar: function () {
            return new Veiculos();
        }
    },
    {
        id: 'funcionarios',
        text: 'Funcionários da unidade',
        icon: 'funcionarios.png',
        executar: function () {
            return new Funcionarios();
        }
    },
    {
        id: 'hospedes',
        text: 'Hóspedes',
        icon: 'hospedes.png',
        executar: function () {
            return new Hospedes();
        }
    },
    {
        id: 'pets',
        text: 'Pets',
        icon: 'pets.png',
        executar: function () {
            return new Pets();
        }
    },
    {
        id: 'preautorizados',
        text: 'Visitantes pré-autorizados',
        icon: 'preautorizados.png',
        executar: function () {
            return new Preautorizados();
        }
    },
    {
        id: 'notificacoes',
        text: 'Notificações',
        icon: 'notificacoes.png',
        executar: function () {
            return new Notificacoes();
        }
    },
    {
        id: 'mudancareforma',
        text: 'Mudanças e reformas',
        icon: 'mudancas.png',
        executar: function () {
            return new MudancasReformas();
        }
    },
    {
        id: 'solicitacoes',
        text: 'Solicitações e ocorrências',
        icon: 'solicitacoes.png',
        executar: function () {
            return new SolicitacoesOcorrencias();
        }
    },
    {
        id: 'historico',
        text: 'Histórico de atividades',
        icon: 'historico.png',
        executar: function () {
            return new HistoricoAtividades();
        }
    }
];