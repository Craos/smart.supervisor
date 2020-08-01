create function logoff(param json) returns integer
    language plpgsql
as
$$
declare
    email text;
    r record;
    i record;
begin


    email := param->>'email';

    update basic_auth.access
    set saida  = current_timestamp
    where usuario = email and saida isnull;

    return 1;

end
$$;

alter function logoff(json) owner to postgres;