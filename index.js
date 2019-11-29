// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(d => d.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, string){
    let stringBeg = string.slice(0, 2)
    return drivers.filter(d =>{
        let startsWith = d.slice(0, 2)
        return startsWith.toLowerCase() === stringBeg.toLowerCase()
    })
}

function matchName(drivers, name){
    return drivers.filter(d => d.name === name)
}