<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>tester</title>
</head>

<body>
  
      
<?php
  if(!isset($_POST['submit'])){
?>

  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
  Enter your age: <input name="age" size="2" />
  <input type="submit" name="submit" value="Go">
  
  <?php
  } else {
  //Grab the text we input
  $input = $_POST['age'];
  if($input < 27){
  echo "You are young";
  } elseif($input == 27){
  echo "The perfect age";
  } elseif($input > 27){
  echo "You are old!";
  }
  }
  ?>
</body>
  </html>
</body>

</html>
