function myNumber(){
	var x=Number(document.getElementById("first").value);
	var y=Number(document.getElementById("second").value);
	
	if(x>y){
		document.getElementById("demo").innerHTML = "true";
	}else{
		document.getElementById("demo").innerHTML = "false";
	}
}


function myFunction() {
  var a = document.getElementById("answer").innerHTML = Math.round(Math.random());
   var image = document.getElementById("image");

    if (a == 1 ) { 
		document.getElementById("demo1").innerHTML="rain";
        image.src = "rain.jpg";
    }else  {
		document.getElementById("demo1").innerHTML="no-rain";
        image.src = "no-rain.jpg";
    }
}

var count = 0;
function myClick() {
  document.getElementById("demo2").innerHTML = count++;
}

function mytwo(){
	var fv = document.getElementById("firstValue").innerHTML = Math.round(Math.random());
	var sv = document.getElementById("secondValue").innerHTML = Math.round(Math.random()*10);
	var uv = Number(document.getElementById("output").value);
	var image = document.getElementById("images");
	var tv = fv*sv;
	
	document.getElementById("finalAnswer").innerHTML = tv;
	
	if(tv == uv){
		document.getElementById("finalAnswer").innerHTML="correct" ;
		image.src = "correct.jpg";
	}else{
		document.getElementById("finalAnswer").innerHTML="In-correct";
		image.src = "wrong.jpg";
	}
}


