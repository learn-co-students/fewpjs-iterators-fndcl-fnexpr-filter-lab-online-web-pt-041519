
const findMatching = (drivers, name) => drivers.filter(n=> n.toLowerCase()===name.toLowerCase() )


const fuzzyMatch = (drivers, letter) => drivers.filter(name => name.startsWith(letter) )

//Write matchName - This function takes an array of drivers and a string as arguments. In this function, 
//each element of the drivers array is a JavaScript object that has a property of name. The function should 
//return each element whose name property matches the provided string argument.

const matchName = (drivers, name) => drivers.filter(el => el.name === name)

