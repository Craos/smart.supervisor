class MainPage {

    page;
    seletor;
    display;

    constructor(cell) {

        this.page = cell.attachLayout({
            pattern: '2E',
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            cells: [
                {id: 'a', header: false, height: 40, fix_size: [true, true]},
                {id: 'b', header: false, width: 240},
            ]
        });

        this.seletor = this.page.cells('a');
        this.display = this.page.cells('b');

    }

}