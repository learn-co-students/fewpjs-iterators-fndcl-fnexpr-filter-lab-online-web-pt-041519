// Code your solution here

function findMatching(driver, string){
    return driver.filter(match => match.toUpperCase() === string.toUpperCase()
)
}

function fuzzyMatch(driver, string){
    return driver.filter(fuzzy => fuzzy.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
}

function matchName(driver, string){
    return driver.filter(match => match.name === string)
}