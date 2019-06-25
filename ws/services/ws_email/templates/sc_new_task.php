<?php
/**
 * Created by PhpStorm.
 * User: oberd
 * Date: 01/11/2016
 * Time: 14:27
 */
if (!isset($_REQUEST['cliente']) && !isset($_REQUEST['chamado']))
    return;

$cliente = $_REQUEST['cliente'];
$chamado = $_REQUEST['chamado'];

$mail = new PHPMailer;
$mail->SMTPDebug = SMTP_DEBUG;
$mail->isSMTP();
$mail->Host = SMTP_HOST;
$mail->SMTPAuth = SMTP_AUTH;
$mail->Username = SMTP_USERNAME;
$mail->Password = SMTP_PASSWORD;
$mail->SMTPSecure = SMTP_SECURE;
$mail->Port = SMTP_PORT;
$mail->setFrom(SMTP_SETFROM, SMTP_SETFROMNAM);
$mail->addReplyTo(SMTP_ADDREPLYTO);
$mail->isHTML(SMTP_ISHTML);
$mail->CharSet = 'UTF-8';
$mail->addAddress('suporte@craos.net'); // FIXME não esquecer de mudar o endereço de email antes da migração de versão

$conteudo = file_get_contents('email/templates/sc_new_task.html');

$pgServer = new pgServer();
$pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

$pgServer->Instrucao =<<<SQL
    SELECT * FROM suporte.cliente WHERE num = $cliente
SQL;

$result_cliente_info = $pgServer->Execute();

$pgServer->Instrucao =<<<SQL
    SELECT
      num,
      solicitante,
      titulo,
      solicitacao
      FROM suporte.solicitacao
     WHERE num = $chamado
SQL;

$result_cliente_chamado = $pgServer->Execute();
$conteudo = str_replace('$num', $result_cliente_chamado[0]['num'], $conteudo);
$conteudo = str_replace('$cliente', $result_cliente_info[0]['nome'], $conteudo);
$conteudo = str_replace('$solicitante', $result_cliente_chamado[0]['solicitante'], $conteudo);
$conteudo = str_replace('$titulo', $result_cliente_chamado[0]['titulo'], $conteudo);
$conteudo = str_replace('$solicitacao', $result_cliente_chamado[0]['solicitacao'], $conteudo);

$mail->Subject = "Nova solicitação de atendimento ($chamado)";
$mail->Body    = $conteudo;

if(!$mail->send()) {
    fb::error($mail->ErrorInfo);
} else {
    ws::out("Informação enviada com sucesso");
}