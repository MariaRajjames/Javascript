/* random value */
var a;
var image = document.getElementById("images"); 

function myFunction(){
	a = document.getElementById("demo").innerHTML = Math.round(Math.random()*11); 
	console.log(a);
}
myFunction();

/* button disable */
var b;
var count = 1;
function myLimit(){
	b = document.getElementById("TL").innerHTML = count++;
	
	if(count == 10){
		document.getElementById("limit").disabled = true;
		
	}else{
		document.getElementById("limit").disabled = false;
	}
}
myLimit();

/* Remaining Attempt */
var num;
function myValue(){
	num = document.getElementById("output1").innerHTML = (11 - count);
}
myValue();

var c;

/* Final Answer */
var s = 1;
function myInput(){ 
	c = Number(document.getElementById("input").value);
	
	if(a==c){
		document.getElementById("output").innerHTML = "Your Guess is Correct " + c + ". Remaining Attempt is " + num + ". and you find the value in " + b + " Attempt.";
		image.src = "images/correct.jpg";
		document.getElementById("output2").innerHTML = s++;
		
		
	}else{
		document.getElementById("output").innerHTML = "Your Guess is wrong " + c + ". Remaining Attempt is " + num + ".";
		image.src = "images/wrong.jpg";	
		document.getElementById("output2").innerHTML = s++;
	}
	myFunction();
	myLimit();
	myValue();
	document.getElementById("input").value = "";
	document.getElementById("output1").innerHTML = "";
	document.getElementById("TL").innerHTML = "";
	document.getElementById("output2").innerHTML = "";
}


