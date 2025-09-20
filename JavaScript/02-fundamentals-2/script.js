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

/*
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
*/

//////////////////////////////////////////////////

/*
function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(4, 3));
*/

////////////////////////////////////////////////////

// Basic array operations
/*
const friends = ["Ajay", "Alex", "John"];

// console.log(friends[0])
// let a = 10;
// let b = 20;
// console.log(a);
// console.log(b);
// b = a;
// console.log(b);
// a = 15;
// console.log(a);
// console.log(b);

// const a = friends;
// console.log(a);
// console.log(friends);
friends.unshift("Alan");
console.log(friends)
// console.log(a);

friends.push("Bob")
console.log(friends);
const poppedElement = friends.pop()
console.log(poppedElement);
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.indexOf("Ajay"));
console.log(friends.includes("Ajay"));

const friendName = prompt("Enter your friend name: ")
console.log(friendName);
if (friends.includes(friendName)) {
    console.log("You have a friend called Alex");
} else {
    console.log(`You don't have a friend called ${friendName}`);
}
    */

/////////////////////////////////////////////

// Objects
// const a = []

// console.log(typeof a);

const person = {
    firstName: "Jonh",
    lastName: "Michal",
    age: 26,
    job: "teacher",
    friends: ['Michael', 'Peter', 'Steven'],
}

console.log(person);
console.log(person.firstName);
console.log(person.friends);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));