<?php
/**
 * Created by PhpStorm.
 * User: oberd
 * Date: 11/02/2017
 * Time: 08:11
 */
require_once ('../../main/controls/def.php');
require_once('../../../../craosframework/recordset/RecordSet.class.php');

if (!isset($_REQUEST['s']))
    exit;

$sequencia = $_REQUEST['s'];

$mensagem = file_get_contents('online.html');

$ws = new Database();
$ws->DatabaseType = DataBaseType::PostgreSQL;
$ws->Server = PGSERVER;
$ws->Port = PGPORT;
$ws->DatabaseName = PGDATABASE;
$ws->UserName = PGUSERAME;
$ws->Password = PGPASSWORD;
$ws->SendUpperCase = PGCASE;
$ws->open();

$instrucao =<<<SQL

    UPDATE correios.correspondencias
       SET situacao = 8
     WHERE codigo = '$sequencia'::VARCHAR;

    SELECT bloco, unidadecorrente, to_char(enviado, 'DD/MM/YYYY HH24:MI:ss') as data, emails.mensagem, correspondencias.codigo as sequencia
      FROM correios.correspondencias
      JOIN correios.emails ON correspondencias.mensagem = emails.num
     WHERE correspondencias.codigo = '$sequencia'::VARCHAR
     LIMIT 1;
SQL;


$info = pg_query($instrucao);
$dados = pg_fetch_object($info);

$mensagem = str_replace('#BLOCO#', $dados->bloco, $mensagem);
$mensagem = str_replace('#UNIDADE#', $dados->unidade, $mensagem);
$mensagem = str_replace('#DATA#', $dados->data, $mensagem);
$mensagem = str_replace('#MENSAGEM#', $dados->mensagem, $mensagem);
$mensagem = str_replace('#SEQUENCIA#', $dados->sequencia, $mensagem);
$mensagem = str_replace('#NUM#', $sequencia, $mensagem);
$mensagem = str_replace('<td colspan="3" style="text-align: end; font-family: Arial, Tahoma, sans-serif; font-size: 10px;">Caso n&atilde;o consiga visualizar esta mensagem, experimente a <a href="http://anima.craos.net/smart_supervisor/controles/correios/estrutura/webmail.php?s=#NUM#">vers&atilde;o online</a></td>', '', $mensagem);

echo $mensagem;