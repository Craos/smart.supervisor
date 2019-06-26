<?php
/**
 * Created by PhpStorm.
 * User: oberd
 * Date: 10/02/2017
 * Time: 13:31
 */

set_time_limit(0);
require_once('../../main/controls/def.php');
require_once('../../../../craosframework/recordset/fb.php');
require_once('../../../../craosframework/recordset/FirePHP.class.php');
require_once('../../../../craosframework/recordset/RecordSet.class.php');
require_once('../../../../craosframework/mailer/class.phpmailer.php');

$enviado_por = (isset($_REQUEST['e'])) ? $_REQUEST['e'] : 'current_user';
$arquivo_padrao = file_get_contents('padrao.html');

$ws = new Database();
$ws->DatabaseType = DataBaseType::PostgreSQL;
$ws->Server = PGSERVER;
$ws->Port = PGPORT;
$ws->DatabaseName = PGDATABASE;
$ws->UserName = PGUSERAME;
$ws->Password = PGPASSWORD;
$ws->SendUpperCase = PGCASE;
$ws->open();

$ss = new PHPMailer();
$ss->isSMTP();
$ss->SMTPDebug = SMTPDEBUG;
$ss->Debugoutput = SMTPDEBUGOUTPUT;
$ss->Host = SMTPHOST;
$ss->SMTPSecure = SMTPSECURE;
$ss->Port = SMTPPORT;
$ss->SMTPAuth = SMTPAUTH;
$ss->Username = SMTPUSERNAME;
$ss->Password = SMTPPASSWORD;
$ss->From = CORREIOSEMAIL;
$ss->FromName = CORREIOSNAME;
$ss->addReplyTo(CORREIOSEMAIL);
$ss->isHTML(SMTPISHTML);

$instrucao_fila = /** @lang PostgreSQL */
    <<<TAG
    SELECT bloco, unidadecorrente, to_char(enviado, 'DD/MM/YYYY HH24:MI:ss') AS data, emails.mensagem, LPAD(correspondencias.num::TEXT, 7, '0')::VARCHAR AS num, correspondencias.num AS sequencia
      FROM condominio.correspondencias
      JOIN condominio.emails ON correspondencias.mensagem = emails.num
     WHERE situacao = 5
     ORDER BY correspondencias.num;
TAG;

$lista_unidades = pg_query($instrucao_fila);
while ($dados = pg_fetch_object($lista_unidades)) {

    $instrucao_enderecos = <<<EMAILS
        SELECT email AS endereco
          FROM condominio.lista_emails_unidade
         WHERE bloco = $dados->bloco AND unidadecorrente = $dados->unidade
         GROUP BY email
EMAILS;

    $lista_enderecos = pg_query($instrucao_enderecos);

    while ($endereco = pg_fetch_object($lista_enderecos)) {
        //$ss->addAddress($endereco->endereco);
        $ss->addAddress('objp@bol.com.br');
    }

    $ss->Subject = utf8_decode("Comunicado N:$dados->num - Ânima Clube");

    $mensagem = $arquivo_padrao;
    $mensagem = str_replace('#BLOCO#', $dados->bloco, $mensagem);
    $mensagem = str_replace('#UNIDADE#', $dados->unidade, $mensagem);
    $mensagem = str_replace('#DATA#', $dados->data, $mensagem);
    $mensagem = str_replace('#MENSAGEM#', $dados->mensagem, $mensagem);
    $mensagem = str_replace('#SEQUENCIA#', $dados->num, $mensagem);
    $mensagem = str_replace('#NUM#', $dados->sequencia, $mensagem);

    $ss->Body = utf8_decode($mensagem);

    $situacao = 7;
    if (!$ss->send())
        $situacao = 6;

    //var_dump($_REQUEST);
    $instrucao_atualiza_status = <<<SQL
      UPDATE condominio.correspondencias
      SET enviado = now(), enviado_por = '$enviado_por', situacao = $situacao
      WHERE
        num = $dados->num;
SQL;

    pg_query($instrucao_atualiza_status);
}