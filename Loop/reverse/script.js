function revNum()
{
var number; 
	
	number = Number(document.getElementById("number").value);
	
	var n= number;
	var rev = 0, remaining;
	while (n>0)
	{
	remaining = n % 10;
	rev = rev * 10 + remaining ;
	n = Math.floor(n/10);
	}
	document.getElementById("result").innerHTML = "The original input number is : " +number+ " <br/> The reverse of input number is : " +rev+ "\n";
}