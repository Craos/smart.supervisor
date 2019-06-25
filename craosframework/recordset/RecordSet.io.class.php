<?php

/**
 * Created by PhpStorm.
 * User: Oberdan
 * Date: 28/07/14
 * Time: 17:09
 */

ini_set('display_errors', 'off');
require_once('XmlServer.class.php');
require_once('SMTPServer.class.php');

class IOException extends Exception
{
}

class Output
{

    public $data = '0';
    public $data_password = '0';
    public $header = '0';
    public $rawfile = '0';
    public $targetlog = 'action/';
    public $targetrawfile = 'action/temp/';
    public $targetcontenthtml = 'Content-type:text/html';
    public $targetcontentxml = 'Content-type:text/xml';
    public $type = '0';

    const type_complete = 'complete';
    const type_data = 'data';
    const type_rows = 'rows';

}

class Input
{

    const campos = 'campos';
    const chave = 'chave';
    const contenttype = 'contenttype';
    const displaychave = 'displaychave';
    const listLabel = 'listlabel';
    const grava_sessao = 'grava_sessao';
    const having = 'having';
    const imagem = 'imagem';
    const imageminexistente = 'imageminexistente';
    const limit = 'limit';
    const login = 'login';
    const nome_sessao = 'nome_sessao';
    const gerar_sessao = 'gerar_sessao';
    const num = 'num';
    const groupby = 'groupby';
    const orderby = 'orderby';
    const origem = 'origem';
    const retorno = 'retorno';
    const targetfield = 'targetfield';
    const origem_imagem = 'origem_imagem';
    const password = 'password';
    const ReturnKey = 'returnkey';
    const usecheckbox = 'usecheckbox';
    const usedecimal = 'usedecimal';
    const where = 'where';
    const whereexp = 'whereexp';
    const operador_where = 'operador_where';
    const operator_field = 'operator_field';


    const smtp_from = 'smtpfrom';
    const smtp_fromname = 'smtpfromname';
    const smtp_address = 'smtpaddress';
    const smtp_replyto = 'smtpreplyto';
    const smtp_bcc = 'smtpbcc';
    const smtp_subject = 'smtpsubject';
    const smtp_message = 'smtpmessage';

    const atendimento_assunto = 'assunto';
    const atendimento_solicitacao = 'solicitacao';

}

abstract class IOType
{
    public $Output;
    public $Input;

    public function __construct()
    {
        $this->Input = new Input();
        $this->Output = new Output();
    }
}

class IO extends IOType
{

    const CommandInsert = 'insert'; // Grava e edita registro no banco de dados
    const CommandUpdate = 'update'; // Apenas edita registro no banco de dados
    const CommandDelete = 'delete'; // Remove um registro do banco de dados
    const CommandSelect = 'select'; // Busca registros de acordo com a chave primaria
    const CommandSelectURL = 'selecturl'; //Busca registros na URL
    const CommandDirectJson = 'directjson'; // Busca registros e devolve em JSON
    const CommandCombo = 'select_combo'; // Busca registros para preenchimento de um combo
    const CommandImage = 'select_image'; // Busca uma imagem no disco
    const CommandUpdateImage = 'updateimage'; // Apenas edita registro no banco de dados
    const CommanddhtView = 'dhtmlxview'; // Busca registros para um DHTMLx View
    const CommanddhtGrid = 'dhtmlxgrid'; // Busca registros para um DHTMLx Grid
    const CommanddhtTree = 'dhtmlxtree'; // Busca registros para um DHTMLx Tree
    const CommanddhtForm = 'dhtmlxform'; // Busca registros para um DHTMLx Form
    const CommanddhtExportExcel = 'exportexcel'; // Exporta arquivos para excel
    const CommanddhtPrintJson = 'printjson'; // Exportas os dados no formato JSON
    const CommandLogin = 'login'; // Busca um registro de acesso do usuario
    const CommandSendMail = 'sendmail'; // Envia um e-mail
    const CommandSentMailNotice = 'sendnotice'; //Envia um e-mail generico

    /**
     * @var null Action. Informa qual a acao deve executar
     */
    public $Action;

    /**
     * @var XMLServer Objeto que cria saidas em XML
     */
    private $XMLServer;

    /**
     * @var SMTPServer Objeto para envio de mensagens de e-mail
     */
    private $SMTPServer;

    /**
     * @var Database Objeto que manipula dados no banco de dados
     */
    private $DataBaseServer;

