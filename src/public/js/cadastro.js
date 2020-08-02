class Cadastro extends EndPoint {

    toolbar;
    form;
    grid;
    params;

    constructor(params) {
        super();
        this.params = params;
        //this.foto = new Foto();
    }

    Exibir() {

        let layout = this.params.cell.attachLayout({
            pattern: '2E',
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            cells: [
                {id: 'a', header: false},
                {id: 'b', header: false},
            ]
        });

        this.toolbar = layout.cells('a').attachToolbar({
            iconset: 'awesome',
            items: this.params.toolbar.campos
        });

        this.toolbar.attachEvent("onClick", function (id) {

            let item = this.params.toolbar.campos.find(x => x.id === id);

            switch (item.operacao) {
                case 'novo':
                    this.Novo();
                    break;
                case 'salvar':
                    this.SalvarForm();
                    break;
                case 'obterfoto':
                    this.ObterFoto();
                    break;
                case 'remover':
                    this.Remover();
                    break;
                default:
                    this.ToolBarCustomFunction(id, this);
                    break;
            }
        }.bind(this));


        this.form = layout.cells('a').attachForm(this.params.form.struct);

        this.form.attachEvent("onAfterValidate", function (status) {
            if (status === false)
                return;


        });

        this.grid = layout.cells('b').attachGrid();
        this.grid.setImagePath('./codebase/imgs/');
        this.grid.setHeader(this.params.grid.titulos);
        this.grid.init();

        this.Listar().then(value => {
            value.filter(function (linha) {
                this.grid.addRow(linha[this.params.grid.id], Object.values(linha));
            }.bind(this));
        });

        this.grid.attachEvent("onRowSelect", function (id) {
            this.Pesquisar(id).then(value => {
                this.form.setFormData(value);
                if (this.params.form.foto !== undefined) {
                    this.form.getContainer(this.params.form.foto.destino).innerHTML = '<img width="200px" alt="" src="' + value[this.params.form.foto.origem] + '"/>'
                }
            });
        }.bind(this));

    }

    HabilitarBotoes() {
        this.toolbar.forEachItem(function(itemId){
            this.toolbar.enableItem(itemId);
        }.bind(this));
    }

    Novo() {

    }

    SalvarForm() {

    }

    ObterFoto() {

    }

    Remover() {

    }

}