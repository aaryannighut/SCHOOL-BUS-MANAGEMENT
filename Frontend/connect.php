<?php

<<<<<<< HEAD
$host="localhost";
$user="root";
$pass="";
$db="login"
$conn=new mysqli($host,$user,$pass,$db);
if($conn->connect_error){
    echo "Failed to connect DB".$conn->connect_error;
=======
$host = "localhost:3307";
$user = "root";
$pass = "";
$db = "login";
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    echo "Failed to connect DB" . $conn->connect_error;
>>>>>>> e7e5ebe (Add readme file and Remove unwanted files)
}
?>