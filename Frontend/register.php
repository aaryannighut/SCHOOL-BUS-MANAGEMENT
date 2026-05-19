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

<<<<<<< HEAD
    $checkEmail="SELECT * From users where emails='$Email' ";
=======
    $checkEmail="SELECT * From users where Email='$Email' ";
>>>>>>> e7e5ebe (Add readme file and Remove unwanted files)
    $result=$conn->query($checkEmail);
    if($result->num_rows>0){
        echo "Email Address Already Exists !";
    }
    else{
<<<<<<< HEAD
        $insertQuery="INERT INTO users(Username,Address,Email,ContactNumber,Password,ConfirmPassword)
                        VALUES ('$Username','$Address'',$Email','$ContactNumber','$Password','$ConfirmPassword') "
=======
        $insertQuery="INSERT INTO users(Username,Address,Email,ContactNumber,Password,ConfirmPassword)
                        VALUES ('$Username','$Address','$Email','$ContactNumber','$Password','$ConfirmPassword') ";
>>>>>>> e7e5ebe (Add readme file and Remove unwanted files)
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

<<<<<<< HEAD
    $sql="SELECT * FROM users WHERE Email='$Email' and Password='$Password' "
=======
    $sql="SELECT * FROM users WHERE Email='$Email' and Password='$Password' ";
>>>>>>> e7e5ebe (Add readme file and Remove unwanted files)
    $result=$conn->query($sql);
    if($result->num_rows>0){
        session_start();
        $row=$result->fetch_assoc();
        $_SESSION['Email']=$row['Email'];
        header("Location: admin_dashboard.php");
        exit();
    }
    else{
<<<<<<< HEAD
        echo "Not Found, Incorrect Email or Password"
=======
        echo "Not Found, Incorrect Email or Password";
>>>>>>> e7e5ebe (Add readme file and Remove unwanted files)
    }
}

?>