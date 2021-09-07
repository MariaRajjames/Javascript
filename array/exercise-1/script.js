var cars = ["Audi", "BMW", "Honda", "Suzuki"];

var Clen = cars.length;

function myFunction(){
	document.getElementById("result").innerHTML = cars;
}

function myFunctionA(){
	var resultA = "";
	
	for(var i=0; i<Clen; i++){
		resultA += cars[i] + "<br>";
	}
	document.getElementById("resultA").innerHTML = resultA;
}

function myFunctionB(){
	var resultB = "";
	var j = 3;
	
	for(var i=0; i<cars.length; i++){
		resultB += cars[j-i] + "<br>";
		
	}
	document.getElementById("resultB").innerHTML = resultB;
}

function myFunctionC(){
	var number;
	
	number = document.getElementById("number").value; // string
	
	for(var i=0; i<=Clen; i++){
		
		if(cars[i] == number){
			document.getElementById("resultC").innerHTML = "Value is true and Position is "+ i;
				break;		
		}else{
			document.getElementById("resultC").innerHTML = "Value is false";
		}	
	}
}

// Array Even Or Odd Method //
	
	var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	
	var data = document.getElementById("demo").innerHTML = num;
	
function myFunctionD(){
        var sum=0;
		var jam=0;
		var rate = 1;
		var count = 1;
		
        for(var i=0; i<=num.length; i++){
            if(num[i]%2==0){
                sum+=num[i];
                console.log(num[i]);
				document.getElementById("resultE").innerHTML = "Even: "+ rate++;
            }else if(num[i]%2===1){
                jam+=num[i];
                console.log(num[i])
				document.getElementById("resultF").innerHTML = "Odd: "+ count++;
            }
        }
		
        console.log("The sum of all even numbers is: "+ sum);
		console.log("The sum of all odd numbers is: "+ jam);
	}
	
// Adding two arrays //

	
	
	function myFunctionE(){
		var num1 = [1,2,3,4,5];
		var num2 = [1,2,3,4,5];
		var length = num1.length;
		var sum = [];
		
		
		for(var i=0; i<length; i++){
			sum[i] = num1[i] + num2[i];
		}	
		console.log(sum);
	}
	
// largest and smallest element in the array //

function myFunctionF(){
	var arr = [7,1,2,8,9];
	
	var smallest = arr[0];
	var largest = arr[0];
	
	for(var i=0; i<arr.length; i++){
		if(arr[i] < smallest){
			smallest = arr[i]; 
		}if(arr[i] > largest){
			largest = arr[i];
		}
	}

console.log(smallest);
console.log(largest);
}

// two dimentional array //
function myFunctionG(){
	var arr = [	[1,2,3], 
				[4,5,6], 
				[7,8,9]];
				
				
	var row = arr.length;
	var column = arr[0].length;
 
	for(var i=0; i<row; i++){
		for(var j=2; j<column; j++){
			console.log(arr[i]);
		}
			//console.log("<br>");
	}
}

// second minimum and maximum value //

function myFunctionH(){
	var arr = [ 1,2,3,4,5,6,7,8,9 ];

		for (var i = 0; i < arr.length; i++) {
			for (var j = i; j < arr.length; j++) {
				if (arr[i] < arr[j]) {
					var temp = arr[i];
						arr[i] = arr[j];
						arr[j] = temp; 
					}
				}
			}

			console.log(arr);
			console.log("last element: " + arr[0]);
			console.log("Second Last element: " + (arr[1]));
			console.log("small element: " + arr[i-1]);
			console.log("Second small: " + arr[i-2]);
}

// remove duplicate elemeent in array //

function myFunctionI(){
	var arr = [4,2,3,3,5];
	
	var seen = [];
    var out = [];
    var len = arr.length;
    var j = 0;
	
    for(var i = 0; i < len; i++) {
         var item = arr[i];
         if(seen[item] !== 1) {
               seen[item] = 1;	   
               out[j++] = item;
         } 
		
    }
    console.log(out);
} 

// count of remove duplicate elemeent in array //



