// Code your solution here

function findMatching(drivers, string) {
    let matched = drivers.filter(driver => {
        return driver === string || driver === string.toLowerCase()
    })
    return matched
}

function fuzzyMatch(drivers, string) {
    let matched = drivers.filter(driver => {
        return driver.substring(0,2) === string
    })
    return matched
}

function matchName(drivers, string) {
    let matched = drivers.filter(driver => {
        return driver.name === string
    })
    return matched

}