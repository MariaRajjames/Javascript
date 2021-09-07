function myFunction(){
	var number;
	
	number = (document.getElementById('number').value);

    var value = number;
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

document.getElementById("result").innerHTML = sum;
		
	
}
