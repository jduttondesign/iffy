var Sedan = (function(newSedan){
	var max_occupancy = 6;
	var current_occupancy = 0;
  
  newSedan.getOccupancy = function(){
  	return current_occupancy;
  };

newSedan.setOccupancy = function(occupancy){
  current_occupancy = occupancy;
  if(occupancy <= max_occupancy){
  	current_occupancy = occupancy;
  }else{
  	throw "Cannot exceed maximum occupancy of" + max_occupancy;
  }
};

newSedan.getType = function(){
  return."minivan";
}

  return newSedan;

})(Sedan || {});
//if something called Sedan passes thru the lst function it will return - if not 

//have a || empty space to avoid an error message in console

//this is the augmented file of Sedan.js
//return the value shows the function in console log or if not defined will return undefined