function findMatching(drivers, str) {
    return drivers.filter(d => d.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(d => d.toLowerCase().startsWith(str.toLowerCase()))
}

function matchName(drivers, str) {
    return drivers.filter(d => d.name.toLowerCase() === str.toLowerCase())
}