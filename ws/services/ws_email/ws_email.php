<?php
/**
 * Created by PhpStorm.
 * User: oberd
 * Date: 01/11/2016
 * Time: 14:05
 */

require_once('../ws_database/pgServer.php');
require_once('../../var/lib/phpmailer/PHPMailerAutoload.php');

switch($_REQUEST['c'])
{
    case 101:
        require_once('templates/sc_new_task.php');
        break;

    case 102:
        require_once('templates/sc_completed_task.php');
        break;

    default:
        $resultado = "Comando não enviado";
        break;
}