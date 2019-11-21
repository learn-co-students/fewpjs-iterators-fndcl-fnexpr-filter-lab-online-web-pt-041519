// // Code your solution here

// function findMatching(drivers, string){
//     let matches = drivers.filter(function(d) { return d === `${string}`});
//     return matches;
// }


// function fuzzyMatch() {

// }


// function matchName () {
    
// }

function findMatching(array, string) {
    return array.filter( d => d.toLowerCase() === string.toLowerCase() )
  }
  
  function fuzzyMatch(array, string) {
    return array.filter( d => d.startsWith(string) )
  }
  
  
  
  function matchName(array, string) {
    return array.filter( d => d['name'] === string )
  }