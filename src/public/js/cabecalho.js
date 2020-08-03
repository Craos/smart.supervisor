class MainHeader extends EndPoint {

    ifr;

    constructor(component, cell) {
        super();
        component.attachEvent('onContentLoaded', function (id) {
            this.ifr = component.cells(id).getFrame();
            this.ifr.contentWindow.document.getElementById('nome').innerText = window.usuario.informacoes.nome.split(' ')[0];
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