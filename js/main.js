dhtmlxEvent(window, 'load', function () {

    /*if (!sessionStorage.auth) {

        sessionStorage.credentials = JSON.stringify({
            client_id: 'OEUh02c5D7x3BE'
        });

        window.location = '../smart.auth';
        return;
    }*/

    let that = this, layout, layoutesquerda, list;

    layout = new dhtmlXLayoutObject({
        parent: document.body,
        pattern: '3T',
        offsets: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        cells: [
            {
                id: 'a',
                height: 50,
                header: false,
                fix_size: [true, true]
            },
            {
                id: 'b',
                width: 230,
                header: false,
                fix_size: [true, true]
            },
            {
                id: 'c',
                header: false
            }
        ]
    });

    layoutesquerda = layout.cells('b').attachLayout({
        pattern: '2E',
        offsets: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        cells: [
            {
                id: 'a',
                height: 50,
                header: false,
                fix_size: [true, true]
            },
            {
                id: 'b',
                header: false,
            }
        ]
    });

    list = layoutesquerda.cells('b').attachList({
        container: "data_container",
        type: {
            template: "http->./html/modulos.html",
            height: 40
        }
    });

    list.parse([
        {
            id: 'usuario',
            text: 'Conta do usuário',
            icon: 'usuario.png',
        },
        {
            id: 'unidade',
            text: 'Informações gerais',
            icon: 'unidade.png',
        },
        {
            id: 'moradores',
            text: 'Moradores',
            icon: 'familiares.png',
            qtd: 5,
            visibility: 'visible'
        },
        {
            id: 'veiculos',
            text: 'Veículos',
            icon: 'veiculos.png',
            qtd: 2,
            visibility: 'visible'
        },
        {
            id: 'funcionarios',
            text: 'Funcionários da unidade',
            icon: 'funcionarios.png',
            qtd: 1,
            visibility: 'visible'
        },
        {
            id: 'hospedes',
            text: 'Hóspedes',
            icon: 'hospedes.png',
            qtd: 2,
            visibility: 'visible'
        },
        {
            id: 'pets',
            text: 'Pets',
            icon: 'pets.png',
            qtd: 2,
            visibility: 'visible'
        },
        {
            id: 'preautorizados',
            text: 'Visitantes pré-autorizados',
            icon: 'preautorizados.png',
            qtd: 6,
            visibility: 'visible'
        },
        {
            id: 'personal',
            text: 'Personal trainer',
            icon: 'personal.png',
        },
        {
            id: 'registro',
            text: 'Registro de acesso',
            icon: 'registro.png',
        },
    ], 'json');
});