<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Oberdandk
 * Date: 24/03/13
 * Time: 16:47
 * To change this template use File | Settings | File Templates.
 */
require_once('FirePHP.class.php');
require_once('fb.php');
require_once('RecordSet.logger.php');

class PostgresException extends Exception
{
    function __construct($msg)
    {
        parent::__construct($msg);
    }
}

class DependencyException extends PostgresException
{
    function __construct()
    {
        parent::__construct("deadlock");
    }
}

abstract class DataBaseType
{
    const PostgreSQL = 0;
    const SQLServer = 1;
    const MySQL = 2;
}

/**
 * Class Database Conecta no banco de dados e processa instrucoes
 */
class Database
{
    /**
     * @var resource Informacoes da conexao atual
     */
    public $connection;

    /**
     * @var recurso informacoes do recurso retornado com a ultima instrucao sql
     */
    public $Resource = null;

    /**
     * @var int Numero de linhas retornadas
     */
    public $RowsCount;

    /**
     * @var string Texto com a instrucao SQL
     */
    public $StringSQL;

    /**
     * @var bool Envia todos os camandos SQl ordenando por maiusculo/minusculo
     */
    public $SendUpperCase = false;

    /**
     * @var bool Retorna a saida dos comandos SQL no firebug
     */
    public $DumpSQL = true;

    /**
     * @var int define o tipo de banco de dados para manipulacao de dados
     */
    public $DatabaseType = DataBaseType::PostgreSQL;

    /**
     * @var string Endereco de conexao do servidor
     */
    public $Server;

    /**
     * @var int numero da porta de conexao
     */
    public $Port;

    /**
     * @var string Nome do banco de dados
     */
    public $DatabaseName;

    /**
     * @var string Nome do usuario do banco de dados
     */
    public $UserName;

    /**
     * @var string senha do usuario do banco de dados
     */
    public $Password;

    /**
     * @var Obtem o tipo do erro apos o processamento das instrucoes
     */
    public $LasrError;

    /**
     * @var KLogger Objeto de log em arquivo
     */
    private $Reg;


    public function __construct()
    {
        $this->Reg = new KLogger ("action", KLogger::NO_ARGUMENTS);
    }

    public function open()
    {

        try {

            $Server = $this->Server;
            $Port = $this->Port;
            $DatabaseName = $this->DatabaseName;
            $UserName = $this->UserName;
            $Password = $this->Password;

            if ($this->DatabaseType == DataBaseType::PostgreSQL) {

                $this->connection = pg_connect(
                    "host=$Server port=$Port dbname=$DatabaseName user=$UserName password=$Password"
                );

            } elseif ($this->DatabaseType == DataBaseType::SQLServer) {

                $this->connection = odbc_connect(
                    "DRIVER={SQL Server}; SERVER=$Server; DATABASE=$DatabaseName;", "$UserName", "$Password"
                );

            } elseif ($this->DatabaseType == DataBaseType::MySQL) {

                $this->connection = mysql_connect(
                    "$Server:$Port", $UserName, $Password
                );

                fb::dump('link', $this->connection);
                if ($this->connection == '') {
                    $this->LasrError = 'Sem conex�o';
                }
                mysql_select_db($DatabaseName, $this->connection);

            }

        } catch (Exception $error) {
            $this->Reg->logError(__LINE__, $error->getMessage());
            fb::dump('Erro na conexao com o banco de dados', $error->getMessage());
        }

    }

    /**
     * Encaminha e processa as instrucoes SQL no banco de dados
     * @param $SQL Instrucao SQL
     * @param bool $uppercase Se verdadeiro transforma os caracteres em caixa alta
     */
    public function Execute($SQL, $uppercase = false)
    {
        $this->StringSQL = $SQL;

        /*if ($this->SendUpperCase == true || $uppercase == true)
            $this->StringSQL = strtoupper($SQL);*/

        //$fp = fopen('action/database.sql', 'a+');
        //@fwrite($fp, '--' . date('Y-m-d H:i:s ') . "\n");
        //fwrite($fp, $this->StringSQL . "\n");
        //fclose($fp);

        $this->Reg->logInfo(__LINE__, $this->StringSQL);

        if ($this->DumpSQL == true)
            fb::dump('SQL:', $SQL);

        if ($this->DatabaseType == DataBaseType::PostgreSQL) {
            $this->Resource = @pg_query($this->StringSQL);
            //fb::dump('processa consulta', $this->Resource);

        } elseif ($this->DatabaseType == DataBaseType::SQLServer) {
            $this->Resource = @odbc_exec($this->connection, $this->StringSQL);

        } elseif ($this->DatabaseType == DataBaseType::MySQL) {
            if ($this->connection != '')
                $this->Resource = @mysql_query($this->StringSQL, $this->connection);
        }

        if ($this->Resource) {
            if ($this->DatabaseType == DataBaseType::PostgreSQL) {
                $this->RowsCount = pg_num_rows($this->Resource);

            } elseif ($this->DatabaseType == DataBaseType::SQLServer) {
                $this->RowsCount = @odbc_num_rows($this->Resource);

            } elseif ($this->DatabaseType == DataBaseType::SQLServer) {
                $this->RowsCount = mysql_num_rows($this->Resource);

            }
            $this->Reg->logInfo(__LINE__, "Result=$this->Resource; Count Rows=$this->RowsCount");
        } else {

            $pgerror = @pg_last_error();
            $oderror = @odbc_errormsg();
            $myerror = @mysql_error();

            if (preg_match('/duplicar/i', $pgerror)) {
                fb::dump('Erro SQL', 'unique_violation');
                $this->Reg->logInfo(__LINE__, $this->StringSQL);
                $this->LasrError = 'existente';

            } elseif (preg_match('/different type/i', $pgerror)) {
                fb::dump('Erro SQL', $pgerror);
                $this->Reg->logInfo(__LINE__, $this->StringSQL);
                $this->LasrError = 'errosyntax';

            } elseif ($oderror) {
                fb::dump('Erro SQL', $oderror);
                $this->Reg->logInfo(__LINE__, $this->StringSQL);
                $this->LasrError = 'errosyntax';

            } elseif ($myerror) {
                fb::dump('Erro SQL', $myerror);
                $this->Reg->logInfo(__LINE__, $this->StringSQL);
                $this->LasrError = 'errosyntax';

            } else {
                fb::dump('Erro SQL', $pgerror);
                $this->Reg->logInfo(__LINE__, $this->StringSQL);
                $this->LasrError = 'naoidentificado';

            }
        }
    }

