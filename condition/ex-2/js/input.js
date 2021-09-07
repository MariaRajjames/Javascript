var x,y;
	function getValues(){
		
		x = Number(document.getElementById("first").value);
		y = Number(document.getElementById("second").value);
	}
	
function add() {
	getValues();
	z = x+y;
	document.getElementById("answer").innerHTML = "Correct Answer is: " + z;
}
function sub() {
	getValues();
	z = x-y;
	document.getElementById("answer").innerHTML = "Correct Answer is: " + z;
}

function mul() {
	getValues();
	z = x*y;
	document.getElementById("answer").innerHTML = "Correct Answer is: " + z;
}

function divi() {
	getValues();
	z = x/y;
	document.getElementById("answer").innerHTML = "Correct Answer is: " + z;
}
