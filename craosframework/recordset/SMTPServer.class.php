<?php
/**
 * Created by PhpStorm.
 * User: Oberdan
 * Date: 09/08/14
 * Time: 16:50
 */



class SMTP_Server {

    /**
     * @var int Mode de depuracao
     */
    public $SMTP_Debug;

    /**
     * @var string tipo de saida da mensagem de depuracao
     */
    public $SMTP_Debugoutput;

    /**
     * @var string endereco do servidor SMTP
     */
    public $SMTP_Host;

    /**
     * @var int Numero da porta de comunicacao SMTP
     */
    public $SMTP_Port;

    /**
     * @var bool Se verdadeiro o sistema ira tentar autenticar o usuario antes do envio
     */
    public $SMTP_Auth;

    /**
     * @var string Nome do usuario para conexao
     */
    public $SMTP_Username;

    /**
     * @var string senha para conexao
     */
    public $SMTP_Password;

    /**
     * @var bool Se verdadeiro a mensagem sera enviada em html
     */
    public $SMTP_isHTML;

    /**
     * @var Endereco para ser respondido
     */
    public $SMTP_addReplyTo;

    /**
     * @var Endereco para receber copia oculta
     */
    public $SMTP_addBCC;

    /**
     * @var PHPMailer Objeto que envia mensagens via e-mail
     */
    public $PHPMailer;

    /**
     * @var array Contem os tipos de mensagems a ser enviada
     */
    public $SMTP_Message = Array();

    public function __construct() {

        $this->PHPMailer = new PHPMailer();

    }

} 