    /**
     * @return object Retorna uma linha como um objeto
     */
    public function Result()
    {
        $dados = null;
        if ($this->DatabaseType == DataBaseType::PostgreSQL) {
            $dados = pg_fetch_object($this->Resource);

        } elseif ($this->DatabaseType == DataBaseType::SQLServer) {
            $dados = odbc_fetch_object($this->Resource);

        } elseif ($this->DatabaseType == DataBaseType::MySQL) {
            fb::dump('resourse', $this->Resource);
            $dados = mysql_fetch_array($this->Resource, MYSQL_BOTH);
        }
        return $dados;

    }

}

/**
 * Class RecordSet
 * Prepara as instrucoes para o banco de dados
 * Processa as instrucoes que voltam do banco de dados
 */
class RecordSet extends Database
{
    /**
     * @var object Um objeto com um atributo para cada campo
     */
    private $results;

    /**
     * @var string com o nome da tabela para manipulacao
     */
    public $Table;

    /**
     * @var array contem todos os campos da instrucao sql atual
     */
    public $Field = Array();

    /**
     * @var string com os criterios da instrucao sql
     */
    public $Where;

    /**
     * @var bool caso verdadeiro finaliza a passagem por linhas
     */
    public $EOF = false;

    /**
     * @param null $Table
     */
    public function __construct($Table = null)
    {
        parent::__construct();
        $this->Table = $Table;

    }

    /**
     * @param Instrucao $SQL
     * @param bool $uppercase
     */
    public function Execute($SQL, $uppercase = true)
    {
        parent::Execute($SQL, $uppercase);
    }

    /**
     * @param $Name Nome da tabela do banco de dados
     */
    public function Open($Name)
    {
        $this->Table = $Name;
    }

    /**
     * @return object Retorna uma linha como um objeto
     */
    public function Result()
    {
        parent::Result();
    }

    /**
     * Fecha o recurso atual
     */
    public function Close()
    {
        $this->Table = null;
    }

    /**
     * Insere uma nova linha na tabela do banco de dados
     * @return recurso Retorna uma linha como um objeto
     */
    public function AddNew()
    {

        $linha = "INSERT INTO " . $this->Table;
        $nomecampo = null;

        $campos = null;
        foreach ($this->Field as $campo => $valor) {
            $nomecampo .= "$campo, ";
            $valor = str_replace("'", "''", $valor);
            $campos .= "'$valor', ";
        }

        $nomecampo = " (" . substr($nomecampo, 0, strlen($nomecampo) - 2) . ")";
        $linha .= $nomecampo . " VALUES (" . substr($campos, 0, strlen($campos) - 2) . " ) RETURNING *;";
        $this->Execute($linha);
        return $this->Resource;

    }

    /**
     * Atualiza uma linha do banco de dados
     * @return recurso Retorna uma linha como um objeto
     */
    public function Update()
    {

        $linha = "UPDATE " . $this->Table . " SET ";

        foreach ($this->Field as $campo => $valor) {
            $vlinha = "$campo = '$valor', ";
            if ($valor == null)
                $vlinha = "$campo = null, ";

            $linha .= $vlinha;
        }

        $linha = substr($linha, 0, strlen($linha) - 2);
        if (count($this->Where))
            $linha .= ' WHERE ' . $this->Where;

        $linha .= ' RETURNING *;';
        $this->Execute($linha);
        return $this->Resource;

    }

    /**
     * Remove uma linha do banco de dados
     * @return recurso Retorna uma linha como um objeto
     */
    public function Delete()
    {

        $linha = "DELETE FROM " . $this->Table;
        if (count($this->Where))
            $linha .= ' WHERE ' . $this->Where;

        $linha .= ' RETURNING *;';
        $this->Execute($linha);
        return $this->Resource;
    }

    /**
     * Move o cursor navegador de registro para a proxima linha
     * @return object
     */
    public function MoveNext()
    {

        if (!$this->Resource) {

            $SQL = $this->Table;
            if (strpos(strtoupper($this->Table), 'FROM') == 0) {
                $SQL = 'SELECT * FROM ' . $this->Table;
            }
        }

        if (count($this->Where))
            if (!empty($SQL)) {
                $SQL .= ' WHERE ' . $this->Where;
            }

        if (!empty($SQL)) {
            $this->Execute($SQL);
        }

        if ($this->DatabaseType == DataBaseType::PostgreSQL) {
            $this->results = pg_fetch_object($this->Resource);

        } elseif ($this->DatabaseType == DataBaseType::SQLServer) {
            $this->results = odbc_fetch_object($this->Resource);

        } elseif ($this->DatabaseType == DataBaseType::MySQL) {
            $this->results = mysql_fetch_object($this->Resource);

        }

        if (!$this->results)
            $this->EOF = true;

        return $this->results;
    }
}