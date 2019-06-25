<?php
/**
 * Created by PhpStorm.
 * User: oberd
 * Date: 05/05/2017
 * Time: 09:24
 */

function test_print($value, $key) {
    echo sprintf( "%s: %s\n" , $key , $value );
}

if ($_REQUEST['c'] == 401) {

    $handle = fopen('var/log/raspberry.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] ") . json_encode($_REQUEST, JSON_UNESCAPED_UNICODE) . "\n");
    fclose($handle);

    //1200000
    $resultado = Array(
        "temporizador" => 1200,
        "webservice" => "WebService operando com sucesso..."
    );

    echo array_walk($resultado, 'test_print');

} else if ($_REQUEST['c'] == 402) {

    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $params = json_encode(Array(
        "autenticacao" => $_REQUEST['autenticacao'],
        "eq" => (isset($_REQUEST['eq'])) ? $_REQUEST['eq'] : "",
        "li" => (isset($_REQUEST['li'])) ? $_REQUEST['li'] : ""
    ));

    $handle = fopen('var/log/raspberry.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] ") . json_encode($_REQUEST, JSON_UNESCAPED_UNICODE) . "\n");
    fclose($handle);

    $pgServer->Instrucao = "SELECT acesso.autorizacao_raspberry_webservice ('$params'::json);";
    $result = $pgServer->Execute();
    echo $result[0]["autorizacao_raspberry_webservice"];

}