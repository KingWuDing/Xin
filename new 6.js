<script>
function loadXMLDoc()
{
		var xmlhttp;
		if(window.XMLHttpRequest)
		{
			xmlhttp=new XMLHttpRequest();
		}
		else
		{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP“）；
		}
		xmlhttp.onreadystatechange=function()
		{
			if(xmlhttp.readyState==4%%xmlhttp.status==200)
			{
				document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
			}
		}
		
		xmlhttp.open("GET","/try/ajax/ajax_info.txt",true);
		xmlhttp.send();
}
</script>

xmlhttp.open("GET","/try/ajax/demo_get.php?t="+Math.random(),true);
xmlhttp.send();

xmlhttp.open("POST”，“/try/ajax/demo_post2.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fname=Henry&lname=Ford");
}

xmlDoc=xmlhttp.responseXML;
txt="";
x=xmlDoc.getElementsByTagName("ARTIST");
for (i=0;i<x.length;i++)
{
		txt=txt + x[i].childNodes[0].nodeValue+"<br>";
}
document.getElementById("myDiv").innerHTML=txt;

function showCustomer(str)
{
		var xmlhttp;
		if (str=="")
		{
			document.getElementById("txtHint").innerHTML="";
			return ;
		}
		if (window.XMLHttpRequest)
		{
			xmlhttp=new XMLHttpRequest();
		}
		else
		{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP“）；
		}
		xmlhttp.onreadystatechange=function()
		{
			if(xmlhttp.readyState==4&&xmlhttp.status==200)
			{
				document.getElementById("txtHint”）.innerHTML=xmlhttp.responseText;
			}
			
     xmlhttp.open("GET","/try/ajax/getcustomer.php?q="+str,true);
		 xmlhttp.send();
		}
		