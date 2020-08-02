create or replace function condominio.pesquisar(param json) returns json
    language plpgsql as
$$
declare
    texto text;

    moradores json;
    funcionarios json;
    preautorizados json;
    hospedes json;
    prestadores json;
    veiculos json;

    saida json;
begin
    texto := lower(param->>'texto');
    raise notice '%', texto;

    if (param->>'moradores' = '1') then
        moradores := array_to_json(array_agg(row_to_json(m))) from (
                                                                       select moradores.num, moradores.nome, unidades.bloco, unidades.unidade, unidades.num as unidade_id, moradores.telefone, moradores.email, moradores.rg, moradores.cpf
                                                                       from condominio.moradores
                                                                                join condominio.unidades on moradores.condominio = unidades.condominio and moradores.bloco = unidades.bloco and moradores.andar = unidades.andar and moradores.unidade = unidades.num
                                                                       where
                                                                               lower(moradores.nome) like '%' || texto || '%'
                                                                          or moradores.telefone like '%' || texto || '%'
                                                                          or moradores.email like '%' || texto || '%'
                                                                          or moradores.rg like '%' || texto || '%'
                                                                          or moradores.cpf like '%' || texto || '%'
                                                                       limit 8
                                                                   ) as m;
    end if;

    if (param->>'funcionarios' = '1') then
        funcionarios := array_to_json(array_agg(row_to_json(m))) from (
                                                                          select empregados.num, empregados.nome, unidades.bloco, unidades.unidade, unidades.num as unidade_id, empregados.telefone, empregados.rg, empregados.cpf
                                                                          from condominio.empregados
                                                                                   join condominio.unidades on empregados.condominio = unidades.condominio and empregados.bloco = unidades.bloco and empregados.andar = unidades.andar and empregados.unidade = unidades.num
                                                                          where
                                                                                  lower(empregados.nome) like '%' || texto || '%'
                                                                             or empregados.telefone like '%' || texto || '%'
                                                                             or empregados.rg like '%' || texto || '%'
                                                                             or empregados.cpf like '%' || texto || '%'
                                                                          limit 8
                                                                      ) as m;
    end if;

    if (param->>'preautorizados' = '1') then
        preautorizados := array_to_json(array_agg(row_to_json(m))) from (
                                                                            select visitantes.num, visitantes.nome, unidades.bloco, unidades.unidade, unidades.num as unidade_id, visitantes.rg, visitantes.cpf
                                                                            from condominio.visitantes
                                                                                     join condominio.unidades on visitantes.condominio = unidades.condominio and visitantes.bloco = unidades.bloco and visitantes.andar = unidades.andar and visitantes.unidade = unidades.num
                                                                            where
                                                                                    lower(visitantes.nome) like '%' || texto || '%'
                                                                               or visitantes.rg like '%' || texto || '%'
                                                                               or visitantes.cpf like '%' || texto || '%'
                                                                            limit 8
                                                                        ) as m;
    end if;

    if (param->>'hospedes' = '1') then
        hospedes := array_to_json(array_agg(row_to_json(m))) from (
                                                                      select hospedes.num, hospedes.nome, unidades.bloco, unidades.unidade, unidades.num as unidade_id, hospedes.rg, hospedes.cpf
                                                                      from condominio.hospedes
                                                                               join condominio.unidades on hospedes.condominio = unidades.condominio and hospedes.bloco = unidades.bloco and hospedes.andar = unidades.andar and hospedes.unidade = unidades.num
                                                                      where
                                                                              lower(hospedes.nome) like '%' || texto || '%'
                                                                         or hospedes.telefone like '%' || texto || '%'
                                                                         or hospedes.email like '%' || texto || '%'
                                                                         or hospedes.rg like '%' || texto || '%'
                                                                         or hospedes.cpf like '%' || texto || '%'
                                                                      limit 8
                                                                  ) as m;
    end if;

    if (param->>'prestadores' = '1') then
        prestadores := array_to_json(array_agg(row_to_json(m))) from (
                                                                         select prestadores.num, prestadores.nome, unidades.bloco, unidades.unidade, unidades.num as unidade_id, prestadores.rg, prestadores.cpf
                                                                         from condominio.prestadores
                                                                                  join condominio.unidades on prestadores.condominio = unidades.condominio and prestadores.bloco = unidades.bloco and prestadores.andar = unidades.andar and prestadores.unidade = unidades.num
                                                                         where
                                                                                 lower(prestadores.nome) like '%' || texto || '%'
                                                                            or prestadores.rg like '%' || texto || '%'
                                                                            or prestadores.cpf like '%' || texto || '%'
                                                                         limit 8
                                                                     ) as m;
    end if;

    saida := array_to_json(array_agg(row_to_json(s)))
             from (
                      select
                          moradores,
                          funcionarios,
                          preautorizados,
                          hospedes,
                          prestadores,
                          veiculos
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