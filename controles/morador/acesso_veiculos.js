/**
 * Created by Oberdan on 06/06/14.
 */
var gridAcessoVeiculos;
var formAcessoVeiculos;
function acesso_veiculos() {

    var paramMorador;
    formAcessoVeiculos = nav_layout_principal.attachForm(campos_acesso_veiculos);

    gridAcessoVeiculos = new dhtmlXGridObject(formAcessoVeiculos.getContainer("gridAcessoVeiculos"));
    gridAcessoVeiculos.setIconsPath('./codebase/imgs/');
    gridAcessoVeiculos.init();
    gridLoadacesso_veiculos();
}

function gridLoadacesso_veiculos() {

    if (unidadecorrente === undefined)
        return;

    var gridSourceacesso_veiculos;
    gridSourceacesso_veiculos = {
        contenttype: 'xml',
        action: 'dhtmlxgrid',
        origem: 'acesso.historico_passagem_veiculo',
        campos: 'filedate as data, timerg as horário, bloqueio, nome_local, situcacao, sentido, modelo, cor, placa_letras || placa_numeros as placa',
        where: 'condominio/' + unidadecorrente.condominio +
        '|bloco/' + unidadecorrente.bloco +
        '|andar/' + unidadecorrente.andar +
        '|unidadecorrente/' + unidadecorrente.pk_unidade,
        orderby: '1 desc, 2 desc',
        usecheckbox: 'false',
        usedecimal: 'nome',
        chave: 'num',
        displaychave: 'false'
    };

    gridAcessoVeiculos.loadXML(sys.setParameters(gridSourceacesso_veiculos));
}