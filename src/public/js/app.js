'use strict';

class EndPoint {
    endpoint;
    listar;
    pesquisar;

    constructor() {
        this.host = window.location.origin;
    }

    Listar() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'GET',
                url: this.host + this.endpoint + this.listar,
                dataType: 'json',
                success: function (response) {
                    resolve(response);
                }
            }).fail(function (jqXHR) {
                if (jqXHR.responseJSON !== undefined)
                    reject(new Error(jqXHR.responseJSON.message));
                console.error(jqXHR);
            });
        });
    };

    Combo() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'GET',
                url: this.host + this.endpoint,
                dataType: 'json',
                success: function (response) {
                    let options = [];
                    response.filter(function (item) {
                        options.push({value: item.id, text: item.descricao})
                    });
                    resolve(options);
                }
            }).fail(function (jqXHR) {
                if (jqXHR.responseJSON !== undefined)
                    reject(new Error(jqXHR.responseJSON.message));
                console.error(jqXHR);
            });
        });
    };

    // Pesquisa um registro utilizando o id da tabela
    Pesquisar(id) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'GET',
                url: this.host + this.endpoint + this.pesquisar + id,
                dataType: 'json',
                headers: {
                    Prefer: 'return=representation',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                success: function (response) {
                    resolve(response);
                }
            }).fail(function (jqXHR) {
                console.error(jqXHR);
                reject(jqXHR)
            });
        });
    };

    // Envia o registro para a tabela
    Adicionar() {

        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: this.host + this.endpoint,
                dataType: 'json',
                headers: {
                    Prefer: 'return=representation',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                success: function (response) {
                    resolve(response);
                },
                data: this.novodados
            }).fail(function (jqXHR) {
                if (jqXHR.responseJSON !== undefined)
                    reject(new Error(jqXHR.responseJSON.message));
                console.error(jqXHR);
            });
        });
    };

    // Altera o registro de uma tabela
    Editar() {

        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'PATCH',
                url: this.host + this.endpoint,
                dataType: 'json',
                headers: {
                    Prefer: 'return=representation',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                success: function (response) {
                    this.novodados = undefined;
                    resolve(response);
                }.bind(this),
                data: this.novodados
            }).fail(function (jqXHR) {
                if (jqXHR.responseJSON !== undefined)
                    reject(new Error(jqXHR.responseJSON.message));
                console.error(jqXHR);
            });
        });
    };

    // Remove o registro da tabela
    Remover() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'DELETE',
                url: this.host + this.endpoint,
                dataType: 'json',
                headers: {
                    Prefer: 'return=representation',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                success: function (response) {
                    resolve(response);
                },
                data: this.data
            }).fail(function (jqXHR) {
                if (jqXHR.status === 406) {
                    resolve('O registro foi removido anteriormente');
                }
                if (jqXHR.responseJSON !== undefined)
                    reject(new Error(jqXHR.responseJSON.message));
                console.error(jqXHR);
            });
        });
    };


}

class Foto extends EndPoint {

    constructor() {
        super();

        if (navigator.mediaDevices === undefined) {
            dhtmlx.alert({
                title: 'Atenção',
                type: 'alert-error',
                text: 'Não foi possível iniciar a Webcam.<br>Por favor verifique o endereço de acesso, as permissões ou se o dispositivo encontra-se funcionando'
            });
            return
        }

        this.Exibir();
    }

