
var number;
var numbers;
var result = "";

function myFunction(){
	number = Number(document.getElementById("numbers").value);
	numbers = Number(document.getElementById("number").value);
	
	for (var i=1; i <= number; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
		result += i + " FizzBuzz" + "<br>";
		//document.getElementById("result").innerHTML = "Divided by 3 & 5";
    }else if (i % 3 == 0){
		console.log("Fizz");
		result += i + " Fizz" + "<br>";
        //document.getElementById("result").innerHTML = "Divided by 3";
    }else if (i % 5 == 0){
		console.log("Buzz");
		result += i + " Buzz" + "<br>";
        //document.getElementById("result").innerHTML = "Divided by 5";
    }else{
		console.log(i);
		result += i + "<br>";
		//document.getElementById("result").innerHTML = "no divided";
}
		document.getElementById("result").innerHTML = result;
		document.getElementById("number").value = "";
}
}

function myfresh(){
	document.getElementById("number").value = "";
	document.getElementById("result").innerHTML = "";
	document.getElementById("numbers").value = "";
}

function myDemo(){
	var fv;
	var sv;
	var temp;
	 
	fv = Number(document.getElementById("fv").value);
	sv = Number(document.getElementById("sv").value);
	
	var temp = fv;
	var fv = sv;
	var sv = temp;
	
	console.log("a value is" + fv);
	console.log("b value is" + sv);
}