    /**
     * @param Database $Server Obrigatorio a classe que manipula o banco de dados
     */
    public function __construct(Database $Server, SMTP_Server $smtpserver)
    {
        $this->XMLServer = new XMLServer();
        $this->XMLServer->setServer($Server->connection);
        $this->DataBaseServer = $Server;
        $this->DataBaseServer->SendUpperCase = false;
        $this->SMTPServer = $smtpserver;
        $this->getHeader();
        $this->Action();

    }

    /**
     * Decodifica o tipo de dado recebido
     */
    private function getHeader()
    {

        if (isset($GLOBALS["HTTP_RAW_POST_DATA"])) {
            $this->parseRawData();

        } else if (isset($_SERVER["CONTENT_TYPE"]) && stripos($_SERVER["CONTENT_TYPE"], "application/json") === 0) {
            $this->parseJsonData();

        } else if (isset($_SERVER["CONTENT_TYPE"]) && stripos($_SERVER["CONTENT_TYPE"], "application/x-www-form-urlencoded") === 0) {
            $this->parseUrlencodedData();

        } else {
            $this->parserCommonData();
        }

    }

    private function parseRawData()
    {

        try {

            $imageData = $GLOBALS['HTTP_RAW_POST_DATA'];
            $filteredData = substr($imageData, strpos($imageData, ",") + 1);
            $unencodedData = base64_decode($filteredData);

            parse_str(base64_decode($imageData), $dados);
            $nomedoarquivo = md5(uniqid(mt_rand(), true)) . '.png';

            $fp = fopen($this->Output->targetrawfile . $nomedoarquivo, 'wb');
            fwrite($fp, $unencodedData);
            fclose($fp);

            $log = fopen($this->Output->targetlog . 'log_' . date('Y-m-d') . '.txt', 'a+');
            fwrite($log, date("Y-m-d H:i:s") . " - INFO --> " .
                __LINE__ . "; 'Arquivo de imagem gerado: $nomedoarquivo'" . "\n");
            fclose($log);
            $this->Output->rawfile = $nomedoarquivo;
            $this->Input[Input::imagem] = $nomedoarquivo;

        } catch (Exception $Error) {
            fb::dump('Erro na gravaçao de imagens', $Error);
        }

    }

    private function parseJsonData()
    {

        try {

            $result = (Array)json_decode(file_get_contents("php://input"));
            $this->Action = $result['action'];
            unset($result['action']);
            $this->Input = $result;

        } catch (Exception $Error) {
            fb::dump('Erro de leitura JSON', $Error);
        }

    }

    private function parseUrlencodedData()
    {

        try {

            $dados = file_get_contents("php://input");
            $dados = explode('&', $dados);
            $result = Array();
            foreach ($dados as $item) {
                $campo = explode('=', $item);
                $result[$campo[0]] = $campo[1];
            }
            $this->Action = $result['action'];
            unset($result['action']);
            $this->Input = $result;

        } catch (Exception $Error) {
            fb::dump('Erro de leitura URLEncoded', $Error);
        }

    }

    private function parserCommonData()
    {

        try {

            if (isset($_REQUEST['action']))
                $this->Action = $_REQUEST['action'];

            $this->Input = $_REQUEST;

        } catch (Exception $Error) {
            fb::dump('Erro de leitrua CommonData', $Error);
        }

    }

    public function Action()
    {
        fb::dump('a', $this->Action);
        switch ($this->Action) {

            case self::CommandLogin:
                $this->Auth($this->Input[Input::login], $this->Input[Input::password]);
                break;

            case self::CommandInsert:
                if ($this->Input[Input::num] != '' && $this->Input[Input::num] != null && $this->Input[Input::num] != 'null') {
                    $this->EditRecord();
                } else {
                    $this->NewRecord();
                }
                break;

            case self::CommandUpdate:
                $this->EditRecord();
                break;

            case self::CommandUpdateImage:
                $this->EditRecordImage();
                break;

            case self::CommandDelete:
                $this->DeleteRecord();
                break;

            case self::CommandSelect:
                $this->Select();
                break;

            case self::CommandSelectURL:
                $this->getURLData();
                break;

            case self::CommandDirectJson:
                $this->SelectDirectJson();
                break;

            case self::CommandCombo:
                $this->Output->type = Output::type_complete;
                if (!isset($_SESSION[$this->Input[Input::nome_sessao]])) {
                    if ($this->Input[Input::grava_sessao] == 'true' && isset($_SESSION[$this->Input[Input::nome_sessao]]))
                        $_SESSION[$this->Input[Input::nome_sessao]] = $this->SelectCombo();
                }

                if (count($_SESSION[$this->Input[Input::nome_sessao]]) > 0) {
                    $this->Output->data = $_SESSION[$this->Input[Input::nome_sessao]];
                } else {
                    $this->Output->data = $this->SelectCombo();
                }
                $this->getDataText();
                break;

            case self::CommandImage:
                $this->Output->data = $this->SelectImage();
                break;

            case self::CommanddhtView:
                $this->SelectDHTMLXViewImage();
                break;

            case self::CommanddhtGrid:
                $this->SelectDHTMLXGrid();
                break;

            case self::CommanddhtTree:
                $this->SelectDHTMLXTree();
                break;

            case self::CommanddhtForm:
                $this->SelectDHTMLXForm();
                break;

            case self::CommanddhtExportExcel:
                $this->ExportExcel();
                break;

            case self::CommanddhtPrintJson:
                $this->PrintJson();
                break;

            case self::CommandSendMail:
                $this->SendMail();
                break;

            case self::CommandSentMailNotice:
                $this->SendMailNotice();
                break;

            default:
                break;
        }

    }

