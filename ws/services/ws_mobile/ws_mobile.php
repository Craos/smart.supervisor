<?php
/**
 * Created by PhpStorm.
 * User: oberd
 * Date: 15/04/2017
 * Time: 09:02
 */

switch($_REQUEST['c'])
{
    case 201:
        ws::out("1");
        break;
    case 202:
	ws::out("teste");
	break;
    default:
        $resultado = "Comando não enviado";
        break;
}