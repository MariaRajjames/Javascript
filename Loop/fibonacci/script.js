function myFunction(){
	var x = 0,  y = 1, z, i;  
	var number;
	var result = "";
	
	number = Number(document.getElementById("number").value);
	
	for (var i = 1; i <= number; i++) {
		z = x + y;
		x = y;
		y = z;
		
		result += x + "<br>"
}
document.getElementById("result").innerHTML = result;
}