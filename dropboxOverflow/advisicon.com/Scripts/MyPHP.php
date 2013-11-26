<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>PHP Page Test</title>
</head>

<body>

<?php include("Head.php"); ?>
<br />
<h1>
<?php
echo "Hello there from Mike, world";
?>
</h1>

<br />
<form action="welcome.php" method="post">

Username: <input type="text" name="u_name" /><br />
Password: <input type="password" name="u_password" /><br />
Password: <input type="password" name="u_password" /><br />
First name: <input type="text" name="u_firstname" /><br />
Last name: <input type="text" name="u_lastname" /><br />
Email: <input type="text" name="u_email" /><br />
<input name="submit" type="submit" value="Submit" />

</form>
</body>
</html>
