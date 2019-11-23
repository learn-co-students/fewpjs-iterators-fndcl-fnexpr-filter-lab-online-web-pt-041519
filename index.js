// Code your solution here
//words.filter(word => word.length > 6);
function fuzzyMatch(array, string) {
   return array.filter(driver => driver.toUpperCase().indexOf(string.toUpperCase()) === 0)
}