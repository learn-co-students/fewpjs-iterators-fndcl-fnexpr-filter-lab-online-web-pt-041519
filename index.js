function findMatching(driverArray, name) {
    return driverArray.filter(n => n.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(driverArray, namePartial) {
    return driverArray.filter(n => n.slice(0, namePartial.length) === namePartial)
}

function matchName(driverArray, name) {
    return driverArray.filter(driverInfo => driverInfo.name === name)
}