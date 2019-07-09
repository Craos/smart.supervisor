<?php
/**
 * Created by PhpStorm.
 * User: oberd
 * Date: 11/02/2017
 * Time: 17:24
 */

require_once ('../../main/controls/def.php');
require_once('../../../../craosframework/recordset/RecordSet.class.php');

$sequencia = explode (':', $_REQUEST['subject']);

$ws = new Database();
$ws->DatabaseType = DataBaseType::PostgreSQL;
$ws->Server = PGSERVER;
$ws->Port = PGPORT;
$ws->DatabaseName = PGDATABASE;
$ws->UserName = PGUSERAME;
$ws->Password = PGPASSWORD;
$ws->SendUpperCase = PGCASE;
$ws->open();

$instrucao =<<<SQL
    UPDATE correios.correspondencias
       SET situacao = 8
     WHERE codigo = '$sequencia[1]' AND situacao NOT IN (8, 2, 3, 10);
SQL;

$info = pg_query($instrucao);
exit;