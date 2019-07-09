let ReservadeEspaco = function (info) {

    let win, that = this, layout, webservice = new Webservice();

    this.Exibir = function () {

        win = new dhtmlXWindows();
        let winres = win.createWindow('reservaespaco', 0, 0, 600, 500);

        winres.setText('Reservar espaço');
        winres.denyResize();
        winres.centerOnScreen();
        winres.button('park').hide();
        winres.button('minmax1').hide();


        layout = winres.attachLayout('2E');
        layout.cells('b').setText("Histórico de reservas");
        let cellform = layout.cells('a');
        cellform.fixSize(true, true);
        cellform.hideHeader();
        cellform.setHeight(150);

        let today = new Date();

        let form = cellform.attachForm([
            {type: "settings", labelAlign: "left", inputHeight: 18, offsetLeft: 4, offsetTop: 8, position: "label-top"},
            {type: "block", list: [
                {type: "combo", label:"Espaço", inputWidth: 180, name: "espaco", options:[
                    {text: "Home Office", value: 2495}
                ]},
                {type:"newcolumn"},
                {type: "input", name: "data", inputWidth:80, required:true, label: "Data", value: today.format("dd/mm/yyyy")},
                {type:"newcolumn"},
                {type: "input", name: "inicio", inputWidth:80, required:true, label: "Início", value: moment(today).add(20, 'm').toDate().format("HH:MM")},
                {type:"newcolumn"},
                {type: "input", name: "final", inputWidth:80, required:true, label: "Final", value:moment(today).add(240, 'm').toDate().format("HH:MM")}
            ]},
            {type: "block", list: [
                {type: "button", name: "salvar", value: "Salvar"}
            ]}
        ]);

        form.attachEvent("onButtonClick", function () {
            form.validate();
        });

        form.attachEvent("onAfterValidate", function (status){

            if (status === false)
                return;

            let datareserva = form.getItemValue('data');

            webservice.Request({
                c: 7,
                cn: 'as',
                process: 'query',
                params: JSON.stringify({
                    command: 'insert',
                    fields: {
                        condominio:info.unidade.condominio,
                        bloco:info.unidade.bloco,
                        andar:info.unidade.andar,
                        unidade:info.unidade.unidade,
                        autenticacao: info.autenticacao,
                        nome: info.nome,
                        equipamento: form.getItemValue('espaco'),
                        inicio: datareserva + ' ' + form.getItemValue('inicio'),
                        final: datareserva + ' ' + form.getItemValue('final'),
                        lastuser:'temp'
                    },
                    from: 'acesso.reserva',
                    returning: 'id'
                })
            }, function (http) {

                if (http.response === 'null' || http.response === 'false') {
                    dhtmlx.alert({
                        title: 'Atenção',
                        type: 'alert-error',
                        text: 'Houve uma falha ao cadastrar a reserva!<br>Por favor verifique a conexão de rede e tente novamente'
                    });
                    return;
                }

                dhtmlx.alert({
                    title: 'Atenção',
                    type: 'alert',
                    text: 'Reserva cadastrada com sucesso'
                });

                that.MontaGridHistorico();

            });

        });


        that.MontaGridHistorico();


    };


    this.MontaGridHistorico = function () {

        layout.cells('b').detachObject(true);
        let grid = layout.cells('b').attachGrid();
        grid.setImagePath('img/');
        grid.enableHeaderImages(false);
        grid.setHeader("Local, Início, Final, Cadastrado por");
        grid.setInitWidths(",140,140,150");
        grid.setColTypes("ro,ro,ro,ro");
        grid.setColSorting("str,date,date,str");
        grid.init();
        grid.clearAll();

        layout.cells('b').progressOn();
        that.ListarReservas(function (response) {

            if (response === null) {
                layout.cells('b').progressOff();
                return;
            }

            response.filter(function (linha) {

                let item = JSON.parse(linha.query);

                grid.addRow(item.id, [
                    item.espaco,
                    item.inicio,
                    item.final,
                    item.lastuser
                ]);

            });
            layout.cells('b').progressOff();

        });

    };

    this.ListarReservas = function (callback) {

        webservice.Request({
            c: 7,
            cn: 'as',
            process: 'query',
            params: JSON.stringify({
                command: 'select',
                fields: 'id,espaco,inicio,final,lastuser',
                from: 'acesso.historico_reservas',
                where: "autenticacao = '" + info.autenticacao + "'"
            })
        }, function (http) {

            if (http.response === 'null' || http.response === 'false') {
                callback(null);
                return;
            }

            callback(JSON.parse(http.response));
        });

    }

};