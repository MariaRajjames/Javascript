	var fv,sv,tv,uv;
	var image = document.getElementById("images"); 
	
function myFunction(){
	 fv = document.getElementById("firstValue").innerHTML = Math.round(Math.random()*3);
	 sv = document.getElementById("secondValue").innerHTML = Math.round(Math.random()*10);	
}
myFunction();

var count = 1;
var counts = 1;
var f;
function myClick() {
	if(tv == uv){
		f = document.getElementById("correct").innerHTML= count++;
	}else{
		document.getElementById("wrong").innerHTML= counts++;
	}
  
}


	
function mythree(){
		tv = fv*sv;
		uv = Number(document.getElementById("output").value);	
			
		 
	if(tv == uv){
		document.getElementById("finalAnswer").innerHTML="correct";
		image.src = "images/correct.jpg";
	}else{
		document.getElementById("finalAnswer").innerHTML="In-correct";
		image.src = "images/wrong.jpg";	
	}
	myFunction();
		myClick();
		tScore();
		document.getElementById("output").value='';
		
}
 var g;
function tScore(){
	g = document.getElementById("collect").innerHTML= f;
}

 


	