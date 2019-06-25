/**
 * Created by Oberdan on 06/05/14.
 */
function getSnapshot(htmlPlayerId, PostScript, PostImage) {
    var video = document.getElementById(htmlPlayerId);
    var canvas = document.createElement('canvas');
    var ratio = 400 / video.videoHeight;

    canvas.width = ratio * video.videoWidth;
    canvas.height = 400;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, canvas.width, canvas.height);

    // Imagem da pessoa
    var rawImageData = 'dados=verdadeiro&';
    rawImageData += canvas.toDataURL("image/png;base64");

    var ajax = new XMLHttpRequest();
    ajax.open("POST", PostScript, false);
    ajax.setRequestHeader('Content-Type', 'application/upload');

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var sn = document.getElementById('snapshot');
            sn.style.backgroundImage = "url('" + PostImage + ajax.response + "')";
            sn.style.backgroundSize = "100%";
            sn.style.backgroundRepeat = "no-repeat";
            sn.style.backgroundPosition = "center";

        }
    };
    ajax.send(rawImageData);
}

// Dados da pessoa
function sendInput(objeto) {

    var http = new XMLHttpRequest();
    var url = "save.php";
    var params = objeto.id + '=' + objeto.value;
    http.open("POST", url, true);

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.setRequestHeader("Content-length", params.length);
    http.setRequestHeader("Connection", "close");

    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200)
            console.log(http.responseText);
    };
    http.send(params);
}