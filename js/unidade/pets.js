class Pets {

    constructor(container, info) {

        this.container = container;
        this.info = info;

    }

    MontaLayout() {

        this.toolbar = this.container.attachToolbar({
            icon_path: 'img/toolbar/unidade/',
            items: [
                {type: 'button', id: 'atualizar', img: 'atualizar.png', text: 'Atualizar'}
            ]
        });

        this.MontaForm();
    }

    MontaForm() {

        let that = this;
        that.container.attachForm(forms.unidade.usuario);

    }

}