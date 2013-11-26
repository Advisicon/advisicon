<%@ Import Namespace="System.Data" %>
<%@ Import Namespace="System.Data.SqlClient" %>
<html>
<head>
<script runat="server">

	sub Page_Load
		dim dbconn,sql,dbcomm,
		dim dbread AS SqlDataReader
		
		dbconn.ConnectionString = "Data Source=ADVISICON-COLO;Initial Catalog=AdvisiconCourses;User ID=webuser; Password=webuser; encrypt=true;"
		dbconn.Open()
		sql="SELECT * FROM dbo.Courses"
		dbcomm=New SqlCommand(sql,dbconn)
		dbread=dbcomm.ExecuteReader()
		customers.DataSource=dbread
		customers.DataBind()
		dbread.Close()
		dbconn.Close() 
	end sub

</script>
</head>




	<body>

		<form runat="server">
			<asp:Repeater ID="customers" runat="server">
				<HeaderTemplate>
					<table border="1" width="100%">
						<tr bgcolor="aqua">
							<th>CourseID</th>
							<th>CourseName</th>
							<th>CourseDesc</th>
							<th>CourseAbbr</th>
						</tr>
					
				</HeaderTemplate>
				
				<ItemTemplate>
					
						<tr bgcolor="#f0f0f0">
							<td><%#Container.DataItem("CourseID")%></td>
							<td><%#Container.DataItem("CourseName")%></td>
							<td><%#Container.DataItem("CourseDesc")%></td>
							<td><%#Container.DataItem("CourseAbbr")%></td>
						</tr>
									
				</ItemTemplate>
				
				<FooterTemplate>
					</table>
				</FooterTemplate>			
			
			
			</asp:Repeater>
		</form>
 

	</body>

</html>
