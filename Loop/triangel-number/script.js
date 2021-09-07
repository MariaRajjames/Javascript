var a,b,c;
var d = 6;

/* Model - 1 */

function myFunction(){
	var result = "";
	
	for(a=1; a<=5; a++){
		result += "<br>";
		for(b=0; b<d-a; b++){
			result += (d-a);
		}
	}
	document.getElementById("result").innerHTML = result;
}

/* Model - 2 */

function myFunctionA(){
	var resultA = "";
	
	for(a=1; a<=5; a++){
		resultA += "<br>";
		for(b=1; b<=a; b++){
			resultA += (d-a);
		}
	}
	document.getElementById("resultA").innerHTML = resultA;
}

/* Model - 3 */

function myFunctionB(){
	var resultB = "";
	
	for(a=1; a<=5; a++){
		resultB += "<br>";
		for(b=1; b<=d-a; b++){
			resultB += a;
		}
	}
	document.getElementById("resultB").innerHTML = resultB;
}

/* Model - 4 */

function myFunctionC(){
	var resultC = "";
	
	for(a=1; a<=5; a++){
		resultC += "<br>";
		for(b=1; b<=a; b++){
			resultC += a;
		}
	}
	document.getElementById("resultC").innerHTML = resultC;
}

/* Model - 5 */

function myFunctionD(){
	var resultD = "";
	
	for(a=1; a<=5; a++){
		resultD += "<br>";
		for(b=1; b<=d-a; b++){
			resultD += b;
		}
	}
	document.getElementById("resultD").innerHTML = resultD;
}

/* Model - 6 */

function myFunctionE(){
	var resultE = "";
	var e = 7;
	
	for(a=1; a<=5; a++){
		resultE += "<br>";
		for(b=1; b<=d-a; b++){
			resultE += (e-a)-b;
		}
	}
	document.getElementById("resultE").innerHTML = resultE;
}
