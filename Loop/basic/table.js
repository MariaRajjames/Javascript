var a ="";
var b ="";
var i = 1;
var c = 2;

function myFunction(){
for(var i=1; i<11; i+=1){
	a +="<br>2 x "+ i;
}

document.getElementById("demo").innerHTML= a;

for(var c=2; c<22; c+=2){
	b +="<br>= "+ c;
}

document.getElementById("demo1").innerHTML= b;
}

var d ="";
var e ="";
var f = 1;
var g = 3;

function myClick(){
for(var f=1; f<11; f+=1){
	d +="<br>3 x "+ f;
}

document.getElementById("demo2").innerHTML= d;

for(var g=3; g<33; g+=3){
	e +="<br>= "+ g;
}

document.getElementById("demo3").innerHTML= e;
}