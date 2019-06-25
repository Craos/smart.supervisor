<?php session_start();
/**
 * Created by PhpStorm.
 * User: Oberdan
 * Date: 07/08/14
 * Time: 15:25
 */
?>
<html>
<head>
    <script>

    function delete_cookie( name ) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    function limpezadecookie() {
        sessionStorage.clear();
    }
    </script>
</head>
<body onload="limpezadecookie();">

</body>
</html>
<?php
session_destroy();
header('location: ../../');
?>