<?php 

$host = "localhost";
$username = "root";
$password = "";
$database = "loginsystem";

$con = mysqli_connect($host, $username,$password, $database);

if(mysqli_connect_errno()){
    die("Failed to connect ".mysqli_connect_error());
}

?>
