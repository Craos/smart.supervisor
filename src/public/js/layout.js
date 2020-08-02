class MainLayout {

    mainlayout;
    header;
    menu;
    page;

    constructor() {
        this.mainlayout = new dhtmlXLayoutObject({
            parent: document.body,
            pattern: '3T',
            offsets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            cells: [
                {id: 'a', header: false, height: 40, fix_size: [true, true]},
                {id: 'b', header: false, width: 230},
                {id: 'c', header: false},
            ]
        });

        this.header = this.mainlayout.cells('a');
        this.menu = this.mainlayout.cells('b');
        this.page = this.mainlayout.cells('c');
    }

}