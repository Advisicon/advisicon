<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>ASP / Database Connection Test</title>
</head>

<body>



<%@LANGUAGE=VBSCRIPT%>
<%

Dim strConnection, conn, rs, strSQL 

 
strConnection = "Provider=SQLOLEDB;Server=ADVISICON-COLO;Database=AdvisiconCourses;User Id=webuser; password=webuser;encrypt=true" 



Set conn = Server.CreateObject("ADODB.Connection")

conn.Open strConnection


Set rs = Server.CreateObject("ADODB.recordset")
strSQL = "SELECT CourseName FROM dbo.Courses"
rs.open strSQL, conn, 3,3

rs.MoveFirst
WHILE NOT rs.EOF
     Response.Write(rs("CourseName") & "<br/>") 
rs.MoveNext
WEND

rs.Close
Set rs = Nothing

conn.Close
Set conn = Nothing


%>

Eat Pizza
				

</body>

</html>
