
var a,b,c;

function myFunction(){
	a = document.getElementById("demo").innerHTML = Math.round(Math.random()*3);
}
myFunction();

var count = 0;
function myClick(){
	b = document.getElementById("click").innerHTML = count++;
	
	if(count == 11){
		document.getElementById("choice").disabled = true;
	}else{
		document.getElementById("choice").disabled = false;
	}
}
myClick();


function myInput(){
	c = Number(document.getElementById("input").value);
	
	if(a == c){
		document.getElementById("output").innerHTML = "Your Guess is correct. Find Your Answer in the "+ (b+1) + " Attempt";
	}else{
		document.getElementById("output").innerHTML = "wrong";
	}
	myFunction();
	myClick();
	myEnd();
	document.getElementById("input").value = "";
	document.getElementById("click").innerHTML = "";
}

function myEnd(){
		
	if(count == 11){
		document.getElementById("result").innerHTML = "Game Over";
	}else{
		document.getElementById("result").innerHTML = "All The Best";
	}
}


function myfresh(){
	count = "1";
	document.getElementById("input").value = "";
	document.getElementById("output").innerHTML ="0";
}
