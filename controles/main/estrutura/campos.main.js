/**
 * Created by Oberdan on 08/06/14.
 */

var campos_main = [
    {type: "settings", labelAlign: "left", inputHeight: "80", offsetLeft: "5", offsetTop: "5", position: "label-top"},
    {type: "block", list: [
        {type: "fieldset", name: "cadastro_morador", label: "Cadastro do Morador", width: 920, list: [
            {type: "template", name:"usuario", value: "<a style='text-decoration: none' href='#' onclick='cadastro();'>\
                    <div class='opcao'>\
                        <img src='controles/main/img/main/user.png' alt='Conta do usu&aacute;rio'>\
                        <p>Conta do usu&aacute;rio</p>\
                        <span>Resgate de senha e altera&ccedil;&otilde;es de acesso do usu&aacute;rio respons&aacute;vel pela unidadecorrente</span>\
                    </div>\
                </a>"
            },
            {type: "newcolumn"},
            {type: "template", name:"unidadecorrente", value: "<a style='text-decoration: none' href='#' onclick='unidadecorrente();'>\
                    <div class='opcao'>\
                        <img src='controles/main/img/main/unidadecorrente.png' alt='Minha Unidade'>\
                        <p>Minha unidadecorrente</p>\
                        <span>Forne&ccedil;a informa&ccedil;&otilde;es gerais a respeito do seu apartamento</span>\
                    </div>\
                </a>"
            },
            {type: "newcolumn"},
            {type: "template", name:"moradores", value: "<a style='text-decoration: none' href='#' onclick='moradores();'>\
                    <div class='opcao'>\
                        <img src='controles/main/img/main/familiares.png' alt='Meus Familiares'>\
                        <p>Moradores da unidadecorrente</p>\
                        <span>Cadastre as pessoas que moram nesta unidadecorrente</span>\
                    </div>\
                </a>"
            },
            {type: "newcolumn"},
            {type: "template", name:"veiculos", value: "<a style='text-decoration: none' href='#' onclick='veiculos();'> \
                    <div class='opcao'>\
                        <img src='controles/main/img/main/carro.png' alt='Veículos'>\
                        <p>Ve&iacute;culos</p>\
                        <span>Cadastro de ve&iacute;culos da unidadecorrente</span>\
                    </div>\
                </a>"
            },
/*	        {type: "newcolumn"},
	        {
		        type: "template", name: "empregados", value: "<a style='text-decoration: none' href='#' onclick='empregados();'> \
                    <div class='opcao'>\
                        <img src='controles/main/img/main/empregados.png' alt='Empregados'>\
                        <p>Funcion&aacute;rios</p>\
                        <span>Registro de pessoas que trabalham para sua unidadecorrente</span>\
                    </div>\
                </a>"
	        },*/
            {type: "newcolumn"},
            {type: "template", name:"visitantes", value: "<a style='text-decoration: none' href='#' onclick='visitantes();'> \
                    <div class='opcao'>\
                        <img src='controles/main/img/main/visitantes.png' alt='Visitantes'>\
                        <p>Visitantes pr&eacute;-autorizados</p>\
                        <span>Informe a portaria sobre visitantes que podem entrar sem a presen&ccedil;a de um morador</span>\
                    </div>\
                </a>"
            },
            {type: "newcolumn"},
            {type: "template", name:"hospedes", value: "<a style='text-decoration: none' href='#' onclick='hospedes();'> \
                    <div class='opcao'>\
                        <img src='controles/main/img/main/hospedes.png' alt='Hospedes'>\
                        <p>Controle de H&oacute;spedes</p>\
                        <span>Cadastro de pessoas autorizadas ao acesso em &aacute;reas especiais</span>\
                    </div>\
                </a>"
            },
            {type: "newcolumn"},
            {type: "template", name:"animais", value: "<a style='text-decoration: none' href='#' onclick='animais();'>\
                    <div class='opcao'>\
                        <img src='controles/main/img/main/animais.png' alt='Meus Familiares'>\
                        <p>Animais dom&eacute;sticos</p>\
                        <span>Informe os detalhes dos animais dom&eacute;sticos da unidadecorrente</span>\
                    </div>\
                </a>"
            },
            {type: "newcolumn"},
            {type: "template", name:"termo", value: "<a style='text-decoration: none' href='#' onclick='termo();'>\
                    <div class='opcao'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Termo de responsabilidade e aceite</p>\
                        <span>Leia o termo de responsabilidade e aceite, a ser assinado na valida&ccedil;&atilde;o do cadastro</span>\
                    </div>\
                </a>"
            },
            {type: "newcolumn"},
            {type: "template", name:"manual", value: "<a style='text-decoration: none' href='#' onclick='manual();'>\
                    <div class='opcao'>\
                        <img src='controles/main/img/main/manual.png' alt='Termo'>\
                        <p>Cadastro passo a passo</p>\
                        <span>Leia o informativo de cadastro, passo a passo</span>\
                    </div>\
                </a>"
            }
        ]},
        {type: "fieldset", name: "portaria", label: "Portaria", width: 920, list: [
	        {type: "template", name:"prestadores", value: "<a style='text-decoration: none' href='#' onclick='prestadores();'>\
                    <div class='opcao'>\
                        <img src='controles/main/img/main/prestadores.png' alt='Prestadores'>\
                        <p>Prestadores de Servi&ccedil;o / Funcion&aacute;rios</p>\
                        <span>Cadastro de prestadores de servi&ccedil;o, entregadores e funcion&aacute;rios</span>\
                    </div>\
                </a>"
	        },
	        {type: "newcolumn"},
            {type: "template", name:"acesso_moradores", value: "<a style='text-decoration: none' href='#' onclick='acesso_morador();'>\
                    <div class='opcao'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Historico de acesso dos moradores</p>\
                        <span>Listagem de passagem pedestre dos moradores</span>\
                    </div>\
                </a>"
            },
            {type: "newcolumn"},
            {type: "template", name:"monitor_veiculo", value: "<a style='text-decoration: none' href='#' onclick='acesso_veiculos();'>\
                    <div class='opcao'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Historico de acesso veicular</p>\
                        <span>Listagem de passagem com veículo pela portaria</span>\
                    </div>\
                </a>"
            },
            {type: "newcolumn"},
            {type: "template", name:"monitor_pedestre", value: "<a style='text-decoration: none' href='#' onclick='monitor_pedestre();'>\
                    <div class='opcao'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Monitor de pedestres</p>\
                        <span>Monitor de acessos RFID</span>\
                    </div>\
                </a>"
            },
            {type: "newcolumn"},
            {type: "template", name:"monitor_veiculo_tag", value: "<a style='text-decoration: none' href='#' onclick='monitor_veiculo();'>\
                    <div class='opcao'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Monitor de veiculos</p>\
                        <span>Monitor de acessos TAG</span>\
                    </div>\
                </a>"
            }
        ]}
    ]}
];