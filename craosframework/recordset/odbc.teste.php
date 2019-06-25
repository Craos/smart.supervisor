<?php
/**
 * Created by PhpStorm.
 * User: Oberdan
 * Date: 06/06/14
 * Time: 20:19
 */
$con = odbc_connect("DRIVER={SQL Server}; SERVER=CROBJMB\CRAOS; DATABASE=anima;", "sa","yu45thn@");

$SQL = "SELECT * FROM dbo.nome";
$res = odbc_exec($con, $SQL);
while($RFP = odbc_fetch_array($res))
{
    echo $RFP['nome'].''.$RFP['sobrenome'].'<br>';
}