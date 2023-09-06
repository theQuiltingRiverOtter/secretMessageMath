//This object could be created dynamically with a function
function multiplication(table, ...nums) {
    for (let num of nums) {
        for (let i = 1; i <= 12; i++) {
            table[`${num}x${i}`] = num * i;
        }
    }
    return table;
}

//This object could be created dynamically with a function
function division(table, ...nums) {
    for (let num of nums) {
        for (let i = 1; i <= 27; i++) {
            let product = num * i;
            table[`${product}/${num}`] = i;
        }
    }
    return table;
}

function produceTable(m = true, d = false, ...nums) {
    table = {}
    if (m) {
        table = multiplication(table, ...nums);
    }
    if (d) {
        table = division(table, ...nums);
    }
    return table;
}


const allMultTables = produceTable(true, false, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);

function getKeys(table, timesTable) {
    const valuesSet = new Set(Object.values(timesTable));
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (let letter of alphabet) {
        const values = Array.from(valuesSet);
        let randomIndex = Math.floor(Math.random() * values.length);
        const key = values[randomIndex];
        const newObject = {};
        newObject[key] = [];
        table[letter] = newObject;
        valuesSet.delete(key);
    }
    return table;
}
function getValues(timesTable) {
    for (let item in legend) {
        const itemKeys = Object.keys(legend[item]);
        const value = Number(itemKeys[0]);
        for (let answer in allMultTables) {
            if (value === allMultTables[answer]) {
                legend[item][value].push(answer);
            }
        }
    }
}


//This function should loop through the alphabet and assign values 
//and problems to each letter to create a legend for the message
function makeLegend(timesTable) {
    legend = getKeys({}, timesTable);
    getValues();
    return legend;
}


function encodeMessage(message, legend) {
    message = message.toLowerCase();
    const words = message.split(" ");
    wordsProblems = words.map(word => {
        let encodedWord = [];
        for (let letter of word) {
            let count = 0;
            const problems = Object.values(legend[letter]);
            const random = Math.floor(Math.random() * problems[0].length)
            const problem = problems[0][random];
            encodedWord.push(problem);

        }

        return encodedWord;
    })

    console.log(wordsProblems)
    return wordsProblems;
}

let encodeForm = document.querySelector("#encodeForm");
let mathMessage = document.querySelector("#mathMessage");
let docLegend = document.querySelector("#legend");


function showMathMessage(message) {
    while (mathMessage.firstChild) {
        mathMessage.removeChild(mathMessage.firstChild)
    }
    const messageForm = document.createElement("form")
    messageForm.classList.add("messageForm")
    for (let word of message) {
        const w = document.createElement("div");
        w.classList.add("word");
        for (let problem of word) {
            const cell = document.createElement("div")
            cell.classList.add('problem')
            const input = document.createElement("input");
            input.setAttribute('type', 'text');
            input.classList.add('inputCell')
            input.setAttribute('id', 'problem')
            input.setAttribute('autocomplete', 'off')
            const label = document.createElement("label");
            label.classList.add('label')
            label.setAttribute('for', 'problem')
            label.innerHTML = problem
            cell.appendChild(input);
            cell.appendChild(label);
            w.appendChild(cell);
        }
        messageForm.appendChild(w);
    }
    const newButton = document.createElement("button");
    newButton.textContent = "Submit Message";
    newButton.classList.add("submitBtn");
    newButton.setAttribute("id", "submitBtn")
    messageForm.appendChild(newButton);
    mathMessage.appendChild(messageForm);
}

encodeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    while (docLegend.firstChild) {
        docLegend.removeChild(docLegend.firstChild);
    }
    let legend = makeLegend(allMultTables);
    let secretMessage = document.querySelector("#secretMessage").value;
    let encoded = encodeMessage(secretMessage, legend);
    document.querySelector("#secretMessage").value = '';
    showMathMessage(encoded);
    for (let item in legend) {
        const value = Object.keys(legend[item]);
        const line = document.createElement("div");
        line.classList.add('line');
        line.innerHTML = `${item.toUpperCase()}   -    ${value}`
        docLegend.append(line);
    }

})
