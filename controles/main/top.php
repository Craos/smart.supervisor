<?php session_start();

require_once('../../../craosframework/recordset/fb.php');
require_once('../../../craosframework/recordset/FirePHP.class.php');

    $nomecompleto = '';
    $primeironome = '';

    if (isset($_SESSION['checkauth']['nome'])) {
        $nomecompleto = $_SESSION['checkauth']['nome'];
        $primeironome = substr($nomecompleto, 0, strpos($_SESSION['checkauth']['nome'], ' '));
        if (strpos($nomecompleto, ' ') == 0)
            $primeironome = $nomecompleto;
    }

    $itens_menu = '';
    if (isset($_SESSION['system_profile'])) {
        for($i = 0; $i < count($_SESSION['system_profile']); $i++)
            if ($_SESSION['system_profile'][$i]['acesso'] == 1)
                $itens_menu .= '<li><a onclick="parent.sendaction(\'' . $_SESSION['system_profile'][$i]['nome_recurso'] . '\');">' . $_SESSION['system_profile'][$i]['label'] . '</a></li>';
    }

$torres = Array(
    1=>'1 - Flore',
    2=>'2 - Sole',
    3=>'3 - Mare',
    4=>'4 - Gratia',
    5=>'5 - Dulce',
    6=>'6 - Ventura',
    7=>'7 - Cantare',
    8=>'8 - Alegro',
    9=>'9 - Animare',
    10=>'10 - Mundi',
    99=>'Adm'
);
if (isset($_SESSION['checkauth']['bloco']) && in_array($_SESSION['checkauth']['bloco'], $torres)) {
    $torre = $torres[$_SESSION['checkauth']['bloco']];
    $unidade = $_SESSION['checkauth']['admunidade'];
}


    unset($_SESSION['checkauth']['pass']);
    $enviadadosusuario = (isset($_SESSION['checkauth']))? json_encode($_SESSION['checkauth']) : '';



?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
    <title>Sistema Craos.NET</title>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
    <link rel="stylesheet" type="text/css" href="style.principal.opcao.css">
    <link rel="stylesheet" type="text/css" href="style.principal.css">
    <link rel="stylesheet" type="text/css" href="menu.top.css">
    <link rel="stylesheet" type="text/css" href="../../../craosframework/ajax/common_functions.css">
</head>
<script type="application/javascript">

    function openAtendimento() {
        parent.registraatendimento();
    }

    function seletor_cliente() {
        parent.selecionaregistro();
    }

    function openInfo() {
        parent.configusuario();
    }

    function sair() {
        parent.location = "sair.php";
    }

    function menuprincipal() {
        parent.mainform();
    }

    function mostradadosmorador(dados) {
        alert(dados);
    }
</script>
<body>
    <div id="top">
        <div id="logo">
            <div id="imglogo"></div>
        </div>
        <a onclick="sair()"><div id="menu-saida" class="menu-superior">Sair</div></a>
        <a onclick="openInfo();"><div id="menu-usuario" class="menu-superior">Usu&aacute;rio</div></a>
        <a onclick="openAtendimento();"><div id="menu-central" class="menu-superior">Atendimento</div></a>
        <a onclick="seletor_cliente();"><div id="menu-alternar" class="menu-superior">Localizar Cadastro</div></a>
    </div>
    <div id="roadmap">
        <div id="menu_principal">
            <nav>
                <ul>
                    <?php echo $itens_menu; ?>
                    <li><a href="#" onclick="menuprincipal();">Menu principal</a></li>
                </ul>
            </nav>
        </div>
       <div id="usuario_corrente">Supervisor: <?php echo $primeironome; ?></div>
    </div>
</body>
</html>