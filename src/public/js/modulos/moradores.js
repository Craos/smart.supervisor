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