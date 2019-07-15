class Veiculos {

    constructor() {
    }

    set info(value) {
        this._info = value;
    }

    set container(value) {
        this._container = value;
    }

    MontaLayout() {

        this.toolbar = this._container.attachToolbar({
            icon_path: 'img/toolbar/unidade/',
            items: toolbars.veiculos
        });

        this.MontaForm();
    }

    MontaForm() {

        let that = this;
        this.form = that._container.attachForm(forms.veiculos);
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