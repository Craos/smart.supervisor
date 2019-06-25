<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Oberdandk
 * Date: 24/03/13
 * Time: 16:47
 * To change this template use File | Settings | File Templates.
 */
class XMLServer
{

    private $server;

    public function setServer($server)
    {
        $this->server = $server;
    }

    public function getServer()
    {
        return $this->server;
    }

    public function __construct()
    {
    }

    function DataTable($resource)
    {
        $data = array();
        $fields = @pg_num_fields($resource);
        while ($dados = @pg_fetch_object($resource)) {

            $line = null;
            for ($i = 0; $i < $fields; $i++) {
                $field = pg_field_name($resource, $i);
                $line .= "\n\t\t<" . $field . ">" . ($dados->$field) . "</" . $field . ">";
            }
            $data[] = str_replace('&', '&amp;', $line);
        }
        return $data;
    }

    function DataTableArray($resource)
    {
        $data = array();
        $fields = @pg_num_fields($resource);
        while ($dados = @pg_fetch_object($resource)) {

            $line = null;
            for ($i = 0; $i < $fields; $i++) {
                $field = pg_field_name($resource, $i);
                $line = array($field => $dados->$field);
            }
            $data[] = $line;
        }
        return $data;
    }

    function DataTabletList($resource)
    {
        $data = array();
        while ($dados = pg_fetch_object($resource))
            $data[] = "<option value='" . $dados->num . "'>" . str_replace('&', '&amp;', $dados->tipo) . "</option>";

        return $data;
    }

    function DataTabletView($resource)
    {
        $data = array();
        $did = null;

        $fields = @pg_num_fields($resource);
        $contador = 0;
        while ($dados = @pg_fetch_object($resource)) {

            $line = null;
            for ($i = 0; $i < $fields; $i++) {
                $field = @pg_field_name($resource, $i);
                $line .= "<$field>" . $dados->$field . "</$field>";
            }
            $idlinha = $dados->oid;
            if (!$dados->oid)
                $idlinha = $contador;

            $data[] = "<item id='$idlinha'>$line</item>";
            $contador++;
        }
        return $data;
    }

    function DataTableGrid($resource, $id, $outid = false, $serial = null)
    {
        $data = array();
        $did = null;

        $fields = @pg_num_fields($resource);
        $num_serial = 1;

        while ($dados = pg_fetch_object($resource)) {

            $line = null;
            for ($i = 0; $i < $fields; $i++) {

                $field = pg_field_name($resource, $i);

                if ($field == $id && ($outid == false || $outid == 'false'))
                    continue;

                $valorsaida = $dados->$field;
                if ($serial == $field)
                    $valorsaida = $num_serial . '. '.$dados->$field;

                $line .= "\n\t\t\t\t<cell>" . str_replace('&', '&amp;', $valorsaida) . "</cell>";
            }
            $num_serial++;
            $did = $dados->$id;

            $data[] = "\n\t\t\t<row id='$did'>$line\n\t\t\t</row>";

        }

        return $data;
    }

    function DataTableTreeGrid($id, $search, $subquery, $criteria, $subrowid, $subrowimage = null, Array $keysubrows)
    {
        $data = array();
        $namefield = @pg_field_name($id, 0);

        if (!$subrowimage)
            $subrowimage = 'leaf.gif';
        while ($dados = @pg_fetch_object($id)) {

            $rowId = $dados->$namefield;

            $resource = $this->server->Execute($subquery . " WHERE $search = '$rowId' AND $criteria");

            $sublinha = null;
            $resumo = null;
            while ($subrow = @pg_fetch_object($resource)) {

                $makeline = null;
                $keypri = null;
                foreach ($keysubrows as $key) {
                    $val = $subrow->$key;
                    $makeline .= "<cell>$val</cell>";
                    $keypri = $val;
                }
                $iddef = $subrow->$subrowid;
                $makeline = "<row id='$iddef'><cell image='$subrowimage'>$keypri</cell>$makeline</row>";
                $sublinha .= $makeline;
                $resumo = substr($subrow->observacoes, 0, 20);
            }

            $data[] = <<<XML
        <row id="$rowId">
            <cell image="folder.gif">$rowId $resumo</cell>
            $sublinha
        </row>
XML;
        }
        return $data;
    }

}