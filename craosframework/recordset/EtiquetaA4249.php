<?php
require('../barcodegen2/class/BCGFont.php');
require('../barcodegen2/class/BCGColor.php');
require('../barcodegen2/class/BCGDrawing.php');
require('../barcodegen2/class/BCGean8.barcode.php');

$cnn = pg_connect("host=127.0.0.1 port=5555 dbname=smt user=postgres password=yu45thn@");
$result = pg_query("SELECT numero FROM condominio.cria_sequencias() ORDER BY numero;");

$etiqueta = "";
$coluna = "";
$numcoluna = 1;
$contadorlinha = 1;
while ($data = pg_fetch_object($result)) {

    $font = new BCGFont('../barcodegen2/class/font/Arial.ttf', 8);
    $color_black = new BCGColor(0, 0, 0);
    $color_white = new BCGColor(255, 255, 255);

    $code = new BCGean8();
    $code->setScale(1);
    $code->setThickness(30);
    $code->setForegroundColor($color_black);
    $code->setBackgroundColor($color_white);
    $code->setFont($font);
    $code->parse($data->numero);

    $drawing = new BCGDrawing('', $color_white);
    $drawing->setBarcode($code);
    $drawing->draw();
    $imagem = 'data:image/png;base64,' . base64_encode($drawing->finish(BCGDrawing::IMG_FORMAT_PNG));

    if ($contadorlinha <> 15) {
        $etiqueta .= "<div class=\"codigo\"><img src=\"$imagem\" /></div>";
        $contadorlinha++;
    } else {
        $coluna .= "<div class=\"coluna\" id=\"col$numcoluna\">$etiqueta</div>";
        $numcoluna++;
        $etiqueta = "";
        $contadorlinha = 1;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        @media print, all {

            body {
                size: letter;
                margin-left: 14mm;
                height: 27.9cm;
                width: 21.6cm;
                margin-top: 13mm;
                padding: 0;
            }

            .coluna {
                border: 1px solid white;
                height: 25.4cm;
                width: 4.4cm;
                position: absolute;
            }

            .etiqueta {
                border: 1px solid white;
                height: 17mm;
                margin-bottom: 1mm;
            }

            #col1 {

            }
            #col2 {
                left: 6.2cm;
            }
            #col3 {
                left: 11cm;
            }
            #col4 {
                left: 15.8cm;
            }
        }
    </style>
</head>
<body>
    <?php echo $coluna; ?>
</body>
</html>