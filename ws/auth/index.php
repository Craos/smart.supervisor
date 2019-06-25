<?php

session_start();
require_once ('../var/etc/auth.php');
require_once ('../auth/checkauth.php');


function isValidJSON($str) {
    json_decode($str);
    return json_last_error() == JSON_ERROR_NONE;
}

ini_set('display_errors', 'off');
ini_set('log_errors', 1);
ini_set('error_log', 'var/log/error.log');
date_default_timezone_set('America/Sao_Paulo');

if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE'])) {
    $if_modified_since = preg_replace('/;.*$/', '', $_SERVER['HTTP_IF_MODIFIED_SINCE']);
} else {
    $if_modified_since = '';
}

$mtime = filemtime($_SERVER['SCRIPT_FILENAME']);
$gmdate_mod = gmdate('D, d M Y H:i:s', $mtime) . ' GMT';


if ($if_modified_since == $gmdate_mod) {
    header("HTTP/1.0 304 Not Modified");
    exit;
}


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
header('Content-type: application/json; charset=utf-8');
header("Last-Modified: $gmdate_mod");
header('Expires: ' . gmdate('D, d M Y H:i:s', time() + (60 * 60 * 24 * 45)) . ' GMT');


$json_params = file_get_contents("php://input");

if (strlen($json_params) > 0 && isValidJSON($json_params)) {
    $decoded_params = json_decode($json_params);
} else {

    echo json_encode(array(
        'resultado'=>false,
        'mensagem'=>'O formato da informação é inválida'
    ), JSON_UNESCAPED_UNICODE);

    exit(0);

}

$checkauth = new CheckAuth();

if ($decoded_params->auth == 'system') {

    $checksystem = $checkauth->Verify($decoded_params->app->name, $decoded_params->app->id);

    if ($checksystem === true) {

        $_SESSION['key'] = $checkauth->Salt($decoded_params->app->name);

        echo json_encode(array(
            'system'=>$checksystem,
            'key'=>$_SESSION['key']
        ), JSON_UNESCAPED_UNICODE);

    } else if ($checksystem === false) {

        echo json_encode(array(
            'system'=>$checksystem,
            'mensagem'=>'Este sistema não possui autorização de acesso'
        ), JSON_UNESCAPED_UNICODE);

    } else {

        echo json_encode(array(
            'system'=>$checksystem,
            'mensagem'=>'Não foi possível estabelecer uma comunicação com o sistema de autorização'
        ), JSON_UNESCAPED_UNICODE);

    }


} else if ($decoded_params->auth == 'user' && $decoded_params->app->key == $_SESSION['key']) {

    $checkusername = $checkauth->UserName($decoded_params->username);

    if ($checkusername === null || $checkusername === false) {

        echo json_encode(array(
            'user'=>false,
            'mensagem'=>'Usuário não localizado'
        ), JSON_UNESCAPED_UNICODE);

    } else {

        $_SESSION['key'] = $checkauth->Salt($decoded_params->system);

        echo json_encode(array(
            'user'=>$checkusername,
            'key'=>$_SESSION['key']
        ), JSON_UNESCAPED_UNICODE);
    }

} else if ($decoded_params->auth == 'keypar' && $decoded_params->app->key == $_SESSION['key']) {

    $checkuserpassword = $checkauth->Password($decoded_params->app->user->id, $decoded_params->password);

    if ($checkuserpassword === null || $checkuserpassword === false) {

        echo json_encode(array(
            'keypar'=>false,
            'mensagem'=>'A senha não confere'
        ), JSON_UNESCAPED_UNICODE);

    } else  {

        $_SESSION['key'] = $checkauth->Salt($decoded_params->system);

        echo json_encode(array(
            'keypar'=>true,
            'key'=>$_SESSION['key']
        ), JSON_UNESCAPED_UNICODE);


    }

} else if ($decoded_params->auth == 'recoveryuser' && $decoded_params->app->key == $_SESSION['key']) {

/*    echo json_encode(array(
        'recoveryuser'=>true
    ), JSON_UNESCAPED_UNICODE);
  */

/*    echo json_encode(array(
        'recoveryuser'=>false
    ), JSON_UNESCAPED_UNICODE);
*/

    echo json_encode(array(
        'recoveryuser'=>null,
        'mensagem'=>'Não foi possível estabelecer uma comunicação com o sistema de autorização'
    ), JSON_UNESCAPED_UNICODE);

}