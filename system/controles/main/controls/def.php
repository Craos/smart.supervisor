<?php
/**
 * Created by PhpStorm.
 * User: oberd
 * Date: 07/02/2017
 * Time: 11:45
 */

/* PostgreSQL */
define('PGSERVER', '127.0.0.1');
define('PGPORT', '5432');
define('PGDATABASE', 'smt');
define('PGUSERAME', 'smart_supervisor');
define('PGPASSWORD', 'yu45thn@');
define('PGCASE', false);


/* SMTP Locaweb */
define('SMTPDEBUG', 3);
define('SMTPDEBUGOUTPUT', 'html');
define('SMTPHOST', 'smtplw.com.br');
define('SMTPSECURE', 'tls');
define('SMTPPORT', 587);
define('SMTPAUTH', true);
define('SMTPUSERNAME', 'admanima');
define('SMTPPASSWORD', 'xXXdIHeU3580');
define('SMTPISHTML', true);
define('SMTPADDREPLYTO', 'contato@portalanima.com.br');
define('SMTPFROMNAME', 'Administração do condomínio');

/* Correios */
define('CORREIOSEMAIL', 'contato@portalanima.com.br');
define('CORREIOSNAME', 'Administração do condomínio');
define('CORREIOSASSUNTO', 'Comunicado Ânima Clube');