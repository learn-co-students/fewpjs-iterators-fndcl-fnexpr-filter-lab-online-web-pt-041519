// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(name => name.startsWith(string))
}

function matchName(drivers, string) {
    return drivers.filter(object => object.name === string)
}