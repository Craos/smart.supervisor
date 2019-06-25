<?php
/**
 * Created by PhpStorm.
 * User: oberd
 * Date: 11/02/2017
 * Time: 17:58
 */
require_once ('../../main/controls/def.php');
require_once('../../../../craosframework/recordset/RecordSet.class.php');

$sequencia = explode (':', $_REQUEST['subject']);
$bounce_code = $_REQUEST['bounce_code'];
$email_falha = $_REQUEST['to'];

$ws = new Database();
$ws->DatabaseType = DataBaseType::PostgreSQL;
$ws->Server = PGSERVER;
$ws->Port = PGPORT;
$ws->DatabaseName = PGDATABASE;
$ws->UserName = PGUSERAME;
$ws->Password = PGPASSWORD;
$ws->SendUpperCase = PGCASE;
$ws->open();


$instrucao_verifica_sequencia =<<<SQLSEQ
    SELECT *
      FROM correios.correspondencias
     WHERE codigo = '$sequencia[1]'
     LIMIT 1;
SQLSEQ;

$result = pg_query($instrucao_verifica_sequencia);
$dados = pg_fetch_object($result);

$situacao = 6;
if ($dados->situacao == '8')
    $situacao = 8;

$erros_anteriosres = $dados->erros;

$instrucao =<<<SQL
    UPDATE correios.correspondencias
       SET situacao = $situacao, erros = ' $erros_anteriosres $email_falha $bounce_code ' || a.descricao
       FROM (
           SELECT id, descricao
           FROM correios.situacao_mensagens_erros
            WHERE id = '$bounce_code'
       ) AS a
     WHERE codigo = '$sequencia[1]';
SQL;

//echo $instrucao;

$info = pg_query($instrucao);
exit;
