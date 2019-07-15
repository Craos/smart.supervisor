class SolicitacoesOcorrencias {

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
            items: toolbars.solicitacoesocorrencias
        });

    }

}