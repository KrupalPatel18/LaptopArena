<?php
$showAlert = false;
$showError = false;
if($_SERVER["REQUEST_METHOD"]=="POST"){
	
	include 'utils/_dbconnect.php';
	    $username=$_POST["username"];
		$password=$_POST["password"];
        $confirm_password=$_POST["confirm_password"];
        $admin=$_POST["admin"];
            if($admin=="fkf"){
                $admin=true;
            }
            else{
                $admin=false;
            }
            $exists=false;
            $sql1="Select * from signup where username='$username'";
            $result = mysqli_query($conn,$sql1);
            if(mysqli_num_rows($result)>0){
                $exists=true;
            }
			if(($password == $confirm_password) && $exists==false){
				$sql= "INSERT INTO `signup` (`username`, `password`, `dt`,`admin`) VALUES ('$username', '$password', current_timestamp(),'$admin')";
				$result = mysqli_query($conn,$sql);
				if($result){
					$showAlert=true;
				}
			}
			else{
				$showError = "Passwords do not match or username already exists";
			}
}
	
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LaptopArena | Desktop</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <!-- Font apis -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet">

    <!-- bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/category.css">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossorigin="anonymous"></script>
		
		
		<!----------------------Sign up link----------------->
		
			<link rel ="stylesheet" href = "C:\Users\Fenny\Desktop\LaptopArena 2\LaptopArena\css\signup.css">
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700">
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
			<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
			<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

		
</head>

<body>
    <?php
        include 'header.php';
    ?>

<?php
		if($showAlert){
		echo '
        <div class="alert alert-success" role="alert"><strong>SUCCESSFULL!</strong> Your account is created. </div>';
		}

		if($showError){
		echo '
		<div class="alert alert-danger" role="alert">
		  <strong>ERROR!</strong> '.$showError.'</div>';
		
		}
		
?>
<!--------------signup form--------->
<div class = "container">
<div class="signup-form">
    <form action="/LaptopArena/signup.php" method="post">

	
		<h2 class="text-center">Create an Account</h2>
		<p class="text-center" class="hint-text">Sign up with your social media account or email address</p>
		<div class="social-btn text-center">
			<a href="#" class="btn btn-primary btn-lg"><i class="fa fa-facebook"></i> Facebook</a>
			<a href="#" class="btn btn-info btn-lg"><i class="fa fa-twitter"></i> Twitter</a>
			<a href="#" class="btn btn-danger btn-lg"><i class="fa fa-google"></i> Google</a>
		</div>
		<div class="or-seperator" ><b><h4 class="text-center">OR</b></h4></div>
        <div class="form-group ">
		
        	<input type="text" class="form-control input-lg" name="username" placeholder="Username" required="required">
        
		</div>

		<div class="form-group ">
            <input type="password" class="form-control input-lg" name="password" placeholder="Password" required="required">
        </div>
		<div class="form-group">
            <input type="password" class="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required="required">
        </div>
        <div class="form-group">
            <input type="text" class="form-control input-lg" name="admin" placeholder="Enter key to sign up as admin">
        </div>  
        <div class="form-group ">
            <button type="submit" class="btn btn-primary btn-lg btn-block signup-btn">Sign Up</button>
        </div>
    </form>
    <div class="text-center">Already have an account? <a href="/LaptopArena/login.php">Login here</a></div>
</div>
</div>
<?php
    include 'footer.php';
?>
</body>
</html>
    