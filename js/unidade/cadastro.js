class Cadastro {

    constructor() {
    }

    set info(value) {
        this._info = value;
    }

    set container(value) {
        this._container = value;
    }

    MontaLayout() {

        let that = this;

        this.layout = this._container.attachLayout({
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

        this.layout.cells('b').attachToolbar({
            icon_path: 'img/toolbar/unidade/',
            items: toolbars.cadastro
        }).attachEvent("onClick", function () {
            that.form.validate();
        });

        this.ApresentaUnidade();
        this.MontaForm();
    }

    ApresentaUnidade() {

        let that = this;
        let dados = this._info.unidade.geral;

        this.layout.attachEvent("onContentLoaded", function(id){

            let ifr = that.layout.cells(id).getFrame().contentWindow.document;

            ifr.getElementById("registro").innerHTML = dados.num;
            ifr.getElementById("bloco").innerHTML = dados.bloco;
            ifr.getElementById("andar").innerHTML = dados.andar;
            ifr.getElementById("unidade").innerHTML = dados.unidade;
            ifr.getElementById("nome_proprietario").innerHTML = dados.nome_proprietario;
            ifr.getElementById("lastdate").innerHTML = dados.lastdate;
            ifr.getElementById("lasttime").innerHTML = dados.lasttime;
            ifr.getElementById("lastuser").innerHTML = dados.lastuser;

        });

        this.layout.cells('a').attachURL("./html/cadastro.tpl.html");

    }

    MontaForm() {

        let that = this;
        this.form = that.layout.cells('b').attachForm(forms.cadastro);
        this.form.attachEvent("onAfterValidate", function (status) {

            if (status === false)
                return;

            let data = that.form.getFormData();

            that._info.Atualizar({
                data: data,
                filter: {
                    num: data.num
                },
                callback: function (response) {
                    console.debug(response);
                }
            })

        });
    }
}