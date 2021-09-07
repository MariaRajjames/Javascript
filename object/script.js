var obj = {
	firstName: "james",
	lastName: "Mariaraj",
	Age: 26,
	Employee: true,
	cars: ["Audi", "BMW", "Benze"],
	nuts: function(){
	 return `my name is ${this.firstName}`;
	},
	fatherName: "savari"
	
};

console.log(obj.firstName);
console.log(obj.cars[0]);
console.log(obj.nuts());
console.log(obj.cars);
console.log(obj.cars.push("honda"));