    private function getDataText()
    {

        try {
            if (strtolower($this->Input[Input::contenttype]) == 'xml') {
                header("Content-type:text/xml");
                print("<?xml version='1.0' encoding='UTF-8'?>");
                print("\n\t<" . $this->Output->type . ">");
                print($this->Output->header);
                if (sizeof($this->Output->data) > 0)
                    foreach ($this->Output->data as $item)
                        print($item);

                print("\n\t</" . $this->Output->type . ">");
            } else if (strtolower($this->Input[Input::contenttype]) == 'json') {
                echo json_encode($this->Output->data);
            } else {
                header("Content-type:text/xml");
                echo $this->Output->data;
            }

        } catch (Exception $Error) {
            fb::dump('Erro na função de saída dos dados OutData', $Error);
        }

    }

    private function getDataJson($Recurso, $operacao, $campo_resposta = 'num')
    {
        try {

            header($this->Output->targetcontenthtml);
            $situação = 'Falha na operação';
            $numero_registro = null;
            if (strlen($Recurso[0]['num']) > 0) {
                $result = ' atualizadas com sucesso';
                if ($operacao == self::CommandInsert) {
                    $result = ' cadastradas com sucesso';
                } else if ($operacao == self::CommandDelete) {
                    $result = ' removidas com sucesso';
                }
                $situação = "Suas informações foram $result";
                $numero_registro = $Recurso[0][$campo_resposta];
            }

            $this->Output->data = json_encode(
                Array(
                    'situacao' => $situação,
                    'registro' => $numero_registro
                )
            );

            echo $this->Output->data;

            $log = fopen('action/log_' . date('Y-m-d') . '.txt', 'a+');
            fwrite($log, date("Y-m-d H:i:s") . " - INFO --> 204; 'Situação: " . $this->Output->data . "'" . "\n");
            fclose($log);

        } catch (Exception $Error) {
            fb::dump('Erro na saída de dados via JSON', $Error);
        }

    }

