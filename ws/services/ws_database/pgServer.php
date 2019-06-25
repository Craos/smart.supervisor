<?php
/**
 * Created by PhpStorm.
 * User: Oberdan
 * Date: 04/06/16
 * Time: 19:21
 * @property  Instrucao
 */

class pgServer
{
    private $Servidor;
    private $Resultado;

    public $Campos;
    public $Valores;
    public $Alvo;
    public $Criterios;
    public $Agrupamento;
    public $OrdemASC;
    public $OrdemDSC;
    public $Avaliacao;
    public $Limite;
    public $Avanco;
    public $Retorno;
    public $Parametros;
    public $Instrucao;

    /**
     * Executa as requisições que envolvem o banco de dados
     */
    public function __construct()
    {
    }

    /**
     * Inicia o processo de conexão com o banco de dados
     * @param $ConnectionString
     */
    public function Connect($ConnectionString)
    {
        $this->Servidor = pg_connect($ConnectionString);
    }

    /**
     * Executa uma instrução SQL
     * @return array Retorna uma matriz de informações
     */
    public function Execute()
    {

        $this->Resultado = pg_query($this->Instrucao);
//        fb::dump('SQL:', $this->Instrucao);

        if ($this->Resultado === FALSE) {
            fb::error(pg_last_error());
            fb::dump('SQL:', $this->Instrucao);

            $handle = fopen('var/log/sql.log', 'a');
            date_default_timezone_set('America/Sao_Paulo');
            fwrite($handle, date("[r] "). $this->Instrucao."\n");
            fclose($handle);

            return null;
        }

        return pg_fetch_all($this->Resultado);
    }

    /**
     * Retorna o numero de registros associados ao resultado
     * @return int
     */
    public function Registros()
    {
        return pg_num_rows($this->Resultado);
    }

    /**
     * Prepara o conjunto de variáveis atribuidas e converte as informações numa instrução simples para seleção de informações em tabelas
     * @return array Retorna uma matriz de informações
     */
    public function Select()
    {

        $where = null;
        if ($this->Criterios != null)
            $where = "WHERE $this->Criterios";

        $groupby = null;
        if ($this->Agrupamento != null)
            $groupby = "GROUP BY $this->Agrupamento";

        $order = null;
        if ($this->OrdemASC != null)
            $order = "ORDER BY $this->OrdemASC";

        if ($this->OrdemDSC != null)
            $order = "ORDER BY $this->OrdemDSC DESC";

        $having = null;
        if ($this->Avaliacao != null)
            $having = "HAVING $this->Avaliacao";

        $limit = null;
        if ($this->Limite != null)
            $limit = "LIMIT $this->Limite";

        $offset = null;
        if ($this->Avanco != null)
            $offset = "OFFSET $this->Avanco";

        $this->Instrucao = "SELECT $this->Campos FROM $this->Alvo $where $groupby $order $having $limit $offset;";
        return $this->Execute();
    }

    /**
     * Prepara o conjunto de variáveis atribuidas e converte as informações numa instrução SQL para insersão de informações dentro da tabela
     * @return array Caso seja fornecido o parâmetro Returning a execução irá retorna uma matriz de informações
     */
    public function Insert()
    {

        $campos = explode(',', $this->Campos);
        $valores = explode(',', $this->Valores);
        $insersoes = null;

        for ($i = 0; $i < count($campos); $i++) {
            $valor = ($valores[$i] == 'null') ? "null" : "'$valores[$i]'";
            $insersoes .= "$valor,";
        }

        $insersoes = substr($insersoes, 0, strlen($insersoes) - 1);

        $returning = null;
        if ($this->Retorno != null)
            $returning = "RETURNING $this->Retorno";

        $this->Instrucao = "INSERT INTO $this->Alvo ($this->Campos) VALUES ($insersoes) $returning;";
        return $this->Execute();
    }