    Exibir() {

        let id = 'foto';
        let wins = new dhtmlXWindows({
            image_path: 'codebase/imgs/',
        });

        wins.createWindow({
            id: id,
            width: 740,
            height: 400,
            center: true,
            park: false,
            resize: false,
            move: false,
            caption: 'Obter foto'
        });

        wins.window(id).button('stick').hide();
        wins.window(id).button('help').hide();
        wins.window(id).button('park').hide();
        wins.window(id).button('minmax').hide();

        let toolbar = wins.window(id).attachToolbar({
            iconset: 'awesome',
            items: [
                {id: 'novo', type: 'button', text: 'Obter foto', img: 'fas fa-file-alt', imgdis:'fas fa-file-alt'},
                {id: 'confirmar', type: 'button', text: 'Confirmar', img: 'fas fa-save', imgdis:'fas fa-save'},
            ]
        });

        toolbar.attachEvent("onClick", function(id){

            if (id === 'novo') {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                console.debug(video);
            } else if ( id === 'confirmar') {

                let imagem = canvas.toDataURL("image/png;base64;charset=utf-8");
                console.debug(imagem);
            }

        });

        let form = wins.window(id).attachForm([
            {type: 'container', name: 'display', inputWidth:350, inputHeight:280},
            {type:"newcolumn"},
            {type: 'container', name: 'foto', inputWidth:350, inputHeight:280},
        ]);

        let display = form.getContainer('display');
        display.style.border = '1px solid #ccc';
        display.innerHTML = '<video id="vdfoto" playsinline="" autoplay="autoplay"></video>';

        let foto = form.getContainer('foto');
        foto.style.border = '1px solid #ccc';
        foto.innerHTML = '<canvas id="cvfoto"></canvas>';

        form.attachEvent('onAfterValidate', function (status) {

        }.bind(this));

        form.attachEvent('onButtonClick', function () {
            form.validate();
        });

        const video = document.getElementById('vdfoto');
        const canvas = window.canvas = document.getElementById('cvfoto');
        canvas.width = 480;
        canvas.height = 360;

        const constraints = {
            audio: false,
            video: true
        };

        function handleSuccess(stream) {
            window.stream = stream;
            video.srcObject = stream;
        }

        function handleError(error) {
            dhtmlx.alert({
                title: error.name,
                type: 'alert-error',
                text: error.message
            });
        }

        navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);

    }

}

class Pesquisar extends EndPoint {

    toolbar;
    form;
    list;

    constructor() {
        super();
        this.Exibir();
    }

    Exibir() {

        let id = 'pesquisar';
        let wins = new dhtmlXWindows({
            image_path: 'codebase/imgs/',
        });

        wins.createWindow({
            id: id,
            width: 800,
            height: 600,
            center: true,
            park: false,
            resize: false,
            move: false,
            caption: 'Pesquisar'
        });

        wins.window(id).button('stick').hide();
        wins.window(id).button('help').hide();
        wins.window(id).button('park').hide();
        wins.window(id).button('minmax').hide();

        this.toolbar = wins.window(id).attachToolbar({
            iconset: 'awesome',
            items: [
                {id: 'texto', type:'buttonInput', width: 150},
                {id: 'localizar', type: 'button', text: 'Iniciar pesquisa', img: 'fas fa-search', imgdis:'fas fa-search'},
            ]
        });

        this.toolbar.attachEvent("onClick", function () {
            this.IniciarPesquisa();
        }.bind(this));

        this.toolbar.attachEvent("onEnter", function () {
            this.IniciarPesquisa();
        }.bind(this));

        let layout = wins.window(id).attachLayout({
            pattern: '2E',
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            cells: [
                {id: 'a', header: false, height: 160, },
                {id: 'b', header: false},
            ]
        });

        this.form = layout.cells('a').attachForm([
            {type:"settings", position:"label-right", labelAlign:"left"},
            {type: 'label', label:'Pelo nome da pessoa', list:[
                {type:'checkbox', name:'moradores', label:'Moradores', checked: true},
                {type:'checkbox', name:'funcionarios', label:'Funcionários', checked: false},
                {type:'checkbox', name:'visitantes', label:'Visitantes pré-autorizados', checked: false},
                {type:"newcolumn", offset:10},
                {type:'checkbox', name:'hospedes', label:'Hóspedes', checked: false},
                {type:'checkbox', name:'prestadores', label:'Prestadores / Fornecedores', checked: false},
            ]},
            {type:"newcolumn", offset:40},
            {type: 'label', label:'Tipo de identificação', list:[
                {type:'checkbox', name:'placa', label:'Placa de veículo', checked: false},
                {type:'checkbox', name:'telefone', label:'Telefone', checked: false},
                {type:'checkbox', name:'email', label:'Endereço de email', checked: false},
                {type:"newcolumn", offset:10},
                {type:'checkbox', name:'rg', label:'RG', checked: false},
                {type:'checkbox', name:'cpf', label:'CPF', checked: false},
                {type:'checkbox', name:'cnh', label:'CNH', checked: false},
                {type:"newcolumn", offset:10},
                {type:'checkbox', name:'cnpj', label:'CNPJ', checked: false},
            ]}
        ]);

        this.list = layout.cells('b').attachList();

    }