    private function Auth($UserName, $PassWord)
    {
        try {

            header("Content-type:text/html");
            $this->DataBaseServer->Execute($this->getStringSQL());
            $this->Output->data = @$this->DataBaseServer->Result();

            fb::dump('result', $this->Output->data);

            if (count($this->Output->data) == 0) {
                echo json_encode(Array(
                    'resultado' => 'inexistente'
                ));
                return;
            } else {
                $valor_pass = (gettype($this->Output->data) == 'object') ? $this->Output->data->password : $this->Output->data['password'];

                $ipAddress=$_SERVER['REMOTE_ADDR'];
                $macAddr=$_SERVER['HTTP_X_FORWARDED_FOR'];
                #run the external command, break output into lines
                $arp=`arp $ipAddress`;
                $lines=explode("\n", $arp);

                #look for the output line describing our IP address
                foreach($lines as $line)
                {
                    $cols=preg_split('/\s+/', trim($line));
                    if ($cols[0]==$ipAddress)
                    {
                        $macAddr=$cols[1];
                    }
                }

                fb::dump('pwd', [$valor_pass, $PassWord]);

                if (strcmp($valor_pass, $PassWord) == 0) {
                    $_SESSION['checkauth'] = (gettype($this->Output->data) == 'object') ?
                        Array(
                            'num' => $this->Output->data->num,
                            'condominio' => $this->Output->data->condominio,
                            'bloco' => $this->Output->data->bloco,
                            'andar' => $this->Output->data->andar,
                            'unidade' => $this->Output->data->unidade,
                            'nome' => $this->Output->data->nome,
                            'cpf' => $this->Output->data->cpf,
                            'email' => $this->Output->data->email,
                            'pk_unidade' => $this->Output->data->pk_unidade,
                            'uidins' => $UserName,
                            'pass' => $PassWord,
                            'auth' => 1,
                            'ipaddress' => $ipAddress,
                            'macaddress' => $macAddr
                        ) :
                        Array(
                            'num' => $this->Output->data['num'],
                            'condominio' => $this->Output->data['condominio'],
                            'bloco' => $this->Output->data['bloco'],
                            'andar' => $this->Output->data['andar'],
                            'unidade' => $this->Output->data['unidade'],
                            'nome' => $this->Output->data['nome'],
                            'cpf' => $this->Output->data['cpf'],
                            'email' => $this->Output->data['email'],
                            'torre' => $this->Output->data['torre'],
                            'pk_unidade' => $this->Output->data['pk_unidade'],
                            'uidins' => $UserName,
                            'pass' => $PassWord,
                            'auth' => 1,
                            'ipaddress' => $ipAddress,
                            'macaddress' => $macAddr
                        );
                    echo json_encode($_SESSION['checkauth']);
                    return;
                } else {
                    echo json_encode(Array(
                        'resultado' => 'invalido'
                    ));
                    return;
                }
            }
        } catch (Exception $Error) {
            fb::dump('Erro no processamento do login', $Error);
        }
    }

    private function NewRecord()
    {

        try {


            if (count($_SESSION['reflectionTB']) == 0 && !isset($_SESSION['reflectionTB']))
                $this->getTables($this->DataBaseServer);

            $rfdb = new ReflectionDB($this->DataBaseServer);
            $rfdb->Tables = $_SESSION['reflectionTB'];
            $objrecordset = new RecordSet($this->Input[Input::origem]);
            $objrecordset->SendUpperCase = false;
            $cliente = $rfdb->preparaCampos($objrecordset, $this->Input);
            $cliente->AddNew();
            $operacao = 'insert';

            if ($cliente->LasrError == 'existente') {
                $cliente->Where = "num = '" . $this->Input[Input::num] . "'";
                $cliente->Update();
                $operacao = 'update';
            }


            $this->getDataJson(pg_fetch_all($cliente->Resource), $operacao, $this->Input[Input::ReturnKey]);
            $cliente->Close();

        } catch (Exception $Error) {
            fb::dump('Erro ao tentar salvar um novo registro', $Error);
        }

    }

    private function EditRecord()
    {

        if (count($_SESSION['reflectionTB']) == 0 && !isset($_SESSION['reflectionTB']))
            $this->getTables($this->DataBaseServer);

        $rfdb = new ReflectionDB($this->DataBaseServer);
        $rfdb->Tables = $_SESSION['reflectionTB'];
        $objrecordset = new RecordSet($this->Input[Input::origem]);
        $objrecordset->SendUpperCase = false;
        $cliente = $rfdb->preparaCampos($objrecordset, $this->Input);
        $cliente->Where = 'num = ' . $this->Input[Input::num];
        $cliente->Update();
        $this->getDataJson(pg_fetch_all($cliente->Resource), 'update', $this->Input[Input::ReturnKey]);
        $cliente->Close();

    }

    private function EditRecordImage()
    {

        if (count($_SESSION['reflectionTB']) == 0 && !isset($_SESSION['reflectionTB']))
            $this->getTables($this->DataBaseServer);

        $rfdb = new ReflectionDB($this->DataBaseServer);
        $rfdb->Tables = $_SESSION['reflectionTB'];
        $objrecordset = new RecordSet($this->Input[Input::origem]);
        $objrecordset->SendUpperCase = false;
        $cliente = $rfdb->preparaCampos($objrecordset, $this->Input);
        $cliente->Where = 'num = ' . $this->Input[Input::num];
        $cliente->Update();
        $this->getDataJson(pg_fetch_all($cliente->Resource), 'update', $this->Input[Input::ReturnKey]);
        $cliente->Close();

        $this->DataBaseServer->Execute("UPDATE " . $this->Input[Input::origem] . " SET " . $this->Input[Input::targetfield] . " = translate(" . $this->Input[Input::targetfield] . ", chr(32), chr(43)) WHERE num = " . $this->Input[Input::num]);

    }

