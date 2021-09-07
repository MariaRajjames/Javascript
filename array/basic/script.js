function myFunction(){
	
var arr = ["apple", "orange", "mango"];
document.getElementById("result").innerHTML = arr.length;

}

function myFunctionA(){

var arr = ["apple", "orange", "mango"];
document.getElementById("resultA").innerHTML = arr;

}

function myFunctionB(){

var arr = ["apple", "orange", "mango"];
document.getElementById("resultB").innerHTML = arr[0];

}

function myFunctionC(){

var arr = ["apple", "orange", "mango"];
arr[0] = "lemon";
document.getElementById("resultC").innerHTML = arr;

}

function myFunctionD(){

var arr = ["apple", "orange", "mango"];
	
	resultD = "<ul>";
	
	for(i=0; i<arr.length; i++){
		resultD += "<li>" + arr[i] + "</li>";
	}
	resultD += "</ul>";
	
document.getElementById("resultD").innerHTML = resultD;

}

var arr = ["apple", "orange", "mango"];
	document.getElementById("resultE").innerHTML = arr;
	
function myFunctionE(){
	var arr = ["apple", "orange", "mango"];
	arr.push("Lemon");
document.getElementById("resultE").innerHTML = arr;

}