    ProcessaResultados(resultado) {

        Object.keys(resultado).forEach(function (categoria) {

            if (resultado[categoria] === null)
                return;

            resultado[categoria].filter(function (registro) {
                registro.icone = 'fas fa-users';
                registro.tipo = categoria;
                this.list.add(registro);
            }.bind(this));
        }.bind(this));

    }

    IniciarPesquisa() {

        let data = this.form.getFormData();
        data.texto = this.toolbar.getInput('texto').value;

        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: window.location.origin + '/condominio/rpc/pesquisar',
                dataType: 'json',
                headers: {
                    Prefer: 'params=single-object',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                data: data,
                success: function (response) {
                    resolve(response);
                }
            }).fail(function (jqXHR) {
                console.error(jqXHR);
                reject(jqXHR)
            });
        });

    }

}

class Cadastro extends EndPoint {

    toolbar;
    form;
    grid;
    params;

    constructor(params) {
        super();
        this.params = params;
        this.foto = new Foto();
    }

    Exibir() {

        let layout = this.params.cell.attachLayout({
            pattern: '2E',
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            cells: [
                {id: 'a', header: false},
                {id: 'b', header: false},
            ]
        });

        this.toolbar = layout.cells('a').attachToolbar({
            iconset: 'awesome',
            items: this.params.toolbar.campos
        });

        this.toolbar.attachEvent("onClick", function (id) {

            let item = this.params.toolbar.campos.find(x => x.id === id);

            switch (item.operacao) {
                case 'novo':
                    this.Novo();
                    break;
                case 'salvar':
                    this.SalvarForm();
                    break;
                case 'obterfoto':
                    this.ObterFoto();
                    break;
                case 'remover':
                    this.Remover();
                    break;
                default:
                    this.ToolBarCustomFunction(id, this);
                    break;
            }
        }.bind(this));


        this.form = layout.cells('a').attachForm(this.params.form.struct);

        this.form.attachEvent("onAfterValidate", function (status) {
            if (status === false)
                return;


        });

        this.grid = layout.cells('b').attachGrid();
        this.grid.setImagePath('./codebase/imgs/');
        this.grid.setHeader(this.params.grid.titulos);
        this.grid.init();

        this.Listar().then(value => {
            value.filter(function (linha) {
                this.grid.addRow(linha[this.params.grid.id], Object.values(linha));
            }.bind(this));
        });

        this.grid.attachEvent("onRowSelect", function (id) {
            this.Pesquisar(id).then(value => {
                this.form.setFormData(value);
                if (this.params.form.foto !== undefined) {
                    this.form.getContainer(this.params.form.foto.destino).innerHTML = '<img width="200px" alt="" src="' + value[this.params.form.foto.origem] + '"/>'
                }
            });
        }.bind(this));

    }

    HabilitarBotoes() {
        this.toolbar.forEachItem(function(itemId){
            this.toolbar.enableItem(itemId);
        }.bind(this));
    }

    Novo() {

    }

    SalvarForm() {

    }

    ObterFoto() {

    }

    Remover() {

    }

}

class Atendimentos extends EndPoint {

    constructor() {
        super();
    }

    Exibir() {

    }

}

class ContaUsuario extends Cadastro {

    constructor() {
        super();
    }

    Exibir() {

    }

}

class Notificacoes extends Cadastro {

    constructor() {
        super();
    }

    Exibir() {

    }

}

class InformacoesGerais extends EndPoint {

    constructor() {
        super();
    }

    Exibir() {

    }

}

class Office extends EndPoint {

    constructor() {
        super();
    }
}