    private function DeleteRecord()
    {

        if (count($_SESSION['reflectionTB']) == 0 && !isset($_SESSION['reflectionTB']))
            $this->getTables($this->DataBaseServer);

        $rfdb = new ReflectionDB($this->DataBaseServer);
        $rfdb->Tables = $_SESSION['reflectionTB'];
        $cliente = $rfdb->preparaCampos(new RecordSet($this->Input[Input::origem]), $this->Input);
        $cliente->Where = 'num = ' . $this->Input[Input::num];
        $cliente->Delete();
        $this->getDataJson(pg_fetch_all($cliente->Resource), 'delete', $this->Input[Input::ReturnKey]);
        $cliente->Close();

    }

    private function Select()
    {
        $this->Output->type = Output::type_data;
        $this->DataBaseServer->Execute($this->getStringSQL());
        $this->Output->data = $this->XMLServer->DataTable($this->DataBaseServer->Resource);
        $this->getDataText();
    }

    private function SelectCombo()
    {
        $this->DataBaseServer->Execute($this->getStringSQL());
        return $this->XMLServer->DataTabletList($this->DataBaseServer->Resource);
    }

    private function SelectImage()
    {
        $this->Output->type = Output::type_complete;
        $campo = $this->Input[Input::campos];
        $origem_imagem = $this->Input[Input::origem_imagem];
        $this->DataBaseServer->Execute($this->getStringSQL());
        $dados = pg_fetch_object($this->DataBaseServer->Resource);

        $arquivo_foto = null;
        if (file_exists(strtolower($origem_imagem . $dados->$campo)))
            $arquivo_foto = strtolower($dados->$campo);

        return $arquivo_foto;
    }

    private function SelectDHTMLXViewImage()
    {
        $this->Output->type = Output::type_complete;
        $nullimage = $this->Input[Input::imageminexistente];
        $origem_imagem = $this->Input[Input::origem_imagem];
        $campos = (strlen($this->Input[Input::campos]) == 0) ? '*' : $this->Input[Input::campos];
        $this->DataBaseServer->Execute($this->getStringSQL());
        $resultado = pg_fetch_all($this->DataBaseServer->Resource);

        $dados = Array();
        if ($resultado != '')
            foreach ($resultado as $linha) {
                $linhaarray = Array();
                foreach ($linha as $key => $value) {
                    if ($key == $campos) {
                        $arquivo_foto = $nullimage;
                        if (file_exists(strtolower($origem_imagem . $value)))
                            $arquivo_foto = $this->Output->targetrawfile . $value;

                        $linhaarray[$key] = $arquivo_foto;
                    } else {
                        $linhaarray[$key] = $this->parseAccent($value, false);
                    }
                }
                $dados[] = $linhaarray;
            }
        $this->getDataText();
    }

    private function SelectDHTMLXGrid()
    {
        @$this->Output->type = Output::type_rows;
        $this->DataBaseServer->Execute($this->getStringSQL());

        $chave = (isset($this->Input[Input::chave])) ? $this->Input[Input::chave] : null;

        $displaychave = true;
        if ($this->Input[Input::displaychave] == false || $this->Input[Input::displaychave] == 'false') {
            $displaychave = null;
        }

        //$displaychave = (isset($this->Input[Input::displaychave])) ? $this->Input[Input::displaychave] : null;
        $usedecimal = (isset($this->Input[Input::usedecimal])) ? $this->Input[Input::usedecimal] : null;

        $this->Output->data = $this->XMLServer->DataTableGrid($this->DataBaseServer->Resource, $chave, $displaychave, $usedecimal);

        $fields = @pg_num_fields($this->DataBaseServer->Resource);
        $header_fields = "<column type='ch' width='30'></column>\n";
        if ($this->Input[Input::usecheckbox] == 'false') {
            $header_fields = null;
        }

        if (isset($this->Input[Input::listLabel]) && strlen($this->Input[Input::listLabel]) > 0) {

            $fields = explode(',', $this->Input[Input::listLabel]);

            // Nome dos campos do lado cliente
            for ($i = 0; $i < $fields; $i++) {
                $field = $fields[$i];
                if ($field == $this->Input[Input::chave]) {
                    if ($this->Input[Input::displaychave] == false || $this->Input[Input::displaychave] == 'false') {
                        continue;
                    }
                }
                $header_fields .= "<column type='ro' sort='str'>$field</column>\n";
            }
        } else {

            // Nome dos campos do banco de dados
            for ($i = 0; $i < $fields; $i++) {
                $field = @pg_field_name($this->DataBaseServer->Resource, $i);
                if ($field == $this->Input[Input::chave]) {
                    if ($this->Input[Input::displaychave] == false || $this->Input[Input::displaychave] == 'false') {
                        continue;
                    }
                }
                $header_fields .= "<column type='ro' sort='str'>$field</column>\n";
            }
        }

        $header = "<head>$header_fields</head>";
        $this->Output->header = $header;
        $this->getDataText();

    }

