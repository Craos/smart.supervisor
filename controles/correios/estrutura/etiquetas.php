<?php

require_once ('../../main/controls/def.php');
require_once('../../../../craosframework/recordset/fb.php');
require_once('../../../../craosframework/recordset/FirePHP.class.php');
require_once('../../../../craosframework/recordset/RecordSet.class.php');
require_once('../../../../craosframework/recordset/RecordSet.io.class.php');
require_once('../../../../craosframework/recordset/RecordSet.logger.php');
require_once('../../../../craosframework/recordset/RecordSet.reflection.php');
require_once('../../../../craosframework/recordset/SMTPServer.class.php');
require_once('../../../../craosframework/recordset/common.functions.class.php');

$server_web = new Database();
$server_web->DatabaseType = DataBaseType::PostgreSQL;
$server_web->Server = PGSERVER;
$server_web->Port = PGPORT;
$server_web->DatabaseName = PGDATABASE;
$server_web->UserName = PGUSERAME;
$server_web->Password = PGPASSWORD;
$server_web->SendUpperCase = PGCASE;
$server_web->open();

require_once('../../../../craosframework/barcode/class/BCGFontFile.php');
require_once('../../../../craosframework/barcode/class/BCGColor.php');
require_once('../../../../craosframework/barcode/class/BCGDrawing.php');
require_once('../../../../craosframework/barcode/class/BCGcode128.barcode.php');
$font = new BCGFontFile('../../../../craosframework/barcode/font/Arial.ttf', 8);

$result = pg_query("SELECT numero FROM condominio.cria_sequencias();");

$linhas = null;
$contador = 0;
$colunas = null;
$col = 1;
while ($sequencia = pg_fetch_object($result)) {

    // The arguments are R, G, B for color.
    $color_black = new BCGColor(0, 0, 0);
    $color_white = new BCGColor(255, 255, 255);

    $drawException = null;
    $code = new BCGcode128();
    try {
        $code->setScale(1); // Resolution
        $code->setThickness(30); // Thickness
        $code->setForegroundColor($color_black); // Color of bars
        $code->setBackgroundColor($color_white); // Color of spaces
        $code->setFont($font); // Font (or 0)
        $code->parse($sequencia->numero); // Text
    } catch(Exception $exception) {
        $drawException = $exception;
    }

    /* Here is the list of the arguments
    1 - Filename (empty : display on screen)
    2 - Background color */
    $drawing = new BCGDrawing('', $color_white);
    if($drawException) {
        $drawing->drawException($drawException);
    } else {
        $drawing->setBarcode($code);
        $drawing->draw();
    }

    // Draw (or save) the image into PNG format.
    $img = $drawing->finish(BCGDrawing::IMG_FORMAT_PNG);

    $data = base64_encode( $img );
    $colunas .= "<div class='celula col$col'><img src='data:image/png;base64,$data'></div>";

    if ($contador == 3) {
        $contador = 0;
        $linhas .= "<div class='linha'>$colunas</div>";
        $colunas = null;
        $col = 1;
    } else {
        $contador++;
        $col++;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body {
            margin-top: 1cm;
            margin-left: 1cm;
            padding: 0;
            width: 21.59cm;
            height: 27cm;
        }
        .linha {
            float: left;
        }

        .celula {
            float: left;
            height: 1.29cm;
            width: 4cm;
            margin-right: 4mm;
            border: 1px solid #eee;
            -webkit-border-radius: 6px;
            -moz-border-radius: 6px;
            border-radius: 6px;
            margin-top: -1px;
            padding-left: 4mm;
            padding-top: 4mm;
        }

        .col3 {
            margin-left: -1mm;
        }

        .col4 {
            margin-left: -1mm;
        }

    </style>
</head>
<body>
    <?php echo $linhas; ?>
</body>
</html>