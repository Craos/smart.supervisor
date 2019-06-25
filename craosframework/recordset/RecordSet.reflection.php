<?php

/**
 * Created by PhpStorm.
 * User: Oberdan
 * Date: 24/05/14
 * Time: 20:17
 */
class ReflectionDBException extends Exception
{
}

class ReflectionDB
{

    private $_server;
    public $ItensName;
    public $Tables = Array();

    public function __construct(Database $server)
    {
        $server->DumpSQL = false;
        $this->_server = $server;
    }

    public function Start()
    {

        if ($this->_server->DatabaseType == DataBaseType::PostgreSQL) {
            $sql = <<<SQL
                 SELECT table_schema || '.' || table_name as tablename
                   FROM reflectiondb
                  GROUP BY table_schema || '.' || table_name
                  ORDER BY table_schema || '.' || table_name asc;
SQL;

        } else if ($this->_server->DatabaseType == DataBaseType::SQLServer) {
            $sql = <<<SQL
                SELECT table_schema + '.' + table_name as tablename
                  FROM anima.information_schema.tables
                 ORDER BY table_schema + '.' + table_name;
SQL;

        } else if ($this->_server->DatabaseType == DataBaseType::MySQL) {
            $sql = <<<SQL
                SELECT CONCAT(table_schema , '.' , table_name) as tablename
                  FROM information_schema.tables
                 WHERE table_schema = 'asmw'
                 ORDER BY table_schema;
SQL;

        }

        $this->_server->DumpSQL = false;
        $this->_server->Execute($sql);
        if ($this->_server->DatabaseType == DataBaseType::PostgreSQL) {
            $this->ItensName = pg_fetch_all($this->_server->Resource);

        } else if ($this->_server->DatabaseType == DataBaseType::SQLServer) {
            $this->ItensName = odbc_result_all($this->_server->Resource);

        } else if ($this->_server->DatabaseType == DataBaseType::MySQL) {
            $this->ItensName = mysql_fetch_all($this->_server->Resource);

        }
        $this->parseTables();
    }

    private function parseTables()
    {
        fb::dump('parseTables', $this->ItensName);
        foreach ($this->ItensName as $item) {
            $table = $item['tablename'];
            if ($this->_server->DatabaseType == DataBaseType::PostgreSQL) {
                $sql = <<<SQL
                    SELECT column_name, data_type
                      FROM reflectiondb
                     WHERE table_schema || '.' || table_name = lower('$table');
SQL;

            } else if ($this->_server->DatabaseType == DataBaseType::SQLServer) {
                $sql = <<<SQL
                    SELECT column_name, data_type
                      FROM anima.information_schema.columns
                     WHERE table_name = lower('$table');
SQL;

            } else if ($this->_server->DatabaseType == DataBaseType::MySQL) {
                $sql = <<<SQL
                    SELECT column_name, data_type
                      FROM information_schema.columns
                    WHERE table_name = lower('$table');
SQL;

            }
            $this->_server->Execute($sql);
            if ($this->_server->DatabaseType == DataBaseType::PostgreSQL) {
                $this->Tables[$table] = pg_fetch_all($this->_server->Resource);

            } else if ($this->_server->DatabaseType == DataBaseType::SQLServer) {
                $this->Tables[$table] = odbc_result_all($this->_server->Resource);

            } else if ($this->_server->DatabaseType == DataBaseType::MySQL) {
                $this->Tables[$table] = mysql_fetch_all($this->_server->Resource);
            }
        }
    }

    public function preparaCampos(RecordSet $Table, Array $Fields)
    {
        try {
            $Destination = Array();
            if (count($this->Tables[$Table->Table]) == 0)
                throw new ReflectionDBException('Nenhuma tabela foi informada');

            foreach ($this->Tables[$Table->Table] as $item)
                $Destination[$item['column_name']] = $item['data_type'];

            foreach ($Fields as $campo => $valor) {
                if ($valor == null) continue;
                if ($valor == 'null') continue;
                if (!in_array($campo, array_keys($Destination))) continue;

                $valor = urldecode($valor);

                if (strpos('numeric', $Destination[$campo]) || strpos('integer', $Destination[$campo]) || strpos('serial', $Destination[$campo])) {
                    $valor = preg_replace('/\D/', '', $valor);
                    $Table->Field[$campo] = (strlen($valor) > 0 || $valor != '') ? $valor : 0;
                } else if (strpos('time', $Destination[$campo]) && strlen($valor) > 0) {
                    $Table->Field[$campo] = $valor;
                } else {
                    $Table->Field[$campo] = $valor;
                }
            }

        } catch (ReflectionDBException $Error) {
            fb::dump('Erro na montagem dos campos', $Error);

        } catch (Exception $Error) {
            fb::dump('Erro ao preparar os campos da tabela de destino', $Error);
        }
        return $Table;
    }

}