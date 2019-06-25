/**
 * Created by Oberdan on 06/06/14.
 */
var formImgMorador;
function monitor_pedestre() {

    sessionStorage.recursocorrente = 'monitor_pedestre()';
    formImgMorador = nav_layout_principal.attachForm(campos_monitor_pedestre);

    setInterval(function atualizapassagem() {
	    var listapassagem = {
		    param: 'dados',
		    contenttype: 'json',
		    action: 'directjson',
		    origem: 'acesso.monitor_passagem_morador'
	    };

        sys.FormAction(sys.setParameters(listapassagem), monitor_pedestre_imagens);

    }, 500);

}


function monitor_pedestre_imagens(http) {

    var out;
    out = JSON.parse(http.responseText);

	var fotocadastro_entrada = formImgMorador.getContainer("foto_morador_entrada");
	var fotocadastro_saida = formImgMorador.getContainer("foto_morador_saida");

	for(var i=0; i<out.length; i++) {
			if (out[i].sentido == 'Entrada') {
				fotocadastro_entrada.innerHTML = '<img style="width: 400px;" alt="" src="' + out[i].foto1 + '">';
				formImgMorador.setItemValue('nome_entrada', out[i].nome);
				formImgMorador.setItemValue('bloco_entrada', out[i].bloco);
				formImgMorador.setItemValue('unidade_entrada', out[i].unidade);
			} else {
				fotocadastro_saida.innerHTML = '<img style="width: 400px;" alt="" src="' + out[i].foto1 + '">';
				formImgMorador.setItemValue('nome_saida', out[i].nome);
				formImgMorador.setItemValue('bloco_saida', out[i].bloco);
				formImgMorador.setItemValue('unidade_saida', out[i].unidade);
			}
	}

}