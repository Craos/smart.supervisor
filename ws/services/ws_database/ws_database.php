<?php
/**
 * Created by PhpStorm.
 * User: oberd
 * Date: 01/11/2016
 * Time: 13:46
 */
require_once('pgServer.php');


$pgServer = new pgServer();
$pgServer->Campos = (isset($_REQUEST['fields'])) ? $_REQUEST['fields'] : null;
$pgServer->Valores = (isset($_REQUEST['values'])) ? $_REQUEST['values'] : null;
$pgServer->Alvo = (isset($_REQUEST['from'])) ? $_REQUEST['from'] : null;
$pgServer->Criterios = (isset($_REQUEST['where'])) ? $_REQUEST['where'] : null;
$pgServer->Agrupamento = (isset($_REQUEST['groupby'])) ? $_REQUEST['groupby'] : null;
$pgServer->OrdemASC = (isset($_REQUEST['orderasc'])) ? $_REQUEST['orderasc'] : null;
$pgServer->OrdemDSC = (isset($_REQUEST['orderdsc'])) ? $_REQUEST['orderdsc'] : null;
$pgServer->Avaliacao = (isset($_REQUEST['having'])) ? $_REQUEST['having'] : null;
$pgServer->Retorno = (isset($_REQUEST['returning'])) ? $_REQUEST['returning'] : null;
$pgServer->Limite = (isset($_REQUEST['limit'])) ? $_REQUEST['limit'] : null;
$pgServer->Avanco = (isset($_REQUEST['offset'])) ? $_REQUEST['offset'] : null;
$pgServer->Instrucao = (isset($_REQUEST['instrucao'])) ? $_REQUEST['instrucao'] : null;
$pgServer->Parametros = (isset($_REQUEST['params'])) ? $_REQUEST['params'] : null;

if (!isset($_REQUEST['cn']))
    return;

$defineconexao = null;
switch (strtolower($_REQUEST['cn'])) {
    case 'as':
        $defineconexao = CONNECTIONSTRING_AS;
        break;

    case 'ec':
        $defineconexao = CONNECTIONSTRING_EC;
        break;

    case 'az':
        $defineconexao = CONNECTIONSTRING_AZ;
        break;

    default:
        $defineconexao = CONNECTIONSTRING_AS;
        break;
}

$pgServer->Connect($defineconexao);

switch($_REQUEST['c'])
{
    case 0:
        ws::out($pgServer->Select());
        break;

    case 1:
        ws::out($pgServer->Insert());
        break;

    case 2:
        ws::out($pgServer->Update());
        break;

    case 3:
        ws::out($pgServer->Delete());
        break;

    case 4:
        ws::out($pgServer->Execute());
        break;

    case 5:
        ws::out($pgServer->Procedure());
        break;

    case 6:
        ws::out($pgServer->Infothumbnail());
        break;

    case 7:
        ws::out($pgServer->pgQuery());
        break;

    default:
        $resultado = "Comando não enviado";
        break;
}