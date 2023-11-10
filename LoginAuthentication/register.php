<?php

    require 'config.php';
    if(isset($_POST['submit'])){
        $email = $_POST['email'];
        $password = $_POST['pass'];
        $confirmpassword = $_POST['confirmpass'];
        $duplicate = mysqli_query($con,"SELECT * FROM users WHERE email = '$email' ");
        if(mysqli_num_rows($duplicate)>0){
            echo "<script> alert('User already exist');</script>";
        }
        
        else {
            if($password == $confirmpassword){
                $query = "INSERT INTO users VALUES('$email', '$password')";
                
                mysqli_query($con, $query);
                
                echo "<script> alert('Registration successful') </script>";
            }
            else{
                echo "<script> alert('Password does not match')</script>";
            }
        }
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CodeAlpha-Login Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="wrapper">
   <div class="title">SignUp Form</div>
    <form action="#" method="post">
       <div class="field">
           <input type="email" name="email" required>
           <label for="email">Enter Email</label>
       </div>
        <div class="field">
           <input type="password" name="pass" required>
           <label for="pass">Enter Password</label>
       </div>
         <div class="field">
           <input type="password" name="confirmpass" required>
           <label for="confirmpass">Confirm Password</label>
       </div>
       <div class="field">
           <input type="submit" name="submit"
 value="SignUp">       </div>
       <div class="signup-link">Already have an account? <a href="login.php">Sign in</a></div>
        
    </form>
    </div>
</body>
</html>