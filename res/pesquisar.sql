create or replace function condominio.pesquisar(param json) returns json
    language plpgsql as
$$
declare
    texto text;

    moradores json;
    funcionarios json;
    visitantes json;
    hospedes json;
    prestadores json;
    placa json;
    telefone json;
    email json;
    rg json;
    cpf json;
    cnh json;
    cnpj json;

    saida json;
begin
    texto := lower(param->>'texto');
    raise notice '%', texto;

    if (param->>'moradores' = '1') then
        moradores := array_to_json(array_agg(row_to_json(m))) from (
                                                                       select num, nome
                                                                       from condominio.moradores
                                                                       where lower(nome) like '%' || texto || '%'
                                                                   ) as m;
    end if;

    if (param->>'funcionarios' = '1') then
        funcionarios := array_to_json(array_agg(row_to_json(m))) from (
                                                                          select num, nome
                                                                          from condominio.empregados
                                                                          where lower(nome) like '%' || texto || '%'
                                                                      ) as m;
    end if;

    saida := array_to_json(array_agg(row_to_json(s)))
             from (
                      select
                          moradores,
                          funcionarios,
                          visitantes,
                          hospedes,
                          prestadores,
                          placa,
                          telefone,
                          email,
                          rg,
                          cpf,
                          cnh,
                          cnpj
                  ) as s;

    return saida;
end
$$;


select condominio.pesquisar('{
  "visitantes": "0",
  "email": "0",
  "placa": "0",
  "texto": "mar",
  "telefone": "0",
  "funcionarios": "1",
  "hospedes": "1",
  "moradores": "0",
  "prestadores": "1",
  "cnpj": "0",
  "cpf": "1",
  "cnh": "0",
  "rg": "1"
}');
