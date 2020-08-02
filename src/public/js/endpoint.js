class EndPoint {
    endpoint;
    listar;
    pesquisar;

    constructor() {
        this.host = window.location.origin;
    }

    Listar() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'GET',
                url: this.host + this.endpoint + this.listar,
                dataType: 'json',
                success: function (response) {
                    resolve(response);
                }
            }).fail(function (jqXHR) {
                if (jqXHR.responseJSON !== undefined)
                    reject(new Error(jqXHR.responseJSON.message));
                console.error(jqXHR);
            });
        });
    };

    Combo() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'GET',
                url: this.host + this.endpoint,
                dataType: 'json',
                success: function (response) {
                    let options = [];
                    response.filter(function (item) {
                        options.push({value: item.id, text: item.descricao})
                    });
                    resolve(options);
                }
            }).fail(function (jqXHR) {
                if (jqXHR.responseJSON !== undefined)
                    reject(new Error(jqXHR.responseJSON.message));
                console.error(jqXHR);
            });
        });
    };

    // Pesquisa um registro utilizando o id da tabela
    Pesquisar(id) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'GET',
                url: this.host + this.endpoint + this.pesquisar + id,
                dataType: 'json',
                headers: {
                    Prefer: 'return=representation',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                success: function (response) {
                    resolve(response);
                }
            }).fail(function (jqXHR) {
                console.error(jqXHR);
                reject(jqXHR)
            });
        });
    };

    // Envia o registro para a tabela
    Adicionar() {

        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: this.host + this.endpoint,
                dataType: 'json',
                headers: {
                    Prefer: 'return=representation',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                success: function (response) {
                    resolve(response);
                },
                data: this.novodados
            }).fail(function (jqXHR) {
                if (jqXHR.responseJSON !== undefined)
                    reject(new Error(jqXHR.responseJSON.message));
                console.error(jqXHR);
            });
        });
    };

    // Altera o registro de uma tabela
    Editar() {

        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'PATCH',
                url: this.host + this.endpoint,
                dataType: 'json',
                headers: {
                    Prefer: 'return=representation',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                success: function (response) {
                    this.novodados = undefined;
                    resolve(response);
                }.bind(this),
                data: this.novodados
            }).fail(function (jqXHR) {
                if (jqXHR.responseJSON !== undefined)
                    reject(new Error(jqXHR.responseJSON.message));
                console.error(jqXHR);
            });
        });
    };

    // Remove o registro da tabela
    Remover() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'DELETE',
                url: this.host + this.endpoint,
                dataType: 'json',
                headers: {
                    Prefer: 'return=representation',
                    Accept: 'application/vnd.pgrst.object+json'
                },
                success: function (response) {
                    resolve(response);
                },
                data: this.data
            }).fail(function (jqXHR) {
                if (jqXHR.status === 406) {
                    resolve('O registro foi removido anteriormente');
                }
                if (jqXHR.responseJSON !== undefined)
                    reject(new Error(jqXHR.responseJSON.message));
                console.error(jqXHR);
            });
        });
    };


}