<?php

/*

HTML5/FLASH MODE

(MODE will detected on client side automaticaly. Working mode will passed to server as GET param "mode")

response format

if upload was good, you need to specify state=true and name - will passed in form.send() as serverName param
{state: 'true', name: 'filename'}

*/

if (@$_REQUEST["mode"] == "html5" || @$_REQUEST["mode"] == "flash") {
    $filename = $_FILES["file"]["name"];
    // move_uploaded_file($_FILES["file"]["tmp_name"],"uploaded/".$filename);
    print_r("{state: true, name:'" . str_replace("'", "\\'", $filename) . "'}");
}

/*

HTML4 MODE

response format:

to cancel uploading
{state: 'cancelled'}

if upload was good, you need to specify state=true, name - will passed in form.send() as serverName param, size - filesize to update in list
{state: 'true', name: 'filename', size: 1234}

*/

if (@$_REQUEST["mode"] == "html4") {
    if (@$_REQUEST["action"] == "cancel") {
        print_r("{state:'cancelled'}");
    } else {
        $filename = $_FILES["file"]["name"];
        // move_uploaded_file($_FILES["file"]["tmp_name"], "uploaded/".$filename);
        print_r("{state: true, name:'" . str_replace("'", "\\'", $filename) . "', size:" . $_FILES["file"]["size"] /*filesize("uploaded/".$filename)*/ . "}");
    }
}


?>
