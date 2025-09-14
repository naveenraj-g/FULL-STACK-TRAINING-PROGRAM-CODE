"use strict"

// Activating Strict Mode
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

///////////////////////////////////////////////////////

// Functions

// function logger() {
//     console.log("logging...")
// }

// calling / running / invoking function
// logger();


// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const juice = fruitProcessor(3, 2);
// console.log(juice)
// console.log(fruitProcessor(3, 2));

/////////////////////////////////////////////////////////

// function declarations vs expressions

// function declaration (Hoisting)
// const age1 = calcAge1(1991);
// console.log(age1)
// function calcAge1(birthYeah) {
//     return 2037 - birthYeah;
// }

// function expression
// const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
// }
// const age1 = 25
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// Arrow functions

// function declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}

// function expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}

// arrow function
const calcAge3 = birthYear => 2025 - birthYear;
console.log(calcAge3(1999))

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
