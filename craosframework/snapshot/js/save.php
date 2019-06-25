<?php session_start();

if (isset($GLOBALS["HTTP_RAW_POST_DATA"])) {
    // Get the data
    $imageData = $GLOBALS['HTTP_RAW_POST_DATA'];
    $filteredData = substr($imageData, strpos($imageData, ",") + 1);
    $unencodedData = base64_decode($filteredData);

    $nomedoarquivo = md5(uniqid(mt_rand(), true)).'.png';

    $fp = fopen($nomedoarquivo, 'wb');
    fwrite($fp, $unencodedData);
    fclose($fp);

    $log = fopen('action.log', 'a+');
    fwrite($log, '"'.date('d/m/Y').'";"'.$nomedoarquivo.'"'."\n");
    fclose($log);

    unset($_SESSION['foto']);
    $_SESSION['foto'] = $nomedoarquivo;
    echo $nomedoarquivo;
}