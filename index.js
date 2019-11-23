

const findMatching = (drivers, name) => {
  return drivers.filter(driver => 
    driver.toLowerCase() === name.toLowerCase()
  )
}

const fuzzyMatch = (drivers, name) => {
  return drivers.filter(driver =>
    driver[0] === name[0])
}

const matchName = (drivers, name) => {
  return drivers.filter(driver =>
    driver.name.toLowerCase() === name.toLowerCase()
  )
}

