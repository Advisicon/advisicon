<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Test to find file names</title>
</head>

<body>
<%@LANGUAGE=VBSCRIPT%>
										<%
										dim fs, fo, x
										set fs=Server.CreateObject("Scripting.FileSystemObject")
										set fo=fs.GetFolder("C:\Web Bin\advisicon.com\news_archive\")
										
										for each x in fo.files
											response.write(x.value & "<br />")
										next
										
										set fo=nothing
										set fs=nothing
										%>


</body>

</html>
