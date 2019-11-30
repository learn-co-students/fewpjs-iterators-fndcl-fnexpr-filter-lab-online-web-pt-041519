// Code your solution here


const findMatching = (arr, match) => {
    return arr.filter(el => el.toLowerCase() === match.toLowerCase())
}

const fuzzyMatch = (arr, match) => {
    return arr.filter(el => el.startsWith(match))
}


const matchName = (arr, match) => {
    return arr.filter(el => el.name === match)
}