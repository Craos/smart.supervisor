<?php
/**
 * Created by PhpStorm.
 * User: oberd
 * Date: 05/05/2017
 * Time: 09:24
 */

if ($_REQUEST['c'] == 301) { // Usado pelo raspberry no totem de saída da triagem

    $handle = fopen('var/log/reboot.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] "). json_encode($_REQUEST, JSON_UNESCAPED_UNICODE)."\n");
    fclose($handle);

    echo "|S";

} else if ($_REQUEST['c'] == 302) { // Usado pelo arduino (Catraca)

    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $params = json_encode(Array(
	"rfid"=>$_REQUEST['rfid'],
        "eq"=>$_REQUEST['eq'],
	"li"=>$_REQUEST['li']
    ));

    $handle = fopen('var/log/rfid.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] "). json_encode($_REQUEST, JSON_UNESCAPED_UNICODE)."\n");
    fclose($handle);

    $pgServer->Instrucao = "SELECT acesso.autorizacao_rfid_webservice ('$params'::json);";
    $result = $pgServer->Execute();
    echo $result[0]["autorizacao_rfid_webservice"];

} else if ($_REQUEST['c'] == 303) { // Usado pela controladora Linear

    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $handle = fopen('var/log/rfid.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] "). json_encode($_REQUEST, JSON_UNESCAPED_UNICODE)."\n");
    fclose($handle);

    $procedimento = $_REQUEST['procedimento'];
    $parametros = $_REQUEST['parametros'];
    $pgServer->Instrucao = "SELECT $procedimento ('$parametros'::json);";
    $result = $pgServer->Execute();

    foreach ($result[0] as $key => $value)
        echo "$value";

} else if ($_REQUEST['c'] == 304) { // Usado pela controladora Linear

    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $handle = fopen('var/log/rfid.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] "). json_encode($_REQUEST, JSON_UNESCAPED_UNICODE)."\n");
    fclose($handle);

    $pgServer->Instrucao = "SELECT equipamento.lista();";
    $result = $pgServer->Execute();

    foreach ($result[0] as $key => $value)
        echo "$value";

} else if ($_REQUEST['c'] == 305) { // Usado pelo raspberry no totem de saída da triagem

    $handle = fopen('var/log/reboot.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] ") . json_encode($_REQUEST, JSON_UNESCAPED_UNICODE) . "\n");
    fclose($handle);

    $configuracoes = array(
        'modo_operacao' => '0', // 0 = Servidor, 1 = Off-line
        'temp_minuto' => date("i"),
        'temp_hora' => date("G"),
        'temp_dia' => date("d"),
        'temp_mes' => date("m"),
        'temp_ano' => date("Y"),
    );

    $saida = '';
    foreach ($configuracoes as $key => $value) {
        $saida .= $value;
    }

    echo "|$saida";

} else if ($_REQUEST['c'] == 306) { // Usado pelo arduino (Catraca)

    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $params = json_encode(Array(
        "rfid"=>(strlen($_REQUEST['rfid']) > 5) ? substr($_REQUEST['rfid'], 3, 5) : $_REQUEST['rfid'],
        "eq"=>$_REQUEST['eq'],
        "li"=>$_REQUEST['li']
    ));

    $handle = fopen('var/log/rfid.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] "). json_encode($_REQUEST, JSON_UNESCAPED_UNICODE)."\n");
    fclose($handle);

    $pgServer->Instrucao = "SELECT acesso.autorizacao_rfid_webservice ('$params'::json);";
    $result = $pgServer->Execute();

    header_remove();
    echo $result[0]['autorizacao_rfid_webservice'];

} else if ($_REQUEST['c'] == 307) { // Usado pelo arduino (Porta do monitoramento)

    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $params = json_encode(Array(
        "rfid"=>(strlen($_REQUEST['rfid']) > 5) ? substr($_REQUEST['rfid'], 3, 5) : $_REQUEST['rfid'],
        "eq"=>$_REQUEST['eq'],
        "li"=>$_REQUEST['li']
    ));

    $handle = fopen('var/log/rfid.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] "). json_encode($_REQUEST, JSON_UNESCAPED_UNICODE)."\n");
    fclose($handle);

    $pgServer->Instrucao = "SELECT acesso.autorizacao_rfid_monitoramento ('$params'::json);";
    $result = $pgServer->Execute();

    header_remove();
    echo $result[0]['autorizacao_rfid_monitoramento'];


} else if ($_REQUEST['c'] == 308) {

    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $params = json_encode($_REQUEST, JSON_UNESCAPED_UNICODE);

    $handle = fopen('var/log/rfid.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] "). json_encode($_REQUEST, JSON_UNESCAPED_UNICODE)."\n");
    fclose($handle);

    $pgServer->Instrucao = "SELECT acesso.monitor_usuario ('$params'::json);";
    /*echo "<pre>";
    echo $pgServer->Instrucao;
    echo "</pre>"; 
    */
    $result = $pgServer->Execute();
    header_remove();
    echo $result[0]['monitor_usuario'];
   
} else if ($_REQUEST['c'] == 309) {

    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $params = json_encode($_REQUEST, JSON_UNESCAPED_UNICODE);

    $handle = fopen('var/log/rfid.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] "). json_encode($_REQUEST, JSON_UNESCAPED_UNICODE)."\n");
    fclose($handle);

    $pgServer->Instrucao = "SELECT acesso.monitor_veiculo ('$params'::json);";
    $result = $pgServer->Execute();
    echo $result[0]['monitor_veiculo'];

} else if ($_REQUEST['c'] == 310) {

    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $params = json_encode($_REQUEST, JSON_UNESCAPED_UNICODE);

    $handle = fopen('var/log/rfid_correios.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] "). json_encode($_REQUEST, JSON_UNESCAPED_UNICODE)."\n");
    fclose($handle);

    $pgServer->Instrucao = "SELECT notificacoes.autorizar_passo2 ('$params'::json);";
    $result = $pgServer->Execute();
    echo $result[0]['autorizar_passo2'];
    
} else if ($_REQUEST['c'] == 311) { // Usado pelo arduino (Reserva de espaços)

    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $params = json_encode(Array(
        "rfid"=>(strlen($_REQUEST['rfid']) > 5) ? substr($_REQUEST['rfid'], 3, 5) : $_REQUEST['rfid'],
        "eq"=>$_REQUEST['eq'],
        "li"=>$_REQUEST['li']
    ));

    $handle = fopen('var/log/rfid_office.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] "). json_encode($_REQUEST, JSON_UNESCAPED_UNICODE)."\n");
    fclose($handle);

    $pgServer->Instrucao = "SELECT acesso.autorizacao_espaco('$params'::json);";
    $result = $pgServer->Execute();

    header_remove();
    echo $result[0]['autorizacao_espaco'];

} else if ($_REQUEST['c'] == 312) { // Usado pelo arduino (Porta de saida churrasqueira)

    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $params = json_encode(Array(
        "rfid" => $_REQUEST['rfid'],
        "eq" => $_REQUEST['eq'],
        "li" => $_REQUEST['li']
    ));

    $handle = fopen('var/log/rfid.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] ") . json_encode($_REQUEST, JSON_UNESCAPED_UNICODE) . "\n");
    fclose($handle);

    $pgServer->Instrucao = "SELECT acesso.autorizacao_rfid_webservice ('$params'::json);";
    $result = $pgServer->Execute();
    if (strpos($result[0]["autorizacao_rfid_webservice"], '|') > -1) {
	header_remove();
	echo "|";
    }
    
} else if ($_REQUEST['c'] == 313) {

    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $params = json_encode($_REQUEST, JSON_UNESCAPED_UNICODE);

    $handle = fopen('var/log/terminal.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] "). json_encode($_REQUEST, JSON_UNESCAPED_UNICODE)."\n");
    fclose($handle);

    $pgServer->Instrucao = "SELECT config.terminalinfo('$params'::json);";
    $result = $pgServer->Execute();
    echo $result[0]['terminalinfo'];
    
} else if ($_REQUEST['c'] == 314) {

    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $params = json_encode($_REQUEST, JSON_UNESCAPED_UNICODE);

    $handle = fopen('var/log/rfid.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] "). json_encode($_REQUEST, JSON_UNESCAPED_UNICODE)."\n");
    fclose($handle);

    $pgServer->Instrucao = "SELECT notificacoes.pesquisa_usuario ('$params'::json);";
    $result = $pgServer->Execute();
    header_remove();
    echo $result[0]['pesquisa_usuario'];
    
} else if ($_REQUEST['c'] == 315) {

    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $params = json_encode($_REQUEST, JSON_UNESCAPED_UNICODE);

    $handle = fopen('var/log/rfid_salareuniao.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');
    fwrite($handle, date("[r] "). json_encode($_REQUEST, JSON_UNESCAPED_UNICODE)."\n");
    fclose($handle);

    $pgServer->Instrucao = "SELECT acesso.autorizacao_salareuniao ('$params'::json);";
    $result = $pgServer->Execute();
    header_remove();
    echo $result[0]['autorizacao_salareuniao'];
    
} else if ($_REQUEST['c'] == 316) {

    require_once('services/ws_database/pgServer.php');

    $pgServer = new pgServer();
    $pgServer->Connect((isset($_REQUEST['cn']) && strtoupper($_REQUEST['cn'] == 'ec')) ? CONNECTIONSTRING_EC : CONNECTIONSTRING_AS);

    $params = json_encode($_REQUEST, JSON_UNESCAPED_UNICODE);

    $handle = fopen('var/log/automacao.log', 'a');
    date_default_timezone_set('America/Sao_Paulo');

    $pgServer->Instrucao = "SELECT acesso.automacao_log ('$params'::json);";
    fwrite($handle, date("[r] ")."SELECT acesso.automacao_log ('$params'::json);"."\n");
    fclose($handle);

    $result = $pgServer->Execute();
    header_remove();
    echo $result[0]['automacao_log'];
}