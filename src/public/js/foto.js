'use strict';
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