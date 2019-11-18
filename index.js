// Code your solution here
function findMatching(drivers, string)
{
    const result = drivers.filter(word => word.toUpperCase() === string.toUpperCase());
    return result
}

function fuzzyMatch(driversList, firstLetters){
    return driversList.filter(function (driverName) {
        return driverName.slice(0, firstLetters.length) === firstLetters
    });

}

function matchName(driversList, name) {
    return driversList.filter(function(driver) {
        return driver.name.toLowerCase() === name.toLowerCase()

    }) 

}