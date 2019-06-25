<?php
/**
 * Created by PhpStorm.
 * User: Oberdan
 * Date: 25/05/14
 * Time: 13:33
 */

function mysql_fetch_all ($result, $result_type = MYSQL_BOTH)
{
    if (!is_resource($result) || get_resource_type($result) != 'mysql result')
    {
        trigger_error(__FUNCTION__ . '(): supplied argument is not a valid MySQL result resource', E_USER_WARNING);
        return false;
    }
    if (!in_array($result_type, array(MYSQL_ASSOC, MYSQL_BOTH, MYSQL_NUM), true))
    {
        trigger_error(__FUNCTION__ . '(): result type should be MYSQL_NUM, MYSQL_ASSOC, or MYSQL_BOTH', E_USER_WARNING);
        return false;
    }
    $rows = array();
    while ($row = mysql_fetch_array($result, $result_type))
    {
        $rows[] = $row;
    }
    return $rows;
}

function diadaSemana() {

    $num = date('w', strtotime(date('d-m-Y')));
    $dia = null;
    switch($num) {
        case 0:
            $dia = 'Dom';
            break;
        case 1:
            $dia = 'Seg';
            break;
        case 2:
            $dia = 'Ter';
            break;
        case 3:
            $dia = 'Qua';
            break;
        case 4:
            $dia = 'Qui';
            break;
        case 5:
            $dia = 'Sex';
            break;
        case 6:
            $dia = 'Sab';
            break;
        default:
            break;
    }
    return $dia;
}

function between($number, $from, $to)
{
    return $number>$from && $number<$to;
}

function betweenTime($current_time, $sunrise, $sunset)
{
    $date1 = DateTime::createFromFormat('H:i:s', $current_time);
    $date2 = DateTime::createFromFormat('H:i:s', $sunrise);
    $date3 = DateTime::createFromFormat('H:i:s', $sunset);
    if ($date1 > $date2 && $date1 < $date3)
        return true;

    return false;
}