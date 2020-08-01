create function login(param json) returns basic_auth.jwt_token
    security definer
    language plpgsql
as
$$
declare
    _role name;
    result basic_auth.jwt_token;
    email text;
    pass text;

begin

    email := param->>'email';
    pass := param->>'pass';

    -- check email and password
    select basic_auth.user_role(email, pass) into _role;
    if _role is null then
        raise invalid_password using message = 'Usuário ou senha inválida';
    end if;

    select sign(
                   row_to_json(r), 'reallyreallyreallyreallyverysafe'
               ) as token
    from (
             select _role as role, email as email,
                    extract(epoch from now())::integer + 60*60 as exp
         ) r
    into result;

    insert into basic_auth.access (usuario, token) values (email, result.token);
    return result;
end;
$$;

alter function login(json) owner to postgres;