class Moradores extends Cadastro {

    constructor(app) {

        super({
            cell: app.page,
            toolbar: {
                campos: [
                    {id: 'novo', type: 'button', text: 'Novo', img: 'fas fa-file-alt', imgdis:'fas fa-file-alt', operacao: 'novo'},
                    {id: 'salvar', type: 'button', text: 'Salvar', img: 'fas fa-save', imgdis:'fas fa-save', operacao: 'salvar', enabled: false},
                    {id: 'obterfoto', type: 'button', text: 'Obter foto', img: 'fas fa-camera', imgdis:'fas fa-camera', operacao: 'obterfoto' , enabled: false},
                    {id: 'sep1', type: 'separator'},
                    {id: 'remover', type: 'button', text: 'Remover', img: 'fas fa-trash-alt', imgdis:'fas fa-trash-alt', operacao: 'remover', enabled: false},
                    {id: 'sep2', type: 'separator'},
                    {id: 'reservar', type: 'button', text: 'Reservar espaço', img: 'fas fa-clock', imgdis:'fas fa-clock', operacao: 'personalizado', enabled: false},
                ]
            },
            form: {
                foto: {origem: 'foto1', destino: 'foto_morador'},
                struct: [
                    {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "4", position: "label-top"},
                    {
                        type: "label", list: [
                            {
                                type: "label", width: 200, list: [
                                    {type: "container", name: "foto_morador", inputWidth: 170, inputHeight: 170}
                                ]
                            },
                            {type: "newcolumn"},
                            {
                                type: "label", name: "opcoes", width: 800, list: [
                                    {
                                        type: "block", list: [
                                            {type: "input", name: "nome", label: "Nome completo", inputWidth: 350, tooltip: "Informe o nome completo do morador", required: true, info: true, note: {text: "Nome completo do morador"}},
                                            {type: "newcolumn"},
                                            {type: "input", name: "nascimento", label: "Data de nascimento", inputWidth: 130, tooltip: "Data de nascimento do morador", required: true, info: true, note: {text: "Ex.: 12/06/1981"}},
                                            {type: "newcolumn"},
                                            {type: "input", name: "local_nascimento", label: "Local de nascimento", inputWidth: 220, tooltip: "Cidade e Estado se for no Brasil; cidade e pa&iacute;s se for no estrangeiro. Ex.: Campinas-S&atilde;o Paulo ou Roma-It&aacute;lia", required: true, info: true, note: {text: "Cidade e Estado brasileiro ou pa?s estrangeiro"}}
                                        ]
                                    },
                                    {
                                        type: "block", list: [
                                            {
                                                type: "input", name: "rg", label: "Doc. de identifica&ccedil;&atilde;o", inputWidth: "140",
                                                tooltip: "Informe o n&uacute;mero de RG ou RNE ou passaporte", info: true
                                            },
                                            {type: "newcolumn"},
                                            {type: "input", name: "cpf", label: "CPF", inputWidth: "120"},
                                            {type: "newcolumn"},
                                            {
                                                type: "combo", name: "genero", label: "G&ecirc;nero", inputWidth: "100", required: true, options: [
                                                    {value: "", text: "Selecione", selected: true},
                                                    {value: "1", text: "Masculino"},
                                                    {value: "2", text: "Feminino"}
                                                ]
                                            },
                                            {type: "newcolumn"},
                                            {
                                                type: "combo", name: "parentesco", label: "Parentesco/Proximidade", required: true, inputWidth: "150", options: [
                                                    {value: "", text: "Selecione", selected: true},
                                                    {value: "1", text: "Cônjuge"},
                                                    {value: "2", text: "Filho/a"},
                                                    {value: "3", text: "Pai/Mãe"},
                                                    {value: "4", text: "Sogro/a"},
                                                    {value: "5", text: "Cunhado/a"},
                                                    {value: "6", text: "Irmã(o)"},
                                                    {value: "7", text: "Tio/a"},
                                                    {value: "8", text: "Primo/a"},
                                                    {value: "9", text: "Neto/a"},
                                                            {value: "10", text: "Avó/Avô"},
                                                    {value: "11", text: "Parente"},
                                                    {value: "12", text: "Amigo/a"},
                                                    {value: "13", text: "Proprietário"},
                                                    {value: "14", text: "Locatário"}
                                                ]
                                            },
                                            {type: "newcolumn"},
                                            {type: "input", name: "telefone", label: "Telefone", inputWidth: "170", offsetLeft: "10"}
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: "label", list: [
                            {
                                type: "label", name: "autorizacao", label: "Registro", offsetTop: 10, width: 140, list: [
                                    {type: "input", name: "autenticacao", label: "Autoriza&ccedil;&atilde;o", inputWidth: 120, style: "font-weight:bold; color:blue"},
                                    {type: "input", name: "num", readonly: true, label: "Matrícula", inputWidth: 120, style: "font-weight:bold; color:red"},
                                    {type: "input", name: "filedate", readonly: true, label: "Data Cadastro", inputWidth: 120, style: "font-weight:bold; color:red"},
                                    {type: "input", name: "ativacao", readonly: true, label: "Data Ativação", inputWidth: 120, style: "font-weight:bold; color:red"},
                                    {type: "label", name: "aviso_ativacao"}
                                ]
                            },
                            {type: "newcolumn"},
                            {
                                type: "label", name: "opcoes", label: "Informa&ccedil;&otilde;es complementares", offsetTop: 10, width: 800, list: [
                                    {type: "settings", labelAlign: "left", inputHeight: "18", offsetLeft: "20", offsetTop: "2", position: "label-top"},
                                    {type: "input", name: "emg_plano_saude", label: "Nome do plano de sa&uacute;de", inputWidth: "250"},
                                    {type: "input", name: "emg_alergia_medicamentos", label: "Al&eacute;rgico a medicamentos / Quais?", inputWidth: "250"},
                                    {type: "input", name: "emg_parente", label: "Em caso de emerg&ecirc;ncia quem contactar", inputWidth: "250"},
                                    {type: "newcolumn"},
                                    {type: "input", name: "emg_necessidade_especial", label: "Descreva as necessidades especiais", inputWidth: "250"},
                                    {type: "input", name: "emg_remedio", label: "Usu&aacute;rio de medicamento controlado / Qual?", inputWidth: "250"},
                                    {type: "input", name: "emg_parente_telefone", label: "N&uacute;mero do telefone", inputWidth: "250"},
                                    {type: "newcolumn"},
                                    {
                                        type: "combo", name: "emg_tipo_sanguineo", label: "Tipo sangu&iacute;neo", inputWidth: "100", options: [
                                            {value: "", text: "Selecione", selected: true},
                                            {value: "1", text: "O +"},
                                            {value: "2", text: "A +"},
                                            {value: "3", text: "B +"},
                                            {value: "4", text: "AB +"},
                                            {value: "5", text: "O -"},
                                            {value: "6", text: "A -"},
                                            {value: "7", text: "B -"},
                                            {value: "8", text: "AB -"}
                                        ]
                                    }
                                ]
                            }
                        ]
                    }

                ]
            },
            grid: {
                titulos: 'id,nome',
                id: 'num'
            }
        });

        this.endpoint = '/condominio/moradores';
        this.listar = '?select=num,nome&unidade=eq.' + app.unidade.num;
        this.pesquisar = '?num=eq.';

        this.ToolBarCustomFunction = function (id) {
            if (id === 'reservar') {
                new Office();
            }
        };

        this.Exibir();
    }

}

class Veiculos extends Cadastro {

    constructor() {
        super();
    }

}

class Funcionarios extends Cadastro {

    constructor() {
        super();
    }

}

class PreAutorizados extends Cadastro {

    constructor() {
        super();
    }

}

class RegistroAcesso extends EndPoint {

    constructor() {
        super();
    }

    Exibir() {

    }

}

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

class TransporteEscolar extends EndPoint {

    constructor() {
        super();
    }

    Exibir() {

    }
}

class Hospedes extends Cadastro {

    constructor() {
        super();
    }

    Exibir() {

    }

}

class Pets extends Cadastro {

    constructor() {
        super();
    }

}

class Academia extends EndPoint {

    constructor() {
        super();
    }

    Exibir() {

    }

}

class Usuario extends EndPoint {

    constructor() {
        super();
    }

    Exibir() {

    }

}

class Perfil extends EndPoint {

    constructor() {
        super();
    }

    Exibir() {

    }

}

class Seletor extends EndPoint {

    constructor(cell) {
        super();
        this.endpoint = '/condominio/unidades';
        this.pesquisar = '?';

        let form = cell.attachForm([
            {type:'settings',position:'label-top', labelAlign:'left', offsetLeft: 10, inputWidth: 60},
            {type: 'input', name: 'bloco', label: 'Bloco', required: true},
            {type: 'newcolumn'},
            {type: 'input', name: 'unidade', label: 'Unidade', required: true},
            {type: 'newcolumn'},
            {type: 'button', name: 'acessar', offsetTop: 20, value: "<span class='btnsmart'><i class='fas fa-angle-double-right azulescuro'></i> Selecionar</span>"},
            {type: 'newcolumn'},
            {type: 'button', name: 'pesquisar', offsetTop: 20, value: "<span class='btnsmart'><i class='fas fa-search azulescuro'></i> Pesquisar</span>"}
        ]);

        form.attachEvent('onAfterValidate', function (status) {
            if (status === true) {
                let dados = form.getFormData();
                let id = 'bloco=eq.' + dados.bloco + '&unidade=eq.' + dados.unidade;
                this.Pesquisar(id).then(unidade => {
                    window.dispatchEvent(new CustomEvent('AoSelecionarUnidade', {
                        detail: unidade
                    }));
                }).catch(reason => {
                    if (reason.status === 406) {
                        dhtmlx.alert({
                            title: 'Atenção',
                            type: 'alert-error',
                            text: 'Não foi possível localizar a unidade ' + dados.bloco + '-' + dados.unidade
                        });
                    }
                })
            }
        }.bind(this));

        form.attachEvent('onButtonClick', function () {
            form.validate();
        });

        form.attachEvent("onEnter", function(){
            form.validate();
        });
    }
}

class PerfilAcesso extends EndPoint {

    constructor() {
        super();
    }
}

class Acesso extends EndPoint {

    constructor() {
        super();
        this.endpoint = '/condominio/userinfo';
        this.pesquisar = '?email=eq.';
        this.dados = {
            login: null,
            password: null
        };
    }

    ExibirLogin() {

        let id = 'login';
        let wins = new dhtmlXWindows({
            image_path: 'codebase/imgs/',
        });

        wins.createWindow({
            id: id,
            width: 350,
            height: 350,
            center: true,
            park: false,
            resize: false,
            move: false,
            caption: 'Acesso ao sistema'
        });

        wins.window(id).button('stick').hide();
        wins.window(id).button('help').hide();
        wins.window(id).button('park').hide();
        wins.window(id).button('minmax').hide();
        wins.window(id).button('close').hide();

        let form = wins.window(id).attachForm([
            {type: 'input', name: 'login', label: 'Usuário', tooltip: 'Seu nome de usuário', required: true},
            {type: 'password', name: 'password', label: 'Senha'},
            {type: 'button', name: 'acessar', value: 'Iniciar'},
        ]);

        form.attachEvent('onAfterValidate', function (status) {
            if (status === true) {
                this.dados = form.getFormData();
                wins.window(id).progressOn();
                this.LogarUsuario(this.dados).then(() => {
                    this.InformacoesUsuario(this.dados.login).then(usuario => {
                        wins.window(id).close();
                        this.AoEfetuarLogin(usuario);
                    });
                }).catch(reason => {
                    dhtmlx.alert({
                        title: 'Atenção',
                        type: 'alert-error',
                        text: reason
                    });
                }).finally(() => {
                    wins.window(id).progressOff();
                });
            }
        }.bind(this));

        form.attachEvent('onButtonClick', function () {
            form.validate();
        });

    }

    InformacoesUsuario(email) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: window.location.origin + '/condominio/rpc/userinfo',
                dataType: 'json',
                headers: {
                    Prefer: 'params=single-object',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                data: {
                  email: email
                },
                success: function (response) {
                    resolve(response);
                }
            }).fail(function (jqXHR) {
                console.error(jqXHR);
                reject(jqXHR)
            });
        });
    }

    Encerrar() {
        if (this.parametros.logoff !== null)
            this.parametros.logoff.addEventListener('click', function () {
                this.RegistraSaida().then(() => {
                    this.AoEeturarLogoff();
                }).catch(reason => {
                    console.error(reason);
                });
            }.bind(this));
    }

    // @todo: Criar o procedimento logoff no banco de dados
    RegistraSaida() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: window.location.origin + '/condominio/rpc/logoff',
                dataType: 'json',
                success: function (response) {
                    resolve(response);
                }.bind(this),
                data: {email: this.parametros.user.value}
            }).fail(function (jqXHR) {
                reject(new Error(jqXHR));
            }.bind(this));
        });
    }

    // @todo: criar o procedimento de recuperação do usuário no banco de dados
    Recuperar() {
        if (this.parametros.recovery !== null)
            this.parametros.recovery.addEventListener('click', function () {
                $.ajax({
                    type: 'POST',
                    url: window.location.origin + '/condominio/rpc/recovery',
                    dataType: 'json',
                    headers: {
                        Prefer: 'params=single-object',
                        Accept: 'application/vnd.pgrst.object+json'
                    },
                    success: function () {
                        this.AoSolicitarRecuperacao(this.parametros.user, true);
                    }.bind(this),
                    data: {email: this.parametros.user}
                }).fail(function (jqXHR) {
                    console.error(new Error(jqXHR));
                    this.AoSolicitarRecuperacao(this.parametros.user, false);
                }.bind(this));
            })
    }

    LogarUsuario(dados) {

        return new Promise(((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: window.location.origin + '/condominio/rpc/login',
                dataType: 'json',
                headers: {
                    Prefer: 'params=single-object',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                success: function (token) {
                    resolve(token);
                }.bind(this),
                data: {email: dados.login, pass: dados.password}
            }).fail(function (jqXHR) {
                if (jqXHR.responseJSON !== undefined)
                    reject(jqXHR.responseJSON.message);
            });
        }));
    }
}

