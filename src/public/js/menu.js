class MainMenu {

    mainManu;

    constructor(cell) {

        this.mainManu = cell.attachList({
            container: 'data_container',
            type: {
                template: 'http->./html/mainmenu.html',
                height: 45
            }
        });

        /**
         * @todo Filtrar os itens do menu
         * @body Os menus devem ser filtrados de acordo com o perfil do usuário
         */
        window.usuario.autorizacoes.forEach(autorizacao => {
            if (typeof window.recursos[autorizacao.nome].prototype.Config === "function")
                this.mainManu.add(window.recursos[autorizacao.nome].prototype.Config());
        });

        this.mainManu.attachEvent('onItemClick', function (id) {
            Object.values(window.recursos).forEach(recurso => {

                if (recurso.prototype.Config().id !== id)
                    return;

                window.dispatchEvent(new CustomEvent('AoSelecionarItemMenu', {
                    detail: recurso
                }));

            });
            return true;
        });

    }

}