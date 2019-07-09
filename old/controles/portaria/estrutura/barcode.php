<?php
/**
 * Created by PhpStorm.
 * User: CraosNote
 * Date: 31/05/14
 * Time: 23:21
 */

$digitos = $_REQUEST['registro'];
$largura = (strlen($digitos) * 24) + 100;
$margem = $largura / 2;
$larguraposicao = "width: " . $largura . "px; margin-left: -" . $margem . "px;";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
    <title>Sistema Craos.NET</title>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
    <style type="text/css">

        html, body {
            margin: 0;
            padding: 0;
            font-family: "Segoe UI Normal", Arial, Tahoma, sans-serif;
        }

        p {
            text-align: center;
            font-size: xx-large;
            font-weight: bold;
        }

        h6, h5 {
            line-height: 20px;
            text-align: center;
            font-size: 16px;
        }

        h5 {
            text-align: center;
        }

        #brcode {
            height: 100px;
        <?php echo $larguraposicao; ?> position: relative;
            left: 50%;
        }

        #logo_anima {
            position: relative;
            left: 50%;
            width: 298px;
            margin-left: -149px;
        }

    </style>


</head>
<body>
<img id="logo_anima" src="../../main/img/logotipoanima.jpeg">
<p>AUTORIZADO</p>
<h6>Data: <?php echo date('d/m/y G:i:s'); ?>
<br>Guarde esta autoriza&ccedil;&atilde;o. <br>Esta ser&aacute; solicitada na sa&iacute;da.</h6>
<iframe id="brcode" src="../../../../craosframework/barcode/test_1D.php?text=<?php echo $digitos; ?>"
        frameborder="0"></iframe>

<script type="application/javascript">
    // set portrait orientation
    jsPrintSetup.setOption('orientation', jsPrintSetup.kPortraitOrientation);
    // set top margins in millimeters
    jsPrintSetup.setOption('marginTop', 15);
    jsPrintSetup.setOption('marginBottom', 15);
    jsPrintSetup.setOption('marginLeft', 20);
    //jsPrintSetup.setOption(' marginRight', 10);
    // set page header
    jsPrintSetup.setOption('headerStrLeft', '');
    jsPrintSetup.setOption('headerStrCenter', '');
    jsPrintSetup.setOption('headerStrRight', '');
    // set empty page footer
    jsPrintSetup.setOption('footerStrLeft', '');
    jsPrintSetup.setOption('footerStrCenter', '');
    jsPrintSetup.setOption('footerStrRight', '');
    // Suppress print dialog
    jsPrintSetup.setSilentPrint(true);
    // Do Print
    jsPrintSetup.print();
    // Restore print dialog
    //jsPrintSetup.setSilentPrint(false);
    //self.close();
    stateChange();

    function stateChange(newState) {
        setTimeout(function () {
            if (newState == -1) {
                self.close();
            }
        }, 2000);
    }
</script>
</body>
</html>