class MainLayout {

    mainlayout;
    header;
    menu;
    page;

    constructor() {
        this.mainlayout = new dhtmlXLayoutObject({
            parent: document.body,
            pattern: '3T',
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            cells: [
                {id: 'a', header: false, height: 40, fix_size: [true, true]},
                {id: 'b', header: false, width: 230},
                {id: 'c', header: false},
            ]
        });

        this.header = this.mainlayout.cells('a');
        this.menu = this.mainlayout.cells('b');
        this.page = this.mainlayout.cells('c');
    }

}

class MainMenu {

    mainManu;

    constructor(cell, lista) {

        this.mainManu = cell.attachList({
            container: 'data_container',
            type: {
                template: 'http->./html/mainmenu.html',
                height: 45
            }
        });

        this.mainManu.parse(lista, 'json');

        this.mainManu.attachEvent('onItemClick', function (id) {
            window.dispatchEvent(new CustomEvent('AoSelecionarItemMenu', {
                detail: lista.find(x => x.id.toString() === id)
            }));
            return true;
        });

    }

}

class MainPage {

    page;
    seletor;
    display;

    constructor(cell) {

        this.page = cell.attachLayout({
            pattern: '2E',
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            cells: [
                {id: 'a', header: false, height: 40, fix_size: [true, true]},
                {id: 'b', header: false, width: 240},
            ]
        });

        this.seletor = this.page.cells('a');
        this.display = this.page.cells('b');

    }

}

