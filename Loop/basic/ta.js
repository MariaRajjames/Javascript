function myFunction(){
	var number;
	var end;
	var result = "";
	
	number = Number(document.getElementById("number").value);
	
	if(number%2 == 0){
		document.getElementById("op").innerHTML = "Even Number";
	}else if(number%2 !== 0){
		document.getElementById("op").innerHTML = "prime Number";
	}else{
		document.getElementById("op").innerHTML = "Odd Number";
	}
	
	end = Number(document.getElementById("end").value);
	
	if(end%2 == 0){
		document.getElementById("op1").innerHTML = "Even Number";
	}else if(end%2 !== 0){
		document.getElementById("op1").innerHTML = "prime Number";
	}else{
		document.getElementById("op1").innerHTML = "Odd Number";
	}
	
	for(var i=1; i<=end; i++){
		result += "<p>" + number + " * " + i + " =" + number * i + "</p>";
	}
	document.getElementById("result").innerHTML = result;
}

function myClick(){
	document.getElementById("number").value = "";
	document.getElementById("end").value = "";
	document.getElementById("op").innerHTML = "";
	document.getElementById("op1").innerHTML ="";
	document.getElementById("result").innerHTML = "";
}











