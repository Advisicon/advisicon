<%
 response.expires=-1
 
 strConnection = "Provider=SQLOLEDB;Server=ADVISICON-COLO;Database=AdvisiconCourses;User Id=webuser; password=webuser;encrypt=true" 

 set conn=Server.CreateObject("ADODB.Connection")
 
 conn.Open strConnection 
 
 set rs=Server.CreateObject("ADODB.recordset")
 sql="SELECT dbo.Courses.CourseID, dbo.Courses.CourseName AS Title, dbo.Courses.CourseDesc AS Description FROM dbo.Courses WHERE dbo.Courses.CourseID="
 sql=sql & "'" & request.querystring("q") & "'"
 
 rs.Open sql,conn, 3,3

 response.write("<table>")
 do until rs.EOF
   for each x in rs.Fields
     response.write("<tr><td valign='top' width='20%'><b>" & x.name & "</b></td>")
     response.write("<td>" & x.value & "</td></tr>")
   next
   rs.MoveNext
loop
response.write("</table>")
%>