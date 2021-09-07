var a;
var b;
var d = 6;


function mySum(){
	var result ="";
	var number;
	
	number = Number(document.getElementById("number").value);

 for(a=0; a<=number; a++){
	 result += "<br>";
	 for(b=0; b<=a; b++){
		 result += "* ";
	 }
 }
 
 document.getElementById("result").innerHTML = result;
}
 
 /* Step - 2 */
 
 function mySum1(){
	var output ="";
	var input;
	
	input = Number(document.getElementById("input").value);
	
	for(a=0; a<=input; a++){
		output += "<br>";
		for(b=0; b<d-a; b++){
			output += "&nbsp&nbsp&nbsp";
		}
		for(b=0; b<=a; b++){
			output += " *";
		}
	}
	document.getElementById("output").innerHTML = output;
 }

	
/* Step - 3 */
function mySum2(){
	var res ="";
	var numbers;

	numbers = Number(document.getElementById("numbers").value);

	for(a=0; a<=numbers; a++){
		res += "<br>";
		for(b=0; b<d-a; b++){
		res += "&nbsp";
		}
		for(b=0; b<=a; b++){
		res += "*";
		}
	}
	document.getElementById("res").innerHTML = res;
}
/* Step - 4 */
function mySum3(){
	var re ="";
	var num;
	
	num = Number(document.getElementById("num").value);
	
	for(a=0; a<=num; a++){
		re += "<br>";
		for(b=0; b<=a; b++){
		re += "&nbsp";
		}
		for(b=0; b<d-a; b++){
		re += "*";
		}	
	}
	document.getElementById("re").innerHTML = re;
}

/* step - 5 */
function mySum4(){
	var ot="";
	var ip;
	
	ip = Number(document.getElementById("ip").value);
	
	for(a=0; a<=ip; a++){
		ot += "<br>";
		for(b=0; b<d-a; b++){
			ot += "* ";
		}
	}
	document.getElementById("ot").innerHTML = ot;
}

/* step - 6 */
function mySum5(){
	var take="";
	var give;
	
	give = Number(document.getElementById("give").value);
	
	for(a=0; a<=give; a++){
		take += "<br>";
		for(b=1; b<=a; b++){
		take += "&nbsp&nbsp";
		}
		for(b=0; b<d-a; b++){
		take += "*";
		}
	}
	document.getElementById("take").innerHTML = take;
}

/* step - 7 */
function mySum6(){
	var taken="";
	var given;
	var c;
	
	given = Number(document.getElementById("given").value);
	
	for(a=0; a<=given; a++){
		taken += "<br>";
		for(b=0; b<d-a; b++){
		taken += "*";	
		}
		for(b=1; b<=a; b++){
		taken += "&nbsp&nbsp&nbsp&nbsp";
		}
		for(c=0; c<d-a; c++){
		taken += "*";
		}
	}
	document.getElementById("taken").innerHTML = taken;
}

/* step - 8 */
function mySum7(){
	var to="";
	var from;
	var c;
	
	from = Number(document.getElementById("from").value);
	
	for(a=0; a<=from; a++){
		to += "<br>";
		for(b=0; b<=a; b++){
		to += "*";	
		}
		for(b=1; b<d-a; b++){
		to += "&nbsp&nbsp&nbsp&nbsp";
		}
		for(c=0; c<=a; c++){
		to += "*";
		}
	}
	document.getElementById("to").innerHTML = to;
}

/* step - 9 */
function mySum8(){
	var bottom="";
	var pot;
	var c;
	var e = 0;
	
	pot = Number(document.getElementById("pot").value);
	
	for(a=0; a<=pot; a++){
	 bottom += "<br>";
	 for(b=0; b<=a; b++){
		 bottom += "* ";
	 }
 }
	for(a=0; a<=pot; a++){
		bottom += "<br>";
		for(b=0; b<d-a; b++){
			bottom += "* ";
		}
	}
	document.getElementById("bottom").innerHTML = bottom;
}

/* step - 10 */
function mySum9(){
	var back="";
	var front;
	
	front = Number(document.getElementById("front").value);
	
	for(a=0; a<=front; a++){
		back += "<br>";
		for(b=0; b<d-a; b++){
			back += "&nbsp&nbsp&nbsp";
		}
		for(b=0; b<=a; b++){
			back += " *";
		}
	}
	for(a=0; a<=front; a++){
		back += "<br>";
		for(b=0; b<=a; b++){
		back += "&nbsp&nbsp&nbsp";
		}
		for(b=0; b<d-a; b++){
		back += " *";
		}
	}
	document.getElementById("back").innerHTML = back;
}

/* step - 11 */
function mySum10(){
	var push="";
	var pull;
	
	pull = Number(document.getElementById("pull").value);
	
	for(a=0; a<=pull; a++){
		push += "<br>";
		for(b=0; b<d-a; b++){
		push += "&nbsp";
		}
		for(b=0; b<=a; b++){
		push += "*";
		}
	}
	for(a=0; a<=pull; a++){
		push += "<br>";
		for(b=0; b<=a; b++){
		push += "&nbsp";
		}
		for(b=0; b<d-a; b++){
		push += "*";
		}	
	}
	document.getElementById("push").innerHTML = push;
}

