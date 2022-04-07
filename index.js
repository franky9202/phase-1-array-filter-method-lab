const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(array, string){
    const matchArray = array.filter(function(array){
        return array.toUpperCase() === string.toUpperCase()
    })
    return matchArray
}

function fuzzyMatch(drivers, string){
    function callFunc(drivers){
        return drivers.startsWith(string)
    }
    const newDriverArr = drivers.filter(callFunc)
        if (newDriverArr){
            return newDriverArr
    }
}

function matchName(drivers, string){
    const objectName = drivers.filter(function(string){
        for (let object in drivers){
            if(string === drivers[0]){
                return drivers
            }
            else{
                return string === drivers[4]
            }
        }
    })
    return objectName
}
matchName(drivers,"Bobby")