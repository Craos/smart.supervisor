<?php

$require = null;
$require .= '../../../../../craosframework/recordset/fb.php|';
$require .= '../../../../../craosframework/recordset/FirePHP.class.php|';
$require .= '../../../../../craosframework/recordset/RecordSet.class.php|';
$require .= '../../../../../craosframework/recordset/RecordSet.io.class.php|';
$require .= '../../../../../craosframework/recordset/RecordSet.logger.php|';
$require .= '../../../../../craosframework/recordset/RecordSet.reflection.php|';
$require .= '../../../../../craosframework/recordset/SMTPServer.class.php|';
$require .= '../../../../../craosframework/recordset/common.functions.class.php|';
$require .= '../../../../../craosframework/mailer/class.phpmailer.php|';
$require .= '../mail/recupera/envia_recupera.php|';
$require .= '../mail/atendimento/envia_atendimento.php';

require_once('../config.php');

parse_str(base64_decode($_REQUEST['i']), $dados);

$torres = Array(
    1 => '1 - Flore',
    2 => '2 - Sole',
    3 => '3 - Mare',
    4 => '4 - Gratia',
    5 => '5 - Dulce',
    6 => '6 - Ventura',
    7 => '7 - Cantare',
    8 => '8 - Alegro',
    9 => '9 - Animare',
    10 => '10 - Mundi'
);

$condominio = $dados['condominio'];
$nome_bloco = $torres[$dados['bloco']];
$bloco = $dados['bloco'];
$andar = $dados['andar'];
$unidade = $dados['unidade'];
$pk_unidade = $dados['pk_unidade'];
$num = $dados['num'];
$email_usuario = $dados['email'];


