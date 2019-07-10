class Preautorizados {

    constructor(container, info) {

        this.container = container;
        this.info = info;

    }

    MontaLayout() {

        this.toolbar = this.container.attachToolbar({
            icon_path: 'img/toolbar/unidade/',
            items: toolbars.unidade.preautorizados
        });

        this.MontaForm();
    }

    MontaForm() {

        let that = this;
        that.container.attachForm(forms.unidade.usuario);

    }

}