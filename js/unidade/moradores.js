class Moradores {

    constructor(container, info) {

        this.container = container;
        this.info = info;

    }

    MontaLayout() {

        this.toolbar = this.container.attachToolbar({
            icon_path: 'img/toolbar/unidade/',
            items: toolbars.unidade.moradores
        });

        this.MontaForm();
    }

    MontaForm() {

        let that = this;
        that.container.attachForm(forms.unidade.usuario);

    }

}