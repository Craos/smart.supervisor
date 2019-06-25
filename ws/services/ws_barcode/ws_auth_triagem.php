<?php
/**
 * Created by PhpStorm.
 * User: oberd
 * Date: 10/06/2017
 * Time: 20:43
 */

$dados = json_decode($_REQUEST['data']);


require_once('/htdocs/ws/var/lib/barcode/class/BCGFontFile.php');
require_once('/htdocs/ws/var/lib/barcode/class/BCGColor.php');
require_once('/htdocs/ws/var/lib/barcode/class/BCGDrawing.php');
require_once('/htdocs/ws/var/lib/barcode/class/BCGean8.barcode.php');
$font = new BCGFontFile('/htdocs/ws/var/lib/barcode/font/Arial.ttf', 20);

// The arguments are R, G, B for color.
$color_black = new BCGColor(0, 0, 0);
$color_white = new BCGColor(255, 255, 255);

$drawException = null;

try {
    $code = new BCGean8();
    $code->setScale(2); // Resolution
    $code->setThickness(50); // Thickness
    $code->setForegroundColor($color_black); // Color of bars
    $code->setBackgroundColor($color_white); // Color of spaces
    $code->setFont($font); // Font (or 0)
    $code->parse($dados->autenticacao); // Text
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


$img = $drawing->finish(BCGDrawing::IMG_FORMAT_PNG);

?>
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Autorização</title>
    <style>
        html, body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            width: 100%;
            height: 100%;
        }

        #info {
            margin-top: 20px;
            margin-bottom: 20px;
            text-align: center;
            line-height: 25px;
            text-transform: uppercase;
            font-family: Arial, sans-serif;
        }

        #codigo {
            text-align: center;
        }
    </style>
</head>
<body>
<div id="info">
    <div id="codigo">
	<img src="data:image/png;base64,<?php echo base64_encode( $img ); ?>" />
    </div>
    <span>Data:<?php echo $dados->filedate; ?> <?php echo $dados->timerg; ?></span><br>
    <span>Bloco:<?php echo $dados->bloco; ?> Unidade: <?php echo $dados->unidade; ?></span><br>
    <span style="font-weight: bolder; font-size: 26px"><?php echo $dados->tipovaga; ?></span><br>
    <span><?php echo $dados->nometipoacesso; ?></span><br>
    <span><?php echo $dados->nomeestacionamento; ?></span><br>
    <span>Vaga: <?php echo $dados->vaga; ?></span>
</div>
</body>
<script>
    window.print();
    window.onafterprint = function () {
        window.close();
    }
</script>
</html>