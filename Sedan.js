var Sedan = (function(){
  var color = "blue";
  var type = "sedan";

return {
	manufacture_Date: new Date(),
	getColor: Function(){
		return color;

	},
	setColor: function(newColor){
		color = newColor;
	},
}
getType: function(){
	return type;
}

}
})();

console.log("Sedan IIFE", Sedan);
console.log("Sedan Color", Sedan.getColor());
console.log("Sedan type", Sedan.getType());

//this is the original file Sedan-augmented is the changed file 
//Sedan-augmented.js file is added things to do in the iffy called Sedan.js