class MainHeader extends EndPoint {

    ifr;

    constructor(component, cell, usuario) {
        super();
        component.attachEvent('onContentLoaded', function (id) {
            this.ifr = component.cells(id).getFrame();
            this.ifr.contentWindow.document.getElementById('nome').innerText = usuario.nome.split(' ')[0];
            this.AoCarregarHeader();
        }.bind(this));

        cell.attachURL('./html/mainheader.html', null);

    }

    ApresentaUnidade(unidade) {
        this.ifr.contentWindow.document.getElementById('bloco').innerText = unidade.bloco;
        this.ifr.contentWindow.document.getElementById('unidade').innerText = unidade.unidade;
        this.ifr.contentWindow.document.getElementById('responsavel').innerText = unidade.nome_proprietario;
        this.ifr.contentWindow.document.getElementById('header-unidade').style.display = 'block';
    }
}

class Supervisor {

    dados = {};
    seletor;
    layoutapp;
    mainmenu;
    mainpage;

    recursos = [
        Atendimentos,
        ContaUsuario,
        InformacoesGerais,
        Moradores,
        Veiculos,
        Funcionarios,
        PreAutorizados,
        Hospedes,
        Pets,
        RegistroAcesso,
        Notificacoes,
        PersonalTrainer,
        TransporteEscolar,
        Academia,
        Usuario,
        Perfil,
    ];