    private function SelectDHTMLXTree()
    {

        $this->Output->type = Output::type_rows;
        $this->DataBaseServer->Execute($this->getStringSQL());
        $dados = pg_fetch_all($this->DataBaseServer->Resource);
        header("Content-type:text/xml");
        print("<?xml version='1.0' encoding='UTF-8'?>");
        foreach ($dados as $item)
            print($item['item']);

    }

    private function SelectDHTMLXForm()
    {

        $this->Output->type = Output::type_data;
        $this->DataBaseServer->Execute($this->getStringSQL());
        $this->Output->data = $this->XMLServer->DataTable($this->DataBaseServer->Resource);
        $this->getDataText();

    }

    private function ExportExcel()
    {
        $this->DataBaseServer->Execute($this->getStringSQL());


        // Create new PHPExcel object
        $objPHPExcel = new PHPExcel();

        // Set document properties
        $objPHPExcel->getProperties()->setCreator("Oberdan Brito")
            ->setLastModifiedBy("Oberdan Brito")
            ->setTitle("Smart Excel")
            ->setSubject("Smart Excel")
            ->setDescription("Este arquivo foi gerado automaticamente pelo sistema Smart da Craos");

        $fields = pg_num_fields($this->DataBaseServer->Resource);

        $cl = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','BA','BB','BC','BD','BE','BF','BG','BH','BI','BJ','BK'];

        // Cabeçalho
        $objPHPExcel->setActiveSheetIndex(0);
        for($c = 0; $c < $fields; $c++) {
            $objPHPExcel->getActiveSheet()->SetCellValue("$cl[$c]1", pg_field_name($this->DataBaseServer->Resource, $c));
        }

        $linha = 2;
        while ($dados = pg_fetch_object($this->DataBaseServer->Resource)) {
            for ($i = 0; $i < $fields; $i++) {
                $field = pg_field_name($this->DataBaseServer->Resource, $i);
                $objPHPExcel->getActiveSheet()->SetCellValue("$cl[$i]$linha", $dados->$field);
            }
            $linha++;
        }

        // Rename worksheet
        $objPHPExcel->getActiveSheet()->setTitle('Relatório');

        // Set active sheet index to the first sheet, so Excel opens this as the first sheet
        $objPHPExcel->setActiveSheetIndex(0);

        // Redirect output to a client’s web browser (Excel2007)
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment;filename="relatorio.xlsx"');
        header('Cache-Control: max-age=0');

        // If you're serving to IE 9, then the following may be needed
        header('Cache-Control: max-age=1');

        // If you're serving to IE over SSL, then the following may be needed
        header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
        header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
        header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
        header ('Pragma: public'); // HTTP/1.0

        $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
        $arquivo = '../relatorios/'.md5(date('mdYh:i:s a', time())).'.xlsx';
        $objWriter->save($arquivo);
        echo $arquivo;

    }

    private function PrintJson()
    {
        $this->DataBaseServer->Execute($this->getStringSQL());
        $mtime = filemtime($_SERVER['SCRIPT_FILENAME']);
        $gmdate_mod = gmdate('D, d M Y H:i:s', $mtime) . ' GMT';
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        header('Content-type: application/json; charset=utf-8');
        header("Last-Modified: $gmdate_mod");
        header('Expires: ' . gmdate('D, d M Y H:i:s', time() + (60 * 60 * 24 * 45)) . ' GMT');

        if ($this->DataBaseServer->Resource === FALSE) {
            fb::error(pg_last_error());
            return false;
        }

        echo json_encode(pg_fetch_all($this->DataBaseServer->Resource), JSON_UNESCAPED_UNICODE);

    }

    private function SelectDirectJson()
    {
        $this->DataBaseServer->Execute($this->getStringSQL());
        $result = pg_fetch_all($this->DataBaseServer->Resource);
        if (isset($this->Input[Input::gerar_sessao]) && $this->Input[Input::gerar_sessao] == true && $this->Input[Input::nome_sessao] != '')
            $_SESSION[$this->Input[Input::nome_sessao]] = $result;

        echo json_encode($result);
    }

