let forms = {
    unidade: {
        geral: [
            {type:"radio", name: "situacao", value: 1, required: true, label:"Informações do proprietário", list:[
                {type: "input", required: true, name: "nome_proprietario", label: "Nome do proprietário"},
                {type: "input", required: true, name: "rg", label: "Doc. de identificação"},
                {type: "input", required: true, name: "telefone_proprietario", label: "Telefone"}
            ]},
            {type: "newcolumn"},
            {type:"radio", name: "situacao", value: 1, required: true, label:"Informações da imobiliária", list:[
                {type: "input", required: true, name: "imobiliaria", label: "Nome da imobiliária"},
                {type: "input", required: true, name: "nome_proprietario_imobiliaria", label: "Nome do proprietário"},
                {type: "input", required: true, name: "telefone_imobiliaria", label: "Telefone"},
                {type: "input", name: "telefone_proprietario_imobiliaria", label: "Telefone"}
            ]}
        ],
        usuario: [
            { type: "input", name: "nome", label: "Nome completo"},
            { type: "input", name: "login", label: "Usuário", readonly: true},
            { type: "input", name: "email", label: "E-mail"},
            { type: "password", name: "password", label: "Nova senha", maxLength: 10},
            { type: "password", name: "repassword", label: "Repita a nova senha", maxLength: 10},
        ]
    }


};