    constructor() {

        this.acesso = new Acesso();

        if (sessionStorage.usuario === undefined) {
            this.PreparaAcessoUsuario();
            return;
        }
        this.perfil = new PerfilAcesso();
        this.usuario = JSON.parse(sessionStorage.usuario);

        if (sessionStorage.unidade !== undefined)
            this.unidade = JSON.parse(sessionStorage.unidade);

        this.Iniciar();
    }

    RastreiaAlteracoes() {

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        let hour = today.getHours();
        let mi = today.getMinutes();
        let se = today.getSeconds();

        this.dados.lastuser = this.usuario.login;
        this.dados.lastdate = `${yyyy}-${mm}-${dd}`;
        this.dados.lasttime = `${hour}:${mi}:${se}`;
        this.dados.condominio = this.unidade.condominio;
        this.dados.bloco = this.unidade.bloco;
        this.dados.andar = this.unidade.andar;
        this.dados.unidade = this.unidade.num;
    }

    PreparaAcessoUsuario() {

        this.acesso.AoEfetuarLogin = function (usuario) {
            console.debug(usuario);
            sessionStorage.usuario = JSON.stringify(usuario);
            this.usuario = usuario;
            this.Iniciar();
        }.bind(this);

        this.acesso.AoFalharLogin = function () {

        };

        this.acesso.AoSolicitarRecuperarSenha = function () {

        };

        this.acesso.AoSolicitarNovoUsuário = function () {

        };

        this.acesso.ExibirLogin();
    }

