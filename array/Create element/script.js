function myFunction(){
	var one = document.createElement('div');
	one.className = 'well';
	one.innerHTML = 'Search';
	
	console.log(one);
	//document.getElementById("demo").innerHTML = one;
	
	
	// Css styling
		one.style.width = "330px";
		one.style.float = "left";

	// or
		one.setAttribute("style", "width:330px;float:left;");
}