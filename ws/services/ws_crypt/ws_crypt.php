<?php
/**
 * Created by PhpStorm.
 * User: oberd
 * Date: 05/05/2017
 * Time: 09:24
 */

if ($_REQUEST['c'] == 601) {

    // Validar usuario
    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $handle = fopen('var/log/crypt.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] ") . json_encode($_REQUEST, JSON_UNESCAPED_UNICODE) . "\n");
    fclose($handle);

    $params = $_REQUEST['params'];
    $pgServer->Instrucao = "SELECT portal.encyptvalid('$params'::json);";
    $result = $pgServer->Execute();
    echo $result[0]['encyptvalid'];

} else if ($_REQUEST['c'] == 602) {

    // listar informaçoes do usuário
    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $handle = fopen('var/log/crypt.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] ") . json_encode($_REQUEST, JSON_UNESCAPED_UNICODE) . "\n");
    fclose($handle);

    $params = $_REQUEST['params'];
    $pgServer->Instrucao = "SELECT portal.encyptfind('$params'::json);";
    $result = $pgServer->Execute();
    echo $result[0]['encyptfind'];

} else if ($_REQUEST['c'] == 603) {

    // Adicionar novo usuário
    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $handle = fopen('var/log/crypt.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] ") . json_encode($_REQUEST, JSON_UNESCAPED_UNICODE) . "\n");
    fclose($handle);

    $params = $_REQUEST['params'];
    $pgServer->Instrucao = "SELECT portal.valid('$params'::json);";
    $result = $pgServer->Execute();
    echo $result[0]['valid'];

} else if ($_REQUEST['c'] == 604) {

    // Atualiza usuário
    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $handle = fopen('var/log/crypt.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] ") . json_encode($_REQUEST, JSON_UNESCAPED_UNICODE) . "\n");
    fclose($handle);

    $params = $_REQUEST['params'];
    $pgServer->Instrucao = "SELECT portal.valid('$params'::json);";
    $result = $pgServer->Execute();
    echo $result[0]['valid'];

} else if ($_REQUEST['c'] == 605) {

    // Exclui usuário
    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $handle = fopen('var/log/crypt.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] ") . json_encode($_REQUEST, JSON_UNESCAPED_UNICODE) . "\n");
    fclose($handle);

    $params = $_REQUEST['params'];
    $pgServer->Instrucao = "SELECT portal.valid('$params'::json);";
    $result = $pgServer->Execute();
    echo $result[0]['valid'];

}