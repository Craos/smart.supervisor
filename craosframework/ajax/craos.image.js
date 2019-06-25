/**
 * Created by Oberdan on 19/04/15.
 */

var windowAtualizarDadosFoto;
var formCadastroFoto;
var ultimaimagem;
var numero_identificador_registro;

var Image = {

    openWebcam : function(num_morador, titulo_janela, target_table, target_field, target_form) {
        numero_identificador_registro = num_morador;
        var userinfo;
        var windowID = 'windowAtualizarDadosFoto';
        var windowsClientInfo;
        var titulo = 'Obter foto do morador';

        if (titulo_janela != undefined)
            titulo = titulo_janela;

        windowsClientInfo = new dhtmlXWindows();
        windowsClientInfo.setSkin('dhx_terrace');

        windowAtualizarDadosFoto = windowsClientInfo.createWindow(windowID, 0, 0, 800, 310);
        windowAtualizarDadosFoto.setText(titulo);
        windowAtualizarDadosFoto.denyResize();
        windowAtualizarDadosFoto.centerOnScreen();
        windowAtualizarDadosFoto.button('park').hide();
        windowAtualizarDadosFoto.button('minmax1').hide();

        formCadastroFoto = windowAtualizarDadosFoto.attachForm(campos_foto);
        userinfo = JSON.parse(docCookies.getItem('userinfo'));

        formCadastroFoto.attachEvent("onButtonClick", function (name) {
            if (name == 'salvar') {
                ExibeFoto();
            } else if (name == 'confirmar') {

                var target_table_def = 'condominio.moradores';
                if (target_table != undefined)
                    target_table_def = target_table;

                var target_field_def = 'foto1';
                if (target_field != undefined) {
                    target_field_def = target_field;
                }

                var formFotoSend = {
                    contenttype: 'xml',
                    action: 'updateimage',
                    origem: target_table_def,
                    num: numero_identificador_registro,
                    targetfield: target_field_def
                };

                if (target_field != undefined) {
                    formFotoSend[target_field] = ultimaimagem;
                } else {
                    formFotoSend["foto1"] = ultimaimagem;
                }

                sys.FormAction(sys.setParameters(formFotoSend), eval(target_form));
            }
        });

        var obterfoto = formCadastroFoto.getContainer("displayfoto");
        obterfoto.innerHTML = '<iframe id="localmedia" src="craos.image.html" style="border: 0; width: 249px; height: 190px;"></iframe>';

    },
    webcamToImage : function() {

        var iframe = document.getElementById('localmedia');
        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

        var video = innerDoc.getElementById('objvideo');
        var canvas = document.createElement('canvas');
        var ratio = 400 / video.videoHeight;

        canvas.width = ratio * video.videoWidth;
        canvas.height = 400;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, canvas.width, canvas.height);
        ultimaimagem = canvas.toDataURL("image/png;base64;charset=utf-8");

        var fotocadastro = formCadastroFoto.getContainer("fotocadastro");
        if (fotocadastro != null)
            fotocadastro.innerHTML = '<img style="width: 248px; height: 180px;" alt="" src="' + ultimaimagem + '">';

    }
};