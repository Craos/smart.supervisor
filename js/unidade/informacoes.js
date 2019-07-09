class Informacoes {

    constructor(container, info) {

        this.container = container;
        this.info = info;

    }

    MontaLayout() {

        this.layout = this.container.attachLayout({
            pattern: '2E',
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            cells: [
                {
                    id: 'a',
                    height: 50,
                    header: false,
                    fix_size: [true, true]
                },
                {
                    id: 'b',
                    header: false,
                }
            ]
        });

        this.toolbar = this.layout.cells('b').attachToolbar({
            icon_path: 'img/toolbar/unidade/',
            items: [
                {type: 'button', id: 'atualizar', img: 'atualizar.png', text: 'Atualizar'}
            ]
        });

        this.ApresentaUnidade();
        this.MontaForm();
    }

    ApresentaUnidade() {

        let that = this;
        this.layout.attachEvent("onContentLoaded", function(id){

            let ifr = that.layout.cells(id).getFrame();

            ifr.contentWindow.document.getElementById("registro").innerHTML = that.info.unidade.geral.num;
            ifr.contentWindow.document.getElementById("bloco").innerHTML = that.info.unidade.geral.bloco;
            ifr.contentWindow.document.getElementById("andar").innerHTML = that.info.unidade.geral.andar;
            ifr.contentWindow.document.getElementById("unidade").innerHTML = that.info.unidade.geral.unidade;
            ifr.contentWindow.document.getElementById("nome_proprietario").innerHTML = that.info.unidade.geral.nome_proprietario;
            ifr.contentWindow.document.getElementById("lastdate").innerHTML = that.info.unidade.geral.lastdate;
            ifr.contentWindow.document.getElementById("lasttime").innerHTML = that.info.unidade.geral.lasttime;
            ifr.contentWindow.document.getElementById("lastuser").innerHTML = that.info.unidade.geral.lastuser;

        });

        this.layout.cells('a').attachURL("./html/unidade_info.html");

    }

    MontaForm() {

        let that = this;
        that.layout.cells('b').attachForm(forms.unidade.geral);

    }
}