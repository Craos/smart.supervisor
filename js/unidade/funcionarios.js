class Funcionarios {

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
            pattern: '2U',
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            cells: [
                {
                    id: 'a',
                    width: 200,
                    header: false,
                },
                {
                    id: 'b',
                    header: false,
                }
            ]
        });

        this.layout.cells('b').attachToolbar({
            icon_path: 'img/toolbar/unidade/',
            items: toolbars.funcionarios
        }).attachEvent("onClick", function (id) {

            switch (id) {
                case 'novo':
                    that._info.FormLimpar(that.form);
                    break;
                case 'salvar':
                    that.form.validate();
                    break;
                case 'foto':
                    that._info.FormObterFoto(that.form, that.AoObterFoto);
                    break;
                case 'remover':
                    that._info.FormRemover(that.form, that.Atualizar);
                    break;
            }

        });

        this.MontaForm();
        this.Atualizar();

    }

    MontaForm() {

        let that = this;
        this.form = this.layout.cells('b').attachForm(forms.funcionarios);
        this.form.attachEvent("onAfterValidate", function (status) {

            if (status === false)
                return;

            let api = '/smart/public/funcionarios';
            let data = that.form.getFormData();
            if (parseInt(data.num) > 0) {
                that._info.FormEditar(api, data, data.num, that.Atualizar);
            } else {
                console.debug('salvar');
                that._info.FormSalvar(api, data, that.Atualizar);
            }
        });

    }

    AoObterFoto() {

    }

    Atualizar() {

        let that = this;

        this._info.ListaRegistros({
            cell: this.layout.cells('a'),
            template: './html/funcionarios.tpl.html',
            api: '/smart/public/funcionarios',
            fields: 'num,nome',
            unidade: that._info,
            onclick: function (data) {
                that._info.api = '/smart/public/funcionarios';
                that._info.Listar({
                    filter: {
                        num: data.num
                    },
                    callback: function (response) {
                        that.form.setFormData(response.dados[0]);
                    }
                })
            }
        })
    }

}