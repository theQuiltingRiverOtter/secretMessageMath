
//This object could be created dynamically with a function
const multiplication = {
    "1x1" : 1,
    "1x2" : 2,
    "1x3" : 3,
    "1x4" : 4,
    "1x5" : 5,
    "1x6" : 6,
    "1x7" : 7,
    "1x8" : 8,
    "1x9" : 9,
    "1x10" : 10,
    "1x11" : 11,
    "1x12" : 12,
    "2x1" : 2,
    "2x2" : 4,
    "2x3" : 6,
    "2x4" : 8,
    "2x5" : 10,
    "2x6" : 12,
    "2x7" : 14,
    "2x8" : 16,
    "2x9" : 18,
    "2x10" : 20,
    "2x11" : 22,
    "2x12" : 24,
    "3x1" : 3,
    "3x2" : 6,
    "3x3" : 9,
    "3x4" : 12,
    "3x5" : 15,
    "3x6" : 18,
    "3x7" : 21,
    "3x8" : 24,
    "3x9" : 27,
    "3x10" : 30,
    "3x11" : 33,
    "3x12" : 36,


}

//This object could be created dynamically with a function
const division = {
    "144/12" : 12,
    "132/12" : 11,
    "120/10" : 10,
    "108/9" : 9,
}


//This function should loop through the alphabet and assign values 
//and problems to each letter to create a legend for the message
function makeLegend(mathType){
    const values = Object.values(mathType);
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const legend = {}
    const usedVals = []
    for (let letter of alphabet){
        let randomIndex = Math.floor( Math.random() * values.length);
        const key = values[randomIndex]
        const newObject = {};
        newObject[key] = [];
        legend[letter] = newObject;
        usedVals.push(key);
    }
    
    for (let item in legend){
        const itemKeys = Object.keys(legend[item])
        const value = Number(itemKeys[0])
        for (let answer in mathType){ 
            if (value === mathType[answer] ){
                legend[item][value].push(answer)
            }
        }
    }
    console.log(legend);
    return legend;
}

makeLegend(multiplication);