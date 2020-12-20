<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LaptopArena | Item</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <!-- Font apis -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic  .com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet">

    <!-- bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/itemDetails.css">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossorigin="anonymous"></script>
</head>

<body>
   <?php
  include 'header.php';
  require 'utils/_dbconnect.php';
    ?>


    <?php
    $product_id=1;
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        // collect value of input field
        $product_id= $_GET["product_id"];
    }
    
    $sql = "SELECT * FROM product WHERE Product_id='$product_id'";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
      while(($row = $result->fetch_assoc())) {
        echo ' <div class="container">
        <div class="row itemDetails">
            <div class="col-md-6 col-sm-12 leftSection">
                <img src="img/items/'.$row["Img_Link"].'" alt="" class="img-fluid">
            
            </div>
            <div class="col-md-6 col-sm-12 rightSection">
                <h3 class="bold mt-5">'.$row["Name"].'</h3>
                <p>'.$row["Description"].'</p>
                '.$row["Specification"].'
                <h3 class="bold">'.$row["Price"].'</h3>
                <div class="buttons">
               <button class="btnBuyNow"> <a href="'.$row["Buy_Link"].'" target="_blank" style="text-decoration: none; color: #FFF;">Buy Now</a></button>
                    <button class="btnAddToWishlist">Add to Wishlist</button>
                </div>
                
            </div>
        </div>
    </div>';
    
      }
    }
    ?>



    <?php
        include 'footer.php';
    ?>
</body>

</html>