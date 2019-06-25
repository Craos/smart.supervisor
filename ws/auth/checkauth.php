<?php


class CheckAuth
{
    public function __construct()
    {
    }

    public function Salt($name) {

        if (!pg_connect(CONNECTIONSTRING_AUTH))
            return null;

        $key = pg_fetch_array(pg_query(/** @lang PostgreSQL */ <<<SQL
        select crypt('$name', gen_salt('bf')) as key
SQL
        ));

        return $key[0];
    }

    public function Verify($name, $key) {

        $query =<<<SQL
        select client_id
          from public.oauth_clients
         where client_id = '$name' and client_secret = '$key';
SQL;

        if (!pg_connect(CONNECTIONSTRING_AUTH)) {
            return null;
        }


        if (pg_num_rows(pg_query($query))> 0) {
            return true;
        }
        return false;

    }

    public function UserName($username)
    {

        if (!pg_connect(CONNECTIONSTRING_AS))
            return null;

        $userexist = pg_fetch_all(pg_query("select * from portal.userexists('$username')"));


        if ($userexist != null) {
            return $userexist[0];
        }
        return false;

    }

    public function Password($userid, $password)
    {

        if (!pg_connect(CONNECTIONSTRING_AS))
            return null;

        $userexist = pg_fetch_all(pg_query("select portal.validuser($userid, '$password');"));

        return $userexist[0]['validuser'] === 't';

    }
}