<?php session_start();
/**
 * Created by PhpStorm.
 * User: Oberdan
 * Date: 04/06/16
 * Time: 19:21
 */

ini_set('display_errors', 'off');
ini_set('log_errors', 1);
ini_set('error_log', 'var/log/error.log');
date_default_timezone_set('America/Sao_Paulo');

require_once('var/lib/firebug/fb.php');
require_once('var/lib/firebug/FirePHP.class.php');
require_once('var/etc/auth.php');

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


if (!isset($_REQUEST['c']))
    exit();

if ($_REQUEST['c'] <= 100) {
    require_once('services/ws_database/ws_database.php');

} elseif ($_REQUEST['c'] > 100 && $_REQUEST['c'] <= 200) {
    require_once('services/ws_email/ws_email.php');

} elseif ($_REQUEST['c'] > 200 && $_REQUEST['c'] <= 300) {
    require_once('services/ws_mobile/ws_mobile.php');

} elseif ($_REQUEST['c'] > 300 && $_REQUEST['c'] <= 400) {
    require_once('services/ws_rfid/ws_rfid.php');

} elseif ($_REQUEST['c'] > 400 && $_REQUEST['c'] <= 500) {
    require_once('services/ws_pi/ws_pi.php');

} elseif ($_REQUEST['c'] > 500 && $_REQUEST['c'] <= 600) {
    require_once('services/ws_barcode/ws_printlabel.php');

} elseif ($_REQUEST['c'] > 600 && $_REQUEST['c'] <= 700) {
    require_once('services/ws_crypt/ws_crypt.php');
}

class ws {

    public static function out($data) {
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }
}