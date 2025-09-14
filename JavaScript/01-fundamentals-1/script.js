///////////////////////////////////////////////////////////////////////////////////

// DAY 1 (14-09-25)

/*
alert("hello")
alert("world")
*/

// values and variables
/*
console.log("Hello")

let firstname = 'naveen';
console.log(firstname);

let age = 23;
let isAlive = true;
*/

/////////////////////////////////////////////////////////////////////////

// Data types
// Number, String, boolean, BigInt, null, undefined

// let a = 23;
// let javascriptIsFun = "fun";
// let javascriptisFun = true;
// let b;
// console.log(b)
// let c = null // null
// console.log(c)

// console.log(typeof undefined)
// console.log(typeof null)

///////////////////////////////////////////////////////////////////////////////

// Basic operators
// Math operators

// const now = 2025
// const ageJohn = now - 1997;
// console.log(ageJohn)

// const firstName = "John";
// const lastName = "Martha";

// console.log(firstName + " " + lastName)

///////////////////////////////////////////////////////////////////////////////////

// Assignment operator
// let x = 10 + 5 // 15
// console.log(x)
// x += 10 // x = x + 10
// x++ // x = x + 1
// x-- // x = x - 1
// console.log(x)

/////////////////////////////////////////////////////////////////////////////////////

// Comparison operators (>, <, <=, >=)
// const ageJohn = 25
// const ageArun = 25
// console.log(ageJohn > ageArun)
// console.log(ageJohn >= ageArun)
// console.log(ageJohn < ageArun)
// console.log(ageJohn <= ageArun)

/////////////////////////////////////////////////////////////////////////////////////////////

// Operator Precedence (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
// const now = 2025;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

//////////////////////////////////////////////////////////////////////////////////////////////

// String and Template Literals

// const firstName = "Naveen";
// const job = "developer";

// const naveen = "I'm " + firstName + ", a " + (2025 - 1999) + " years old";
// const a = `I'm ${firstName}, a ${2025 - 1999} year old`
// console.log(a);

//////////////////////////////////////////////////////////////////////////////////////////////////

// variable assignment types (let, const and var)

// let a = 10;
// a = 20;
// const b = 10;
// var c = 10;
// c = 50
// console.log(c)

////////////////////////////////////////////////////////////////////////////////////////////////

// Taking Decisions: if / else statements
// const age = 17;

// if (age >= 18) {
//     console.log("Eligible")
// } else {
//     console.log("Not Eligible")
// }

/////////////////////////////////////////////////////////////////////////////////////////////////

// Type conversion
// const inputYear = "46";
// console.log(inputYear)
// console.log(typeof inputYear);
// console.log(typeof Number(inputYear))

// console.log("10" + 10)

///////////////////////////////////////////////////////////////////////////////////////////////

// Truthy or Falsy values

// false values - 0, "", undefined, null, NaN

// console.log(Boolean(0))
// console.log(Boolean(""))
// console.log(Boolean(undefined))
// console.log(Boolean({}))
// console.log(Boolean(null))

// const money = 100

// if (money) {
//     console.log("Don't spend it")
// } else {
//     console.log("Get a Job")
// }

/////////////////////////////////////////////////

// Equality operator: == , ===

// const age = "18";

// console.log(age == 18);
// console.log(age === 18);

/////////////////////////////////////////////

// logical operators (&&, ||, !)

// const hasDrivingLicense = true;
// const hasGoodVision = false;

// console.log(hasDrivingLicense && hasGoodVision);
// console.log(hasDrivingLicense || hasGoodVision);

// console.log(hasDrivingLicense && !hasGoodVision)

////////////////////////////////////////////////////

// switch statement
/*
const day = ' gvrehb';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}
  */

///////////////////////////////////////////////////////

// Conditional (Ternary) Operator

// const age = 23;

// age > 18 ? console.log("Eligible") : console.log("Not Eligible")

// age > 18 ? console.log("Eligible") : age > 22 ? console.log("something") : console.log("something")

////////////////////////////////////////////////////////