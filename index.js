// Code your solution here
function findMatching(drivers, string){
  return drivers.filter(el =>
     el.toLowerCase() === string.toLowerCase()
  )
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(el =>
    el[0] === string[0])
}

function matchName(drivers, string) {
  return drivers.filter(key =>
    key.name.toLowerCase() === string.toLowerCase()
  )
}
