 function myFunction(){
	var number;
	var result = "";
	
	number = Number(document.getElementById("number").value);
	
			let result = 1;
			for(let i = number; i > 1; i--){
				result *= i;
				};
			console.log(result);
		} 

 /* function myClick(){
	var number;
	var result ="";
	number = Number(document.getElementById("number").value);
	
	if (number < 0) 
        return -1;
	else if (number == 0) 
      return 1;
	else {
      return (number * factorialize(number - 1));
	}	
		document.getElementById("result").innerHTML = result;	
}
factorialize(5); */