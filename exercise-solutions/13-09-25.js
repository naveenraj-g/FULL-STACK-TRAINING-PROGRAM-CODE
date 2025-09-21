// challenge 1

/*
const markW = 78
const markH = 1.69
const johnW = 92
const johnH = 1.95

// BMI = mass / height ** 2

const markBMI = markW / markH ** 2
const johnBMI = johnW / johnH ** 2
console.log(markBMI, johnBMI)

if (markBMI > johnBMI) {
    console.log("Mark BMI is greater");
} else {
    console.log("John BMI is greater");
}
*/

///////////////////////////////////////////

// Challenge 2

const markW = 78
const markH = 1.69
const johnW = 92
const johnH = 1.95

const markBMI = markW / markH ** 2
const johnBMI = johnW / johnH ** 2
console.log(markBMI, johnBMI)

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})`);
} else {
    console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})`);
}