<?php
/**
 * Created by PhpStorm.
 * User: oberd
 * Date: 29/09/2016
 * Time: 11:51
 * @param $chamados
 * @return string
 * @throws phpmailerException
 */

if (!isset($_REQUEST['cliente']) && !isset($_REQUEST['chamado']))
    return;

$cliente = $_REQUEST['cliente'];
$chamado = $_REQUEST['chamado'];

EnviaRelatorio(PreparaModelo($chamado, $cliente), ObtemDestinatarios($cliente));

function PreparaModelo($chamados, $numcliente)
{

    $st_aberto = '<img src="data:image/png;base64,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"/>';
    $st_aguardando = '<img src="data:image/png;base64,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"/>';
    $st_concluido = '<img src="data:image/png;base64,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"/>';
    $st_em_atendimento = '<img src="data:image/png;base64,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"/>';

    $arquivomodelo = 'email/templates/sc_completed_task.html';
    $arquivolinha = 'email/templates/sc_completed_task_linhas.html';
    $arquivodespesas = 'email/templates/sc_completed_task_despesas.html';
    $arquivodespesas_linha = 'email/templates/sc_completed_task_despesas_linha.html';
    $arquivodespesas_total = 'email/templates/sc_completed_task_despesas_total.html';

    $modelo = file_get_contents($arquivomodelo);
    $linha = file_get_contents($arquivolinha);

    $despesas = file_get_contents($arquivodespesas);
    $despesas_linha = file_get_contents($arquivodespesas_linha);
    $despesas_total = file_get_contents($arquivodespesas_total);

    $conn = pg_connect(CONNECTIONSTRING_AS);

    /* Busca informações do cliente */
    $clienteinfo = pg_query("SELECT * FROM suporte.cliente WHERE num = $numcliente;");
    $dataclienteinfo = pg_fetch_object($clienteinfo, 0);
    pg_free_result($clienteinfo);

    $chamadoresult = pg_query("SELECT to_char(filedate, 'dd/mm/yyyy') as filedate, timerg, num, to_char(filedate, 'dd/mm/yyyy') as startdate, starttime, startuser, cliente, solicitante, titulo, solicitacao, relatorio, tecnico, situacao, equipamentos_envolvidos, to_char(enddate, 'dd/mm/yyyy') as enddate, endtime, enduser
                                 FROM suporte.solicitacao
                                WHERE num in ($chamados)
                                ORDER BY num ASC;");

    $linhas = "";
    $situacao = $st_aberto;
    $qtdchamados = pg_num_rows($chamadoresult);

    while ($chamado = pg_fetch_object($chamadoresult)) {

        switch ($chamado->situacao) {
            case 1:
                $situacao = $st_aberto;
                break;
            case 2:
                $situacao = $st_em_atendimento;
                break;
            case 3:
                $situacao = $st_concluido;
                break;
            case 4:
                $situacao = $st_aguardando;
                break;
        }

        $linhainfo = $linha;
        $linhainfo = str_replace('$num', $chamado->num, $linhainfo);
        $linhainfo = str_replace('$situacao', $situacao, $linhainfo);
        $linhainfo = str_replace('$titulo', $chamado->titulo, $linhainfo);
        $linhainfo = str_replace('$solicitante', $chamado->solicitante, $linhainfo);
        $linhainfo = str_replace('$solicitacao', $chamado->solicitacao, $linhainfo);
        $linhainfo = str_replace('$relatorio', $chamado->relatorio, $linhainfo);
        $linhainfo = str_replace('$data_abertura', $chamado->filedate, $linhainfo);
        $linhainfo = str_replace('$horario_abertura', $chamado->timerg, $linhainfo);
        $linhainfo = str_replace('$data_inicio_atendimento', $chamado->startdate, $linhainfo);
        $linhainfo = str_replace('$horario_inicio_atendimento', $chamado->starttime, $linhainfo);
        $linhainfo = str_replace('$data_finalizacao', $chamado->enddate, $linhainfo);
        $linhainfo = str_replace('$horario_finalizacao', $chamado->endtime, $linhainfo);

        $componentesresult = pg_query("SELECT componente, quantidade, to_char(valor, 'L9G999G990D99') as valor, to_char(total, 'L9G999G990D99') as total FROM suporte.despesas_componentes WHERE solicitacao = $chamado->num;");

        if (pg_num_rows($componentesresult) > 0) {
            $linhastbcomponentes = "";
            while ($dadosdespesas = pg_fetch_object($componentesresult)) {
                $conjuntodespesalinhas = $despesas_linha;
                $conjuntodespesalinhas = str_replace('$componente', $dadosdespesas->componente, $conjuntodespesalinhas);
                $conjuntodespesalinhas = str_replace('$quantidade', $dadosdespesas->quantidade, $conjuntodespesalinhas);
                $conjuntodespesalinhas = str_replace('$valor', $dadosdespesas->valor, $conjuntodespesalinhas);
                $conjuntodespesalinhas = str_replace('$total', $dadosdespesas->total, $conjuntodespesalinhas);
                $linhastbcomponentes .= $conjuntodespesalinhas;
            }

            $conjuntodespesas = $despesas;
            $conjuntodespesas = str_replace('$linha_despesas', $linhastbcomponentes, $conjuntodespesas);

            $componentestotal = pg_query("SELECT to_char(sum(total), 'L9G999G990D99') as total FROM ( SELECT (quantidade * valor) AS total FROM suporte.despesas_componentes WHERE solicitacao = $chamado->num) AS a");

            $conjuntodespesastotal = $despesas_total;
            while ($datacomptotal = pg_fetch_object($componentestotal))
            {
                $conjuntodespesastotal = str_replace('$t', $datacomptotal->total, $despesas_total);
            }

            $conjuntodespesas = str_replace('$iftl', $conjuntodespesastotal, $conjuntodespesas);
            $linhainfo = str_replace('$ifdsp', $conjuntodespesas, $linhainfo);
            pg_free_result($componentestotal);
        }

        $linhas .= $linhainfo;

        // Confirma o envio do relatório
        pg_query("UPDATE suporte.solicitacao SET resumo_enviado = 1 WHERE num = $chamado->num");

    }
    pg_free_result($chamadoresult);
    pg_close($conn);

    $modelo = str_replace('$cliente', $dataclienteinfo->cliente, $modelo);
    $modelo = str_replace('$num', $numcliente, $modelo);
    $modelo = str_replace('$responsavel', $dataclienteinfo->responsavel, $modelo);
    $modelo = str_replace('$setor', $dataclienteinfo->setor, $modelo);
    $modelo = str_replace('$cpfcnpj', $dataclienteinfo->cpfcnpj, $modelo);
    $modelo = str_replace('$ie', $dataclienteinfo->ie, $modelo);
    $modelo = str_replace('$im', $dataclienteinfo->im, $modelo);
    $modelo = str_replace('$endereco', $dataclienteinfo->endereco, $modelo);
    $modelo = str_replace('$cidade', $dataclienteinfo->cidade, $modelo);
    $modelo = str_replace('$uf', $dataclienteinfo->uf, $modelo);
    $modelo = str_replace('$telefone', $dataclienteinfo->telefone, $modelo);
    $modelo = str_replace('$qtdchamados', $qtdchamados, $modelo);
    $modelo = str_replace('$linhas', $linhas, $modelo);

    return $modelo;
}

function ObtemDestinatarios($numcliente) {

    pg_connect(CONNECTIONSTRING_AS);
    $clienteinfo = pg_query("SELECT email FROM suporte.cliente_email WHERE cliente = $numcliente;");

    $destinatarios = "";
    while ($dados = pg_fetch_object($clienteinfo)) {
        $destinatarios .= $dados->email.",";
    }
    pg_free_result($clienteinfo);
    return substr($destinatarios, 0, strlen($destinatarios)-1);
}

function EnviaRelatorio($modelo, $destinatarios) {

    $mail = new PHPMailer;
    $mail->SMTPDebug = SMTP_DEBUG;
    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->SMTPAuth = SMTP_AUTH;
    $mail->Username = SMTP_USERNAME;
    $mail->Password = SMTP_PASSWORD;
    $mail->SMTPSecure = SMTP_SECURE;
    $mail->Port = SMTP_PORT;
    $mail->setFrom(SMTP_SETFROM, SMTP_SETFROMNAM);
    $mail->addReplyTo(SMTP_ADDREPLYTO);
    $mail->isHTML(SMTP_ISHTML);
    $mail->CharSet = 'UTF-8';
    $mail->addAddress('oberdan@craos.net'); // FIXME não esquecer de mudar o endereço de email antes da migração de versão
    $mail->Subject = 'Relatório de atendimento';

    $listadestinatarios = explode(",", $destinatarios);
    foreach($listadestinatarios as $value)
        $mail->addAddress($value);

    $conteudo = $modelo;
    $mail->Body = $conteudo;

    if(!$mail->send()) {
        fb::error($mail->ErrorInfo);
    } else {
        ws::out("Informação enviada com sucesso");
    }
}