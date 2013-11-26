<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ Page Language="VB" %>
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<script runat="server">
Sub Page_Load
link1.HRef="http://www.advisicon.com"
End Sub
</script>

<title>ASP.NET First Page</title>
</head>

<body bgcolor="white">

	<p><%= "ASP.NET First Page" %></p>
	<p><%Response.Write(now())%></p>

	<form runat="Server">
		<a id="link1" runat="server">Visit Advisicon</a>
		<asp:Calendar runat="server" id="Calendar1"></asp:Calendar>
	</form>
</body>

</html>
