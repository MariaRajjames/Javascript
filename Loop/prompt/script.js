 
var image = document.getElementById("images");

function myFunction(){
		var input = alert("Welcome");	
		myName();
}

function myName() {
  var person = prompt("Please enter your name");
  if (person != null) {
    document.getElementById("demo").innerHTML = "Welcome " + person;
	image.src = "Happy.jpg";
  }
}
