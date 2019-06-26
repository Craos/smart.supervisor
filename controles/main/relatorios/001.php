<?php

    $page = file_get_contents ('001_page.html');

    require_once('../controls/config.php');
    $result = pg_query("SELECT * FROM acesso.historico_veicular_unidade WHERE ".$_REQUEST['whereexp']." ORDER BY num ASC");

    $numpaginas = round (pg_num_rows($result)/15);
    $paginas = null;
    for($i=0; $i<$numpaginas; $i++) {
        $linha = null;
        $conteudopagina = $page;
        $contador = 0;
        while ($dados = pg_fetch_object($result)) {
            $coluna = "<td class='lc'>$dados->filedate</td>";
            $coluna .= "<td class='lc'>$dados->timerg</td>";
            $coluna .= "<td class='lc'>$dados->num</td>";
            $coluna .= "<td>$dados->portaid</td>";
            $coluna .= "<td class='lc'>$dados->autenticacao</td>";
            $coluna .= "<td>$dados->modelo</td>";
            $coluna .= "<td class='lc'>$dados->placa_letras-$dados->placa_numeros</td>";
            $coluna .= "<td>$dados->cor</td>";
            $coluna .= "<td>$dados->situacao_usuario</td>";
            $coluna .= "<td class='lc'>$dados->sentido</td>";
            $linha .= "<tr>$coluna</tr>";
            $contador++;
            if ($contador == 15)
                break;
        }

        $numpaginacorrente = $i+1;
        $conteudopagina = str_replace('#LINHAS#', $linha, $conteudopagina);
        $conteudopagina = str_replace('#DATAAT#', date('d/m/y'), $conteudopagina);
        $conteudopagina = str_replace('#PAGINAS_TOTAL#', "$numpaginacorrente/$numpaginas", $conteudopagina);
        $conteudopagina = str_replace('#DATA_INICIAL#', $_REQUEST['data_inicial'], $conteudopagina);
        $conteudopagina = str_replace('#DATA_FINAL#', $_REQUEST['data_final'], $conteudopagina);
        $conteudopagina = str_replace('#TORRE#', $_REQUEST['torre'], $conteudopagina);
        $conteudopagina = str_replace('#UNIDADE#', $_REQUEST['unidadecorrente'], $conteudopagina);
        $conteudopagina = str_replace('#PLACA#', (isset($_REQUEST['placa'])) ? $_REQUEST['placa'] : 'Todos', $conteudopagina);

        $paginas .= $conteudopagina;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registro de Acesso</title>
    <link rel="stylesheet" type="text/css" href="padrao_relatorios.css">
</head>
<body>
    <?php echo $paginas; ?>
</body>
</html>