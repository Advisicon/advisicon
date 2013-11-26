<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Welcome PHP User</title>
</head>

<body>
Welcome <?php echo $_POST["u_firstname"]; ?>!<br />
You're email is: <?php echo $_POST["u_email"]; ?>.
</body>

</html>