// Unidade
$server_web->Execute("
  SELECT *
    FROM condominio.unidades
   WHERE condominio = $condominio and bloco = $bloco and andar = $andar and unidade = $unidade
");
$dados_unidade = @pg_fetch_object($server_web->Resource);

$unidade_num = $dados_unidade->num;
$nome_proprietario = utf8_decode($dados_unidade->nome_proprietario);
$email_proprietario = (strlen($dados_unidade->email_proprietario) > 0) ? $dados_unidade->email_proprietario : $email_usuario;
$imobiliaria = ($dados_unidade->situacao == 1) ? utf8_decode('Este imóvel não está alugado') : utf8_decode($dados_unidade->imobiliaria);
$telefone_imobiliaria = $dados_unidade->telefone_imobiliaria;
$telefone_proprietario = $dados_unidade->telefone_proprietario;

//Moradores
$server_web->Execute("SELECT moradores.nome, genero.descricao AS genero, moradores.cpf, moradores.rg, moradores.nascimento, parentesco.descricao AS parentesco, moradores.local_nascimento, moradores.proprietario
   FROM condominio.moradores
   LEFT JOIN condominio.genero ON moradores.genero::text = genero.id::text
   LEFT JOIN condominio.parentesco ON moradores.parentesco = parentesco.id::numeric
   WHERE moradores.condominio = $condominio and moradores.bloco = $bloco and moradores.andar = $andar and moradores.unidade = $pk_unidade
   ORDER BY moradores.num
");

echo  "SELECT moradores.nome, genero.descricao AS genero, moradores.cpf, moradores.rg, moradores.nascimento, parentesco.descricao AS parentesco, moradores.local_nascimento, moradores.proprietario
   FROM condominio.moradores
   LEFT JOIN condominio.genero ON moradores.genero::text = genero.id::text
   LEFT JOIN condominio.parentesco ON moradores.parentesco = parentesco.id::numeric
   WHERE moradores.condominio = $condominio and moradores.bloco = $bloco and moradores.andar = $andar and moradores.unidade = $pk_unidade
   ORDER BY moradores.num
";

$linha_moradores = '';
while ($dados_morador = pg_fetch_object($server_web->Resource)) {

    $nome_morador = utf8_decode($dados_morador->nome);
    $rg_morador = $dados_morador->rg;
    $cpf_morador = $dados_morador->cpf;
    $nascimento = $dados_morador->nascimento;
    $local_nascimento = utf8_decode($dados_morador->local_nascimento);
    $genero = utf8_decode($dados_morador->genero);
    $parentesco = $dados_morador->parentesco;

    $linha_moradores .= <<<HTML

<tr style='mso-yfti-irow:3;height:26.75pt'>
    <td width=191 colspan=3 valign=bottom style='width:143.0pt;border:solid #BFBFBF 1.0pt; mso-border-themecolor:background1;mso-border-themeshade:191;border-top: none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1; mso-border-top-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor: background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt; height:26.75pt'>
        <p class=MsoNormal style='mso-yfti-cnfc:4'>
            <span style='mso-bookmark:_MailAutoSig'>
            <span style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family: "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language: PT-BR;mso-bidi-font-weight:bold;mso-no-proof:yes'>$nome_morador<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=107 valign=bottom style='width:79.95pt;border-top:none; border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor: background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt; mso-border-right-themecolor:background1;mso-border-right-themeshade:191; mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1; mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt; mso-border-left-themecolor:background1;mso-border-left-themeshade:191; mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1; mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
        <p class=MsoNormal><span style='mso-bookmark:_MailAutoSig'>
        <span style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family: "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language: PT-BR;mso-bidi-font-weight:bold;mso-no-proof:yes'>$rg_morador<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=97 valign=bottom style='width:72.8pt;border-top:none;border-left: none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1; mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt; mso-border-right-themecolor:background1;mso-border-right-themeshade:191; mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1; mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt; mso-border-left-themecolor:background1;mso-border-left-themeshade:191; mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1; mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
        <p class=MsoNormal><span style='mso-bookmark:_MailAutoSig'><span style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family: "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language: PT-BR;mso-no-proof:yes'>$cpf_morador<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=85 valign=bottom style='width:63.45pt;border-top:none;border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1; mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt; mso-border-right-themecolor:background1;mso-border-right-themeshade:191; mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1; mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt; mso-border-left-themecolor:background1;mso-border-left-themeshade:191; mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1; mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
        <p class=MsoNormal><span style='mso-bookmark:_MailAutoSig'>
        <span style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family:"Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language: PT-BR;mso-no-proof:yes'>$nascimento<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=213 colspan=4 valign=bottom style='width:160.05pt;border-top:none;border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt; mso-border-right-themecolor:background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;mso-border-left-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
        <p class=MsoNormal><span style='mso-bookmark:_MailAutoSig'><span style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family: "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language: PT-BR;mso-no-proof:yes'>$local_nascimento<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=66 valign=bottom style='width:49.75pt;border-top:none;border-left: none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1; mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt; mso-border-right-themecolor:background1;mso-border-right-themeshade:191; mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1; mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt; mso-border-left-themecolor:background1;mso-border-left-themeshade:191; mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1; mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
        <p class=MsoNormal><span style='mso-bookmark:_MailAutoSig'><span style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family: "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language: PT-BR;mso-no-proof:yes'>$genero<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=94 valign=bottom style='width:70.2pt;border-top:none;border-left: none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1; mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt; mso-border-right-themecolor:background1;mso-border-right-themeshade:191;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-themecolor:background1;mso-border-left-themeshade:191; mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1; mso-border-themeshade:191;padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
        <p class=MsoNormal><span style='mso-bookmark:_MailAutoSig'><span style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family: "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language: PT-BR;mso-no-proof:yes'>$parentesco<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
   </tr>
HTML;
}

// Veiculo
$server_web->Execute("
  SELECT *
    FROM condominio.veiculos
   WHERE condominio = $condominio and bloco = $bloco and andar = $andar and unidade = $pk_unidade
");


$linha_veiculos = '';
while ($dados_veiculos = pg_fetch_object($server_web->Resource)) {

    $marca = utf8_decode($dados_veiculos->marca);
    $modelo = utf8_decode($dados_veiculos->modelo);
    $placa_letras = $dados_veiculos->placa_letras;
    $placa_numeros = $dados_veiculos->placa_numeros;
    $cor_veiculo = utf8_decode($dados_veiculos->cor);

    $linha_veiculos .= <<<HTML
    <tr style='mso-yfti-irow:6;height:26.75pt'>
        <td width=191 colspan=3 valign=bottom style='width:143.0pt;border:solid #BFBFBF 1.0pt;  mso-border-themecolor:background1;mso-border-themeshade:191;border-top: none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1; mso-border-top-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor: background1;mso-border-themeshade:191;background:white;mso-background-themecolor: background1;padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
            <p class=MsoNormal style='mso-yfti-cnfc:68'><span style='mso-bookmark:_MailAutoSig'><span style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family: "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language: PT-BR;mso-bidi-font-weight:bold;mso-no-proof:yes'>$marca<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=204 colspan=2 valign=bottom style='width:152.75pt;border-top: none;border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor: background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt; mso-border-right-themecolor:background1;mso-border-right-themeshade:191; mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1; mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt; mso-border-left-themecolor:background1;mso-border-left-themeshade:191; mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1; mso-border-themeshade:191;background:white;mso-background-themecolor:background1; padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
        <p class=MsoNormal style='mso-yfti-cnfc:64'><span style='mso-bookmark:_MailAutoSig'>
        <span style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family: "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language: PT-BR;mso-bidi-font-weight:bold;mso-no-proof:yes'>$modelo<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=298 colspan=5 valign=bottom style='width:223.5pt;border-top:none; border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor: background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt; mso-border-right-themecolor:background1;mso-border-right-themeshade:191; mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1; mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt; mso-border-left-themecolor:background1;mso-border-left-themeshade:191; mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1; mso-border-themeshade:191;background:white;mso-background-themecolor:background1; padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
        <p class=MsoNormal style='mso-yfti-cnfc:64'><span style='mso-bookmark:_MailAutoSig'>
        <span style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family: "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language: PT-BR;mso-no-proof:yes'>$placa_letras-$placa_numeros<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=160 colspan=2 valign=bottom style='width:119.95pt;border-top: none;border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor: background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt; mso-border-right-themecolor:background1;mso-border-right-themeshade:191; mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1; mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt; mso-border-left-themecolor:background1;mso-border-left-themeshade:191; mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1; mso-border-themeshade:191;background:white;mso-background-themecolor:background1; padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
        <p class=MsoNormal style='mso-yfti-cnfc:64'><span style='mso-bookmark:_MailAutoSig'>
            <span style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family: "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language: PT-BR;mso-no-proof:yes'>$cor_veiculo<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
   </tr>
HTML;

}

// Empregado
$server_web->Execute("
SELECT *
FROM condominio.empregados
   WHERE condominio = $condominio and bloco = $bloco and andar = $andar and unidade = $pk_unidade
");

$linha_empregados = '';
while ($dados_empregados = pg_fetch_object($server_web->Resource)) {

    $nome_empregado = utf8_decode($dados_empregados->nome);
    $rg_empregado = $dados_empregados->rg;
    $cpf_empregado = $dados_empregados->cpf;
    $telefone_cel_empregado = $dados_empregados->telefone_cel;
    $servico_prestado = utf8_decode($dados_empregados->servico_prestado);

    $linha_empregados .= <<<HTML
<tr style='mso-yfti-irow:9;height:26.75pt'>
    <td width=191 colspan=3 valign=bottom style='width:143.0pt;border:solid #BFBFBF 1.0pt;
    mso-border-themecolor:background1;mso-border-themeshade:191;border-top:
    none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
    mso-border-top-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
    background1;mso-border-themeshade:191;background:white;mso-background-themecolor:
    background1;padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
    <p class=MsoNormal style='mso-yfti-cnfc:4'><span style='mso-bookmark:_MailAutoSig'><span
    style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family:
    "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language:
    PT-BR;mso-bidi-font-weight:bold;mso-no-proof:yes'>$nome_empregado<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=107 valign=bottom style='width:79.95pt;border-top:none;
    border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:
    background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
    mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
    mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
    mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
    mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
    mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
    mso-border-themeshade:191;background:white;mso-background-themecolor:background1;
    padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
    <p class=MsoNormal><span style='mso-bookmark:_MailAutoSig'><span
    style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family:
    "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language:
    PT-BR;mso-bidi-font-weight:bold;mso-no-proof:yes'>$rg_empregado<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=97 valign=bottom style='width:72.8pt;border-top:none;border-left:
    none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
    mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
    mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
    mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
    mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
    mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
    mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
    mso-border-themeshade:191;background:white;mso-background-themecolor:background1;
    padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
    <p class=MsoNormal><span style='mso-bookmark:_MailAutoSig'><span
    style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family:
    "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language:
    PT-BR;mso-bidi-font-weight:bold;mso-no-proof:yes'>$cpf_empregado<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=131 colspan=3 valign=bottom style='width:98.05pt;border-top:none;
    border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:
    background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
    mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
    mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
    mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
    mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
    mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
    mso-border-themeshade:191;background:white;mso-background-themecolor:background1;
    padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
    <p class=MsoNormal><span style='mso-bookmark:_MailAutoSig'><span
    style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family:
    "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language:
    PT-BR;mso-no-proof:yes'>$telefone_cel_empregado<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=327 colspan=4 valign=bottom style='width:245.4pt;border-top:none;
    border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:
    background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
    mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
    mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
    mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
    mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
    mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
    mso-border-themeshade:191;background:white;mso-background-themecolor:background1;
    padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
    <p class=MsoNormal><span style='mso-bookmark:_MailAutoSig'><span
    style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family:
    "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language:
    PT-BR;mso-no-proof:yes'>$servico_prestado<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
   </tr>
HTML;

}

// Visitante
$server_web->Execute("
SELECT *
FROM condominio.visitantes
   WHERE condominio = $condominio and bloco = $bloco and andar = $andar and unidade = $pk_unidade
");

$linha_visitantes = '';
while ($dados_visitantes = pg_fetch_object($server_web->Resource)) {

    $nome_visitante = utf8_decode($dados_visitantes->nome);
    $rg_visitante = $dados_visitantes->rg;
    $cpf_visitante = $dados_visitantes->cpf;
    $telefone_res_visitante = $dados_visitantes->telefone_res;
    $telefone_cel_visitante = $dados_visitantes->telefone_cel;

    $linha_visitantes .= <<<HTML
        <tr style='mso-yfti-irow:12;mso-yfti-lastrow:yes;height:26.75pt'>
    <td width=191 colspan=3 valign=bottom style='width:143.0pt;border:solid #BFBFBF 1.0pt;
    mso-border-themecolor:background1;mso-border-themeshade:191;border-top:
    none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
    mso-border-top-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
    background1;mso-border-themeshade:191;background:white;mso-background-themecolor:
    background1;padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
    <p class=MsoNormal style='mso-yfti-cnfc:68'><span style='mso-bookmark:_MailAutoSig'><span
    style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family:
    "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language:
    PT-BR;mso-bidi-font-weight:bold;mso-no-proof:yes'>$nome_visitante<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=107 valign=bottom style='width:79.95pt;border-top:none;
    border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:
    background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
    mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
    mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
    mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
    mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
    mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
    mso-border-themeshade:191;background:white;mso-background-themecolor:background1;
    padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
    <p class=MsoNormal style='mso-yfti-cnfc:64'><span style='mso-bookmark:_MailAutoSig'><span
    style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family:
    "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language:
    PT-BR;mso-bidi-font-weight:bold;mso-no-proof:yes'>$rg_visitante<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=97 valign=bottom style='width:72.8pt;border-top:none;border-left:
    none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:background1;
    mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
    mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
    mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
    mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
    mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
    mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
    mso-border-themeshade:191;background:white;mso-background-themecolor:background1;
    padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
    <p class=MsoNormal style='mso-yfti-cnfc:64'><span style='mso-bookmark:_MailAutoSig'><span
    style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family:
    "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language:
    PT-BR;mso-bidi-font-weight:bold;mso-no-proof:yes'>$cpf_visitante<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=131 colspan=3 valign=bottom style='width:98.05pt;border-top:none;
    border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:
    background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
    mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
    mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
    mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
    mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
    mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
    mso-border-themeshade:191;background:white;mso-background-themecolor:background1;
    padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
    <p class=MsoNormal style='mso-yfti-cnfc:64'><span style='mso-bookmark:_MailAutoSig'><span
    style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family:
    "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language:
    PT-BR;mso-no-proof:yes'>$telefone_res_visitante<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=327 colspan=4 valign=bottom style='width:245.4pt;border-top:none;
    border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:
    background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
    mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
    mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
    mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
    mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
    mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
    mso-border-themeshade:191;background:white;mso-background-themecolor:background1;
    padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
    <p class=MsoNormal style='mso-yfti-cnfc:64'><span style='mso-bookmark:_MailAutoSig'><span
    style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family:
    "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language:
    PT-BR;mso-no-proof:yes'>$telefone_cel_visitante<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
   </tr>
HTML;

}

// Animais
$server_web->Execute("
SELECT *
FROM condominio.animais
   WHERE condominio = $condominio and bloco = $bloco and andar = $andar and unidade = $pk_unidade
");

$linha_animais = '';
while ($dados_animais = pg_fetch_object($server_web->Resource)) {

    $nome_animal = utf8_decode($dados_animais->nome);
    $especie = utf8_decode($dados_animais->especie);
    $raca = utf8_decode($dados_animais->raca);
    $cor_animal = utf8_decode($dados_animais->cor);

    $linha_animais .=<<<HTML
<tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes;height:26.75pt'>
    <td width=213 valign=bottom style='width:160.0pt;border:solid #BFBFBF 1.0pt;
    mso-border-themecolor:background1;mso-border-themeshade:191;border-top:
    none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
    mso-border-top-themeshade:191;mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:
    background1;mso-border-themeshade:191;background:white;mso-background-themecolor:
    background1;padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
    <p class=MsoNormal style='mso-yfti-cnfc:4'><span style='mso-bookmark:_MailAutoSig'><span
    style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family:
    "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language:
    PT-BR;mso-bidi-font-weight:bold;mso-no-proof:yes'>$nome_animal<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=213 valign=bottom style='width:160.0pt;border-top:none;
    border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:
    background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
    mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
    mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
    mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
    mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
    mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
    mso-border-themeshade:191;background:white;mso-background-themecolor:background1;
    padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
    <p class=MsoNormal><span style='mso-bookmark:_MailAutoSig'><span
    style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family:
    "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language:
    PT-BR;mso-bidi-font-weight:bold;mso-no-proof:yes'>$especie<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=213 valign=bottom style='width:160.0pt;border-top:none;
    border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:
    background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
    mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
    mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
    mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
    mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
    mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
    mso-border-themeshade:191;background:white;mso-background-themecolor:background1;
    padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
    <p class=MsoNormal><span style='mso-bookmark:_MailAutoSig'><span
    style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family:
    "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language:
    PT-BR;mso-bidi-font-weight:bold;mso-no-proof:yes'>$raca<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
    <td width=213 colspan=2 valign=bottom style='width:160.05pt;border-top:
    none;border-left:none;border-bottom:solid #BFBFBF 1.0pt;mso-border-bottom-themecolor:
    background1;mso-border-bottom-themeshade:191;border-right:solid #BFBFBF 1.0pt;
    mso-border-right-themecolor:background1;mso-border-right-themeshade:191;
    mso-border-top-alt:solid #BFBFBF .5pt;mso-border-top-themecolor:background1;
    mso-border-top-themeshade:191;mso-border-left-alt:solid #BFBFBF .5pt;
    mso-border-left-themecolor:background1;mso-border-left-themeshade:191;
    mso-border-alt:solid #BFBFBF .5pt;mso-border-themecolor:background1;
    mso-border-themeshade:191;background:white;mso-background-themecolor:background1;
    padding:0cm 5.4pt 0cm 5.4pt;height:26.75pt'>
    <p class=MsoNormal><span style='mso-bookmark:_MailAutoSig'><span
    style='font-size:9.0pt;mso-bidi-font-size:11.0pt;mso-fareast-font-family:
    "Times New Roman";mso-fareast-theme-font:minor-fareast;mso-fareast-language:
    PT-BR;mso-no-proof:yes'>$cor_animal<o:p></o:p></span></span></p>
    </td>
    <span style='mso-bookmark:_MailAutoSig'></span>
   </tr>
HTML;



}


require_once('source_termo.php');
echo $formulario_termo;