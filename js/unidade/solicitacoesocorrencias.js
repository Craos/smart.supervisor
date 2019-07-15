class SolicitacoesOcorrencias {

    constructor(container, info) {

        this.container = container;
        this.info = info;

    }

    MontaLayout() {

        this.toolbar = this.container.attachToolbar({
            icon_path: 'img/toolbar/unidade/',
            items: toolbars.unidade.funcionarios
        });

        this.MontaForm();
    }

    MontaForm() {

        let that = this;
        that.container.attachForm(forms.unidade.usuario);

    }

}