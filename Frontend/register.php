<?php

include 'connect.php';

if(isset($_POST['signUp'])){
    $Username=$_POST['Username'];
    $Address=$_POST['Address'];
    $Email=$_POST['Email'];
    $ContactNumber=$_POST['ContactNumber'];
    $Password=$_POST['Password'];
    $Password=md5($Password);
    $ConfirmPassword=$_POST['ConfirmPassword'];

    $checkEmail="SELECT * From users where emails='$Email' ";
    $result=$conn->query($checkEmail);
    if($result->num_rows>0){
        echo "Email Address Already Exists !";
    }
    else{
        $insertQuery="INERT INTO users(Username,Address,Email,ContactNumber,Password,ConfirmPassword)
                        VALUES ('$Username','$Address'',$Email','$ContactNumber','$Password','$ConfirmPassword') "
            if($conn->query($insertQuery)==TRUE){
                header("location: login.php");
            }
            else{
                echo "Error:" .$conn->error;
            }
    }
   
}

if(isset($_POST['signIn'])){
    $Email=$_POST['Email'];
    $Password=$_POST['Password'];
    $Password=md5($Password);

    $sql="SELECT * FROM users WHERE Email='$Email' and Password='$Password' "
    $result=$conn->query($sql);
    if($result->num_rows>0){
        session_start();
        $row=$result->fetch_assoc();
        $_SESSION['Email']=$row['Email'];
        header("Location: admin_dashboard.php");
        exit();
    }
    else{
        echo "Not Found, Incorrect Email or Password"
    }
}

?>