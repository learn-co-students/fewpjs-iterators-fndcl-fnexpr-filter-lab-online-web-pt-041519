// Return all drivers with names that begin with input letters
function findMatching(driverArray, string) {
  return driverArray.filter(driver => driver.toLowerCase() === string.toLowerCase())
}


// Return all drivers that match provided string
function fuzzyMatch(driverArray, string) {
  return driverArray.filter(driver => driver.toLowerCase().indexOf(string.toLowerCase()) === 0)
}


// Return each object whose name matches string
function matchName(driverArray, string) {
  return driverArray.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
}
