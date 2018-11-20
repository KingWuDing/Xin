<script>
(100+23).toString();

<p> typeof 操作符返回变量或表达式的类型。</p>
<button onclick="myFunction()"> 点我</button>
<p id="demo"> </p>

<script>

function myFunction(){
	var y="John";
	var x= + y;
	document.getElementById("demo").innerHTML=
	typeof x +"<br>" + x;
}
</script>

<!DCOTYPE>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程（runoob.com)</title>
</head>

<body>
<button onclick="myFunction()"> 点我 </button>
<p id="demo"> </p>
<script>
function myFunction(){
	var str = "Visit Runoob";
	var n= str.search(/Runoob/i);
	document.getElementById("demo").innerHTML=n;
}
</script>
</body>

var str = document.getElementById("demo").innerHTML;
var txt = str. replace(/microsoft/i,"Runoob");

try {
	addlert("Welcome guest!");
}

catch(err) {
	txt="本页有一个错误。\n\n";
	txt+="错误描述：" + err.message + "\n\n";
	txt+="点击确定继续。\n\n";
	alert(txt);
}

console.log();
console.log();

<p id="demo"></p>
<script>
var x=0.1;
var x=0.2;
var z=(x *10+y*10)/10;
document.getElementById("demo").innerHTML=z;
</script>

<form name="myForm" action="demo-form.php" onsubmit="return validateForm()" method="post">
姓:<input type="submit" value="提交">
<input type="submit" value="提交">
</form>

x=findMax(1,123,500,115,115,44);

function findMax(){
	var i,max=arguments[0];
	if (arguments.length<2 ) return max;
	for(i=0; i<arguments.length;i++){
	if (arguments[i]>max){
		max=arguments[i];
	}
	}
	return max;
}

function myFunction(a,b){
	return a*b;
}
window.myFunction(10,2);

<p>闭包可以访问函数上一层作用域：函数本身可以当作自变量或因变量；</p>

<script>
document.getElementById("p2").style.color="blue";

<script>
document.getElementById("myBtn").addEventListener("click",function(){
		alert("Hello World");
});
</script>

addEventListner(event , function, useCapture );

var myNodeList= document.querySelectAll ("p");

