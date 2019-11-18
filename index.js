// Code your solution here

// Write findMatching- This function takes an array of drivers and a string 
// as arguments, and returns the matching list of drivers. The function should 
// be case insensitive.

function findMatching(drivers, names){
   return drivers.filter( match =>  match.toLowerCase() === names.toLowerCase()
      )
    //return names === names })
}

 //Write fuzzyMatch - This function takes an array of drivers and a string 
//  as arguments for querying the array, and returns all drivers whose names 
//  begin with the provided letters.

function fuzzyMatch(drivers, names){
 return drivers.filter(match => match[0] === names[0])
}
//.split(' ').map(x => x[0]).join('');

// Write matchName - This function takes an array of drivers and a
//  string as arguments. In this function, each element of the drivers 
//  array is a JavaScript object that has a property of name. The function
//   should return each element whose name property matches the provided string argument.

function matchName(drivers, names){
    return drivers.filter( infor => infor.name === names  )
     //return name = name.
}

 
