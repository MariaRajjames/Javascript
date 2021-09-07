/*

/* while increment */
var text = "";
var a = 0;

while(a < 5){
	text += "<br>the Number is" + a;
	a++;
}
document.getElementById("demo").innerHTML = text;

/* for increment */

var b ="";
var i = 0;

for(var i=0; i<5; i++){
	b +="<br>The for loop number" + i;
}
document.getElementById("demo1").innerHTML = b;

/* while loop decrement */

var c = "";
var i = 5;

while(i > 0){
	c +="<br>the while number is" + i;
	i--;
}
document.getElementById("demo2").innerHTML = c;

/* for decrement */

var d ="";
var i = 5;

for(var i=5; i>0; i--){
	d +="<br>The for loop number" + i;
}
document.getElementById("demo3").innerHTML = d;

/* do while increment*/

var e = "";
var i = 0;

do {
	e += "<br>do while number" + i;
	i++;
} while(i<5);
document.getElementById("demo4").innerHTML = e;

/* do while decrement */
var f = "";
var i = 5;

do {
	f += "<br>do while number" + i;
	i--;
} while(i>0);
document.getElementById("demo5").innerHTML = f;

