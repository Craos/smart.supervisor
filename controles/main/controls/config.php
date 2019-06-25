<?php session_start();
/**
 * Created by PhpStorm.
 * User: CraosNote
 * Date: 31/05/14
 * Time: 23:07
 */

ini_set('log_errors', 1);
ini_set('error_log', 'action/smart_errorlog.log');

if( ! ini_get('date.timezone') )
{
    date_default_timezone_set('America/Sao_Paulo');
}

$list_itens_require = (isset($require)) ? explode('|', $require) : null;

if (count($list_itens_require)>0) {
    foreach($list_itens_require as $item)
        require_once($item);

} else {

    require_once('../../../../craosframework/recordset/fb.php');
    require_once('../../../../craosframework/recordset/FirePHP.class.php');
    require_once('../../../../craosframework/recordset/RecordSet.class.php');
    require_once('../../../../craosframework/recordset/RecordSet.io.class.php');
    require_once('../../../../craosframework/recordset/RecordSet.logger.php');
    require_once('../../../../craosframework/recordset/RecordSet.reflection.php');
    require_once('../../../../craosframework/recordset/SMTPServer.class.php');
    require_once('../../../../craosframework/recordset/common.functions.class.php');
    require_once('../../../../craosframework/mailer/class.phpmailer.php');
    require_once('../../../../craosframework/phpexcel/Classes/PHPExcel.php');
    require_once('../controls/mail/recupera/envia_recupera.php');
    require_once('../controls/mail/correios/envia_correios.php');
    require_once('../controls/mail/atendimento/envia_atendimento.php');
}

$server_web = new Database();
$server_web->DatabaseType = DataBaseType::PostgreSQL;
$server_web->Server = '127.0.0.1';
$server_web->Port = '5555';
$server_web->DatabaseName = 'smt';
$server_web->UserName = 'smart_supervisor';
$server_web->Password = 'yu45thn@';
$server_web->SendUpperCase = false;
$server_web->open();

$smtp_server = new SMTP_Server();
$smtp_server->SMTP_Debug = 3;
$smtp_server->SMTP_Debugoutput = 'html';
$smtp_server->SMTP_Host = 'smtplw.com.br';
$smtp_server->SMTPSecure = 'tls';
$smtp_server->SMTP_Port = 587;
$smtp_server->SMTP_Auth = true;
$smtp_server->SMTP_Username = 'admanima';
$smtp_server->SMTP_Password = 'xXXdIHeU3580';
$smtp_server->SMTP_isHTML = true;
$smtp_server->SMTP_addReplyTo = 'contato@portalanima.com.br';
//$smtp_server->SMTP_addBCC = 'contato@portalanima.com.br';
$smtp_server->SMTP_Message['recupera_senha'] = $mensagem_recupera;
$smtp_server->SMTP_Message['envio_correios'] = $mensagem_correios;
$smtp_server->SMTP_Message['antendimento'] = $mensagem_atendimento;

//error_reporting(E_ALL ^ E_NOTICE);
ini_set('max_execution_time', 600);
$io = new IO($server_web, $smtp_server);