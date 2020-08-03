create function userinfo(param json) returns json
    language plpgsql
as
$$
declare
    _email  text;
    _perfil int;
    _info   json;
begin

    _email := param ->> 'email';
    _perfil := perfil from basic_auth.users where email = _email;

    _info := row_to_json(info)
             from (
                      select usuario.informacoes, autorizacao.autorizacoes
                      from (
                               SELECT row_to_json(u) as informacoes
                               from (
                                        select email, users.id, filedate, users.nome, avatar, unidade, perfil  as id_perfil, perfil.nome as perfil
                                        FROM basic_auth.users
                                                 join basic_auth.perfil on users.perfil = perfil.id
                                        where email = _email
                                    ) as u
                           ) as usuario,
                           (
                               SELECT array_to_json(array_agg(row_to_json(autorizacao))) AS autorizacoes
                               FROM basic_auth.autorizacao
                               where perfil = _perfil
                                 and visualizar = true
                           ) as autorizacao
                  ) as info;

    return _info;
end
$$;

alter function userinfo(json) owner to postgres;