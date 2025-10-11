"use strict"
// Scoping - global, function, block

// const a = 10;
// console.log(a);

/*
function calcAge(birthYear) {
    const age = 2025 - birthYear;
    const firstName = "function scope"

    if (birthYear >= 2000) {
        console.log(firstName);
        var b = 15;

        function add(a, b) {
            return a + b
        }
    }

    // console.log(add(8, 9))
    // console.log(firstName);
    console.log(b);
    return age;
}

const firstName = "xyz";
calcAge(2000);

// if (firstName) {
//     console.log(firstName);
// }
*/

// -----------------------------------

// Hoisting

// variable
// console.log(a);
// console.log(b);
// console.log(c);

// var a = 10;
// let b = 15;
// const c = 20;

// functions

// console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//     return a + b
// }

// const addExp = function (a, b) {
//     return a + b
// }

// const addArrow = (a, b) => {
//     return a + b
// }

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted!');
// }

// var a = 10;
// let b = 15;
// const c = 20;

// console.log(a === window.a);
// console.log(b === window.b);
// console.log(window);

//////////////////////////////////////////////////

// this keyword

// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// };

// // calcAge(2000)

// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this);
// };
// calcAgeArrow(1980);

// const arun = {
//     year: 2000,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//     },
// }

// arun.calcAge();

// const akash = {
//     year: 1999,
// }

// akash.calcAge = arun.calcAge;

// akash.calcAge();

// const d = akash.calcAge;
// d();

/*
const arun = {
    year: 2000,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);

        // Method 1
        // const self = this;
        // const a = function () {
        //     console.log(self);
        // }
        // a();

        // Method 2
        const b = () => {
            console.log(this);
        }
        b();
    },

    ab: () => {
        console.log(this);
    }
}
arun.calcAge();
arun.ab()
*/

////////////////////////////////////

// arguments keyword
// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };
// // addExpr(2, 5);
// // addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };
// addArrow(2, 5, 8);

// const jessica1 = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
// };

// const a = jessica1;

// a.firstName = "arun"

// console.log(jessica1);
// console.log(a);

// const jessica = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
//     familiy: ['Alice', 'Bob'],
// };

// const a = { ...jessica, familiy: [...jessica.familiy] };

// a.familiy.push("Jesica")

// console.log(jessica);
// console.log(a);

// const jessica = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
//     familiy: ['Alice', 'Bob'],
// };

// const a = structuredClone(jessica);

// a.familiy.push("Jesica")

// console.log(jessica);
// console.log(a);