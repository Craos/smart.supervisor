class Seletor extends EndPoint {

    constructor(cell) {
        super();
        this.endpoint = '/condominio/unidades';
        this.pesquisar = '?';

        let form = cell.attachForm([
            {type: 'settings', position: 'label-top', labelAlign: 'left', offsetLeft: 10, inputWidth: 60},
            {type: 'input', name: 'bloco', label: 'Bloco', required: true},
            {type: 'newcolumn'},
            {type: 'input', name: 'unidade', label: 'Unidade', required: true},
            {type: 'newcolumn'},
            {type: 'button', name: 'selecionar', offsetTop: 20, value: "<span class='btnsmart'><i class='fas fa-angle-double-right azulescuro'></i> Selecionar</span>"},
            {type: 'newcolumn'},
            {type: 'button', name: 'pesquisar', offsetTop: 20, value: "<span class='btnsmart'><i class='fas fa-search azulescuro'></i> Pesquisar</span>"}
        ]);

        form.attachEvent('onAfterValidate', function (status) {
            if (status === true) {
                let dados = form.getFormData();
                let id = 'bloco=eq.' + dados.bloco + '&unidade=eq.' + dados.unidade;
                this.Pesquisar(id).then(unidade => {
                    window.dispatchEvent(new CustomEvent('AoSelecionarUnidade', {
                        detail: unidade
                    }));
                }).catch(reason => {
                    if (reason.status === 406) {
                        dhtmlx.alert({
                            title: 'Atenção',
                            type: 'alert-error',
                            text: 'Não foi possível localizar a unidade ' + dados.bloco + '-' + dados.unidade
                        });
                    }
                })
            }
        }.bind(this));

        form.attachEvent('onButtonClick', function (id) {

            if (id === 'selecionar') {
                form.validate();
            } else if (id === 'pesquisar') {
                new Pesquisar();
            }

        });

        form.attachEvent("onEnter", function () {
            form.validate();
        });
    }
}