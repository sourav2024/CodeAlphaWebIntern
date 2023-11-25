<?php 
 
    require 'config.php';
  
    if(isset($_POST["submit"])){
        $email = $_POST["email"];
        $password = $_POST["pass"];
        $confirmpassword = $_POST["confirmpass"];
        
        $result = mysqli_query($conn, "SELECT * FROM login WHERE email = '$email' ");
        $row = mysqli_fetch_assoc($result);
        if(mysqli_num_rows($result)>0){
            if($password==$confirmpassword){
                if($password == $row["pass"]){
                    header("Location: home.php");
                }
                else{
                    echo "<script> alert('Wrong Password' ) </script>";
                }
            }
            else{
                echo "<script>alert('Password does not match')</script>";
            }
        }
        else{
            echo "<script> alert('User does not exist')</script>";
        }
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CodeAlpha-Login Page</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
   <div class="wrapper">
   <div class="title">Event Planner </div>
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
 value="login">       </div>
       <div class="signup-link">Not a member? <a href="register.php">Sign up</a></div>
        
    </form>
    </div>
</body>
</html>