<?php
/**
 * Created by PhpStorm.
 * User: Oberdan
 * Date: 17/08/14
 * Time: 08:50
 */

set_time_limit (0);
ini_set('max_execution_time', 0);

require_once('../mailer/class.phpmailer.php');
require_once('conteudo.php');
require_once('../recordset/RecordSet.class.php');

$server_web = new Database();
$server_web->DatabaseType = DataBaseType::PostgreSQL;
$server_web->Server = 'postgresql03.craos.net';
$server_web->Port = '5432';
$server_web->DatabaseName = 'craos15';
$server_web->UserName = 'craos15';
$server_web->Password = 'yu45thn@';
$server_web->SendUpperCase = false;
$server_web->open();

$server_web->Execute("Select * from portal.convite_morador");
$mail = new PHPMailer;

$fp = fopen('envio.log', 'a+');
while($lista = pg_fetch_object($server_web->Resource)) {

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.portalanima.com.br';  // Specify main and backup SMTP servers
    $mail->Port = 587;
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'cadastro@portalanima.com.br';                 // SMTP username
    $mail->Password = 'qe446pnh';                           // SMTP password
    $mail->From = 'cadastro@portalanima.com.br';
    $mail->FromName = utf8_decode('Cadastro Ânima');
    $mail->addAddress($lista->email, $lista->nome);     // Add a recipient
    $mail->addReplyTo('cadastro@portalanima.com.br', 'Cadastro Ânima');
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = utf8_decode('Cadastro Ânima. Envio de material');

    $mensagem = str_replace('|torre', $lista->torre, $mensagem);
    $mensagem = str_replace('|unidade', $lista->unidade, $mensagem);
    $mensagem = str_replace('|usuario', $lista->login, $mensagem);
    $mensagem = str_replace('|senha', $lista->senha, $mensagem);

    $mail->Body = utf8_decode($mensagem);

    $torre = $lista->torre;
    $unidade = $lista->unidade;
    $usuario = $lista->login;
    $email = $lista->email;

    $result = $mail->send();
    fwrite($fp, "$result: Torre: $torre Unidade: $unidade Usuario: $usuario E-mail: $email"  . "\n");
    echo "Torre: $torre Unidade: $unidade Usuario: $usuario E-mail: $email\n";
    sleep(16);
}
fclose($fp);
