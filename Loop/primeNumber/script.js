/*function myValue(){
	var num;
	num = document.getElementById("number").value;
}


function checkForPrime() {
	var i;
	var result ="";
	var flag = true;
	
	if (num == 1) {
		flag = false;
	} else {
		for(i = 2; i < num-1; i++) {
			if (num % i == 0) {
			flag = false;
			break;
					}
			}
	}
	
}*/


var number;
var result = "";

function myInput(){
	number = Number(document.getElementById("number").value);
}myInput();

function myFunction(){
	var i;
	myInput();
for (var i = 2; i <= number; i++) {
    var flag = 0;

    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        result += "Prime Number is " + i + "<br>";
    }else{
		result += "Ordinsry Number";
	}
}
	document.getElementById("result").innerHTML = result;
}

function myFresh(){
	document.getElementById("number").value ="";
	document.getElementById("result").innerHTML ="";
}