    private function SendMail()
    {

        $this->DataBaseServer->Execute($this->getStringSQL());
        $dados = pg_fetch_object($this->DataBaseServer->Resource);

        $message = $this->SMTPServer->SMTP_Message[$this->Input[Input::smtp_message]];
        $message = str_replace('|nome', $dados->nome, $message);
        $message = str_replace('|login', $dados->login, $message);
        $message = str_replace('|password', base64_decode($dados->password), $message);
        $message = str_replace('|assunto', $this->Input[Input::atendimento_assunto], $message);
        $message = str_replace('|solicitacao', $this->Input[Input::atendimento_solicitacao], $message);
        $message = utf8_decode($message);

        $this->SMTPServer->PHPMailer->isSMTP();
        $this->SMTPServer->PHPMailer->SMTPDebug = $this->SMTPServer->SMTP_Debug;
        $this->SMTPServer->PHPMailer->Debugoutput = $this->SMTPServer->SMTP_Debugoutput;
        $this->SMTPServer->PHPMailer->Host = $this->SMTPServer->SMTP_Host;
        $this->SMTPServer->PHPMailer->Port = $this->SMTPServer->SMTP_Port;
        $this->SMTPServer->PHPMailer->SMTPAuth = $this->SMTPServer->SMTP_Auth;
        $this->SMTPServer->PHPMailer->Username = $this->SMTPServer->SMTP_Username;
        $this->SMTPServer->PHPMailer->Password = $this->SMTPServer->SMTP_Password;
        $this->SMTPServer->PHPMailer->From = $dados->email;
        $this->SMTPServer->PHPMailer->FromName = $dados->nome;
        $this->SMTPServer->PHPMailer->addAddress($dados->email);
        $this->SMTPServer->PHPMailer->addReplyTo($this->SMTPServer->SMTP_addReplyTo);
        $this->SMTPServer->PHPMailer->addBCC($this->SMTPServer->SMTP_addBCC);
        $this->SMTPServer->PHPMailer->Subject = $this->Input[Input::smtp_subject];
        $this->SMTPServer->PHPMailer->Body = $message;
        $this->SMTPServer->PHPMailer->isHTML(true);

        if (!$this->SMTPServer->PHPMailer->send()) {
            echo 'Não foi possivel enviar o relatório.';
            echo 'Mailer Error: ' . $this->SMTPServer->PHPMailer->ErrorInfo;
            exit;
        }
        echo 'Mensagem Enviada com sucesso';

    }

    private function SendMailNotice()
    {

        $this->DataBaseServer->Execute($this->getStringSQL());
        $dados = pg_fetch_object($this->DataBaseServer->Resource);

        $message = $this->SMTPServer->SMTP_Message[$this->Input[Input::smtp_message]];
        $message = str_replace('|mensagem', $dados->mensagem, $message);
        $message = utf8_decode($message);

        $this->SMTPServer->PHPMailer->isSMTP();
        $this->SMTPServer->PHPMailer->SMTPDebug = $this->SMTPServer->SMTP_Debug;
        $this->SMTPServer->PHPMailer->Debugoutput = $this->SMTPServer->SMTP_Debugoutput;
        $this->SMTPServer->PHPMailer->Host = $this->SMTPServer->SMTP_Host;
        $this->SMTPServer->PHPMailer->Port = $this->SMTPServer->SMTP_Port;
        $this->SMTPServer->PHPMailer->SMTPAuth = $this->SMTPServer->SMTP_Auth;
        $this->SMTPServer->PHPMailer->Username = $this->SMTPServer->SMTP_Username;
        $this->SMTPServer->PHPMailer->Password = $this->SMTPServer->SMTP_Password;
        $this->SMTPServer->PHPMailer->From = 'cadastro@portalanima.com.br';
        $this->SMTPServer->PHPMailer->FromName = 'Administração do condomínio';

        $destinatarios = explode(',', $dados->destinatarios);
        foreach($destinatarios as $endereco_destinatario)
            $this->SMTPServer->PHPMailer->addAddress($endereco_destinatario);

        $this->SMTPServer->PHPMailer->addReplyTo($this->SMTPServer->SMTP_addReplyTo);
        $this->SMTPServer->PHPMailer->addBCC($this->SMTPServer->SMTP_addBCC);
        $this->SMTPServer->PHPMailer->Subject = $dados->titulo;
        $this->SMTPServer->PHPMailer->Body = $message;
        $this->SMTPServer->PHPMailer->isHTML(true);

        //fb::dump('smtpserver', $this->SMTPServer);

        if (!$this->SMTPServer->PHPMailer->send()) {
            echo 'Não foi possivel enviar a mensagem.';
            echo 'Mailer Error: ' . $this->SMTPServer->PHPMailer->ErrorInfo;
            exit;
        }
        echo 'Mensagem Enviada com sucesso';

    }

