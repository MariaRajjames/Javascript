function myFunction(){
	var arr = [0,1,2];
		
	for(var i = 0; i < arr.length; i++){
		
		var x = document.createElement("IMG");
			x.setAttribute("width", "150");
			x.setAttribute("height", "150");
			document.body.appendChild(x);
			
		if(arr[i] == 0){
			x.setAttribute("src", "seat_avail.png");
			console.log(x);	
		
		}else if(arr[i] == 1){
			x.setAttribute("src", "seat_select.png");
			console.log(x);
		}else{
			x.setAttribute("src", "seat_unavail.png");
			console.log(x);
		}
	}
}


