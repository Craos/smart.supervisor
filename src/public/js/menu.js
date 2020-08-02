class MainMenu {

    mainManu;

    constructor(cell, lista) {

        this.mainManu = cell.attachList({
            container: 'data_container',
            type: {
                template: 'http->./html/mainmenu.html',
                height: 45
            }
        });

        this.mainManu.parse(lista, 'json');
        this.mainManu.attachEvent('onItemClick', function (id) {
            window.dispatchEvent(new CustomEvent('AoSelecionarItemMenu', {
                detail: lista.find(x => x.id.toString() === id)
            }));
            return true;
        });

    }

}