    private function getStringSQL()
    {
        $sql = null;
        $criterios = null;
        try {

            $campos = '*';
            if (isset($this->Input[Input::campos]) && count($this->Input[Input::campos]) > 0) {
                $campos = $this->Input[Input::campos];;
            }

            $table = $this->Input[Input::origem];
            if ($this->Input[Input::origem] == null)
                throw new IOException('Nenhuma tabela foi informada');

            if (isset($this->Input[Input::retorno]) && count($this->Input[Input::retorno]) > 0)
                $table .= ' ' . $this->Input[Input::retorno];

            if (isset($this->Input[Input::where]) && $this->Input[Input::where] != null) {
                $camposwhere = explode('|', $this->Input[Input::where]);
                foreach ($camposwhere as $item) {
                    $campo = explode('/', $item);
                    if ($criterios != null)
                        $criterios .= (isset($this->Input[Input::operador_where]) && $this->Input[Input::operador_where] != null) ? $this->Input[Input::operador_where] : ' and ';

                    $_criterios = $campo[0] . " = '" . $campo[1] . "'";
                    if ($campo[1] == null)
                        $_criterios = $campo[0] . "'";

                    if (isset($this->Input[Input::operator_field]) && $this->Input[Input::operator_field] != null && $campo[1] != '') {
                        $_criterios = $campo[0] . $this->Input[Input::operator_field] . "'" . $campo[1] . "%'";
                    }
                    $criterios .= $_criterios;
                }
                $criterios = ' WHERE ' . $criterios;
            }

            //fb::dump('exp', $_REQUEST['whereexp']);
            $whereexp = (!isset($this->Input[Input::whereexp])) ? null : 'WHERE  ' . $_REQUEST['whereexp'];
            $groupby = (!isset($this->Input[Input::groupby])) ? null : 'GROUP BY ' . $this->Input[Input::groupby];
            $orderby = (!isset($this->Input[Input::orderby])) ? null : 'ORDER BY ' . $this->Input[Input::orderby];
            $having = (!isset($this->Input[Input::having])) ? null : 'HAVING ' . $this->Input[Input::having];
            $limit = (!isset($this->Input[Input::limit])) ? null : 'LIMIT ' . $this->Input[Input::limit];

            /*SET CLIENT_ENCODING TO 'unicode';*/
            $sql = <<<SQL
        SELECT $campos
           FROM $table
           $criterios
           $whereexp
           $groupby
           $orderby
           $having
           $limit;
SQL;

        } catch (IOException $Error) {
            fb::dump('Erro na montagem do string SQL', $Error);
        } catch (Exception $Error) {
            fb::dump('Erro na montagem do string SQL', $Error);
        }
        return $sql;
    }

    private function getTables()
    {

        session_start();
        $rfdb = new ReflectionDB($this->DataBaseServer);
        $rfdb->Start();
        $_SESSION['reflectionTB'] = $rfdb->Tables;

    }

    private function getURLData()
    {
        $url = $this->Input[Input::origem] . 'a=' . $this->Input['a'] . '&b=' . $this->Input['b'] . '&c=' . $this->Input['c'];
        $result = file_get_contents($url);
        echo($result);

    }

    private function parseAccent($string, $space = true)
    {
        $acentos = array('ã', 'á', 'à', 'ã', 'â', 'é', 'ê', 'í', 'ó', 'ô', 'õ', 'ú', 'ü', 'ç', 'Ã', 'Á', 'À', 'Ã', 'Â', 'É', 'Ê', 'Í', 'Ó', 'Ô', 'Õ', 'Ú', 'Ü', 'Ç', '.');
        $correcao = array('a', 'a', 'a', 'a', 'a', 'e', 'e', 'i', 'o', 'o', 'o', 'u', 'u', 'c', 'a', 'a', 'a', 'a', 'a', 'e', 'e', 'i', 'o', 'o', 'o', 'u', 'u', 'c', '');
        if ($space == true) {
            $acentos[] = ' ';
            $correcao[] = '_';
        }
        return str_replace($acentos, $correcao, $string);
    }

}