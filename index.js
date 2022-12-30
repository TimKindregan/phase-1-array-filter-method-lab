function findMatching (array, matchString) {
    let matchingNames = array.filter(function (name) {
        return name.toLowerCase() === matchString.toLowerCase();
    })
    return matchingNames;
}

function fuzzyMatch (array, chars) {
    let matchChar = array.filter(function (name) {
        return name.indexOf(chars) === 0;
    })
    return matchChar;
}

function matchName (array, nameString) {
    let matchingName = array.filter(function(driver) {
        return driver.name === nameString
    })
    return matchingName;
}