    /**
     * Prepara o conjunto de variáveis atribuidas e converte as informações numa instrução SQL para atualização de informações dentro da tabela
     * @return array Caso seja fornecido o parâmetro Returning a execução irá retorna uma matriz de informações
     */
    public function Update()
    {

        $campos = explode(',', $this->Campos);
        $valores = explode(',', $this->Valores);
        $atualizacoes = null;

        for ($i = 0; $i < count($campos); $i++) {
            $valor = ($valores[$i] == 'null') ? "null" : "'$valores[$i]'";
            $atualizacoes .= "$campos[$i]=$valor,";
        }

        $atualizacoes = substr($atualizacoes, 0, strlen($atualizacoes) - 1);

        $where = null;
        if ($this->Criterios != null)
            $where = "WHERE $this->Criterios";

        $returning = null;
        if ($this->Retorno != null)
            $returning = "RETURNING $this->Retorno";

        $this->Instrucao = "UPDATE $this->Alvo SET $atualizacoes $where $returning;";
        return $this->Execute();
    }

    /**
     * Prepara o conjunto de variáveis atribuidas e converte as informações numa instrução SQL para exclusão de informações dentro da tabela
     * @return array Caso seja fornecido o parâmetro Returning a execução irá retorna uma matriz de informações
     */
    public function Delete()
    {

        $where = null;
        if ($this->Criterios != null)
            $where = "WHERE $this->Criterios";

        $returning = null;
        if ($this->Retorno != null)
            $returning = "RETURNING $this->Retorno";

        $this->Instrucao = "DELETE FROM $this->Alvo $where $returning;";
        return $this->Execute();
    }

    public function Procedure()
    {
        $where = null;
        if ($this->Criterios != null)
            $where = "WHERE $this->Criterios";

        $groupby = null;
        if ($this->Agrupamento != null)
            $groupby = "GROUP BY $this->Agrupamento";

        $order = null;
        if ($this->OrdemASC != null)
            $order = "ORDER BY $this->OrdemASC";

        if ($this->OrdemDSC != null)
            $order = "ORDER BY $this->OrdemDSC DESC";

        $having = null;
        if ($this->Avaliacao != null)
            $having = "HAVING $this->Avaliacao";

        $limit = null;
        if ($this->Limite != null)
            $limit = "LIMIT $this->Limite";

        $offset = null;
        if ($this->Avanco != null)
            $offset = "OFFSET $this->Avanco";

        $parameters = "";
        if ($this->Parametros != null)
            $parameters = "'$this->Parametros'";

        $this->Instrucao = "SELECT $this->Campos FROM $this->Alvo ($parameters) $where $groupby $order $having $limit $offset;";
        fb::dump('c', $this->Instrucao);
        return $this->Execute();
    }

    public function Infothumbnail()
    {
        require_once('../../var/lib/imaging/Thumbnail.php');

        $parameters = "";
        if ($this->Parametros != null)
            $parameters = "'$this->Parametros'";

        $this->Instrucao = "SELECT $this->Campos FROM $this->Alvo ($parameters);";

        $dados = $this->Execute();
        $info = json_decode($dados[0]['mbinfo'])[0];

        for($i=0; $i<count($info->registros); $i++) {

            $arquivo = 'img.png';
            $this->base64_to_jpeg( $info->registros[$i]->foto, $arquivo);
            $thumb = new Thumbnail($arquivo,64,48);
            $type = pathinfo($thumb->Thumbnail, PATHINFO_EXTENSION);
            $data = file_get_contents($thumb->Thumbnail);
            $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
            $info->moradores[$i]->foto = $base64;
        }
        return $info;
    }

    private function base64_to_jpeg($base64_string, $output_file) {
        $ifp = fopen($output_file, "wb");
        $data = explode(',', $base64_string);
        fwrite($ifp, base64_decode($data[1]));
        fclose($ifp);
        return $output_file;
    }

    public function pgQuery()
    {
        $procedimento = $_REQUEST['process'];
        $parametros = '$_$' . $_REQUEST['params'] . '$_$';
        $this->Instrucao = "SELECT $procedimento ($parametros);";
        return $this->Execute();
    }
}