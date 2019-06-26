/**
 * Created by Oberdan on 08/06/14.
 */

var campos_main_esquerda = [
    {type: "settings", name:"config", labelAlign: "left", inputHeight: 40, offsetLeft: "1", offsetTop: "0", position: "label-top"},
    {
        type: "block", name: "bloco_opcoes", list: [
        {
            type: "template", name: "usuario", value: "<a style='text-decoration: none' href='#' onclick='cadastro();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/user.png' alt='Conta do usu&aacute;rio'>\
                        <p>Conta do usu&aacute;rio</p>\
                    </div>\
                </a>"
        },
        {
            type: "template", name: "admunidade", value: "<a style='text-decoration: none' href='#' onclick='admunidade();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/admunidade.png' alt='Minha Unidade'>\
                        <p>Informa&ccedil;&otilde;es gerais</p>\
                    </div>\
                </a>"
        },
        {
            type: "template", name: "moradores", value: "<a style='text-decoration: none' href='#' onclick='moradores();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/familiares.png' alt='Meus Familiares'>\
                        <p>Moradores da admunidade</p>\
                    </div>\
                </a>"
        },
        {
            type: "template", name: "veiculos", value: "<a style='text-decoration: none' href='#' onclick='veiculos();'> \
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/carro.png' alt='Veículos'>\
                        <p>Ve&iacute;culos</p>\
                    </div>\
                </a>"
        },
	    {
		    type: "template", name: "empregados", value: "<a style='text-decoration: none' href='#' onclick='empregados();'> \
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/empregados.png' alt='Empregados'>\
                        <p>Funcion&aacute;rios da admunidade</p>\
                    </div>\
                </a>"
	    },
        {
            type: "template", name: "visitantes", value: "<a style='text-decoration: none' href='#' onclick='visitantes();'> \
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/visitantes.png' alt='Empregados'>\
                        <p>Visitantes pr&eacute;-autorizados</p>\
                    </div>\
                </a>"
        },
	    {
		    type: "template", name: "prestadores", value: "<a style='text-decoration: none' href='#' onclick='prestadores_autorizados();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/dossier.png' alt='Prestadores'>\
                        <p>Registro de acesso</p>\
                    </div>\
                </a>"
	    },
	    {
		    type: "template", name: "personal_trainer", value: "<a style='text-decoration: none' href='#' onclick='personal_trainer();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/personal.png' alt='Personal trainer'>\
                        <p>Personal trainer</p>\
                    </div>\
                </a>"
	    },
	    {
		    type: "template", name: "correios", value: "<a style='text-decoration: none' href='#' onclick='correios();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/forward.png' alt='Prestadores'>\
                        <p>Correios</p>\
                    </div>\
                </a>"
	    },
        {
            type: "template", name: "hospedes", value: "<a style='text-decoration: none' href='#' onclick='hospedes();'> \
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/hospedes.png' alt='H&oacute;spedes'>\
                        <p>Controle de H&oacute;spedes</p>\
                    </div>\
                </a>"
        },
        {
            type: "template", name: "animais", value: "<a style='text-decoration: none' href='#' onclick='animais();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/animais.png' alt='Meus Familiares'>\
                        <p>Animais dom&eacute;sticos</p>\
                    </div>\
                </a>"
        },
        {
            type: "template", name: "termo", value: "<a style='text-decoration: none' href='#' onclick='termo();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Termo de responsabilidade</p>\
                    </div>\
                </a>"
        },
        {
            type: "template", name: "manual", value: "<a style='text-decoration: none' href='#' onclick='manual();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/manual.png' alt='Termo'>\
                        <p>Cadastro passo a passo</p>\
                    </div>\
                </a>"
        },
	    {
		    type: "template", name: "prestadores", value: "<a style='text-decoration: none' href='#' onclick='prestadores();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/prestadores.png' alt='Cadastro de prestadores'>\
                        <p>Cadastro de prestadores</p>\
                    </div>\
                </a>"
	    },
	    {
            type: "template", name: "acesso_moradores", value: "<a style='text-decoration: none' href='#' onclick='acesso_morador();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Acessos dos moradores</p>\
                    </div>\
                </a>"
        },
        {
            type: "template", name: "monitor_veiculo", value: "<a style='text-decoration: none' href='#' onclick='acesso_veiculos();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Acessos veicular</p>\
                    </div>\
                </a>"
        },
        {
            type: "template", name: "monitor_pedestre", value: "<a style='text-decoration: none' href='#' onclick='monitor_pedestre();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Monitor de pedestres</p>\
                    </div>\
                </a>"
        },
        {
            type: "template", name: "monitor_veiculo", value: "<a style='text-decoration: none' href='#' onclick='monitor_veiculo();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Monitor de veiculos</p>\
                    </div>\
                </a>"
        },
        {
            type: "template", name: "visitante", value: "<a style='text-decoration: none' href='#' onclick='visitante();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Histórico da triagem</p>\
                    </div>\
                </a>"
        },
        {type: "template", name:"monitor_veiculo_tag", value: "<a style='text-decoration: none' href='#' onclick='monitor_veiculo();'>\
                    <div class='item_esquerda'>\
                        <img src='controles/main/img/main/termo.png' alt='Termo'>\
                        <p>Monitor de veiculos</p>\
                    </div>\
                </a>"
        }
    ]}
];