    Iniciar() {

        this.layoutapp = new MainLayout();
        this.header = new MainHeader(this.layoutapp.mainlayout, this.layoutapp.header, this.usuario);
        this.mainmenu = new MainMenu(this.layoutapp.menu, this.usuario.recursos);
        this.mainpage = new MainPage(this.layoutapp.page);
        this.seletor = new Seletor(this.mainpage.seletor);

        this.header.AoCarregarHeader = function () {
            if (this.unidade !== undefined)
                this.header.ApresentaUnidade(this.unidade);
        }.bind(this);

        window.addEventListener('AoSelecionarUnidade', function(e) {
            this.unidade = e.detail;
            sessionStorage.unidade = JSON.stringify(this.unidade);
            this.header.ApresentaUnidade(this.unidade);
        }.bind(this));

        window.addEventListener('AoSelecionarItemMenu', function (e) {
            this.AbreRecurso(e.detail);
        }.bind(this));

    }

    AbreRecurso(item) {

        if (item.acesso_unidade === true && this.unidade === undefined) {
            dhtmlx.alert({
                title: 'Atenção',
                type: 'alert-warning',
                text: 'Selecione a unidade para acesso'
            });
            return;
        }

        this.mainpage.display.detachObject(true);

        let recurso = this.recursos.find(value => value.name === item.objeto);

        new recurso({
            page: this.mainpage.display,
            usuario: this.usuario,
            unidade: this.unidade
        });
    }

}

window.app = new Supervisor();