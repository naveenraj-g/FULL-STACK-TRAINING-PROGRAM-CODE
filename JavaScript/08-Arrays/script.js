"use strict";


// Simple Array methods

let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(0, 5));
// console.log(arr.slice());
// console.log([...arr]);
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

// const a1 = arr.splice(0, 3);
// console.log(a1);
// console.log(arr);

arr = ['a', 'b', 'c', 'd', 'e'];
const arr1 = ['d', 'e', 'f', 'g', 'h'];
// console.log(arr.reverse());

const letters = arr.concat(arr1);
// console.log(letters);
// console.log([...arr, ...arr1]);

// console.log(arr.at(4));
// console.log(arr.at(-1));
// console.log(arr[2]);

// forEach

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach((m) => {
    // console.log(m);
    // console.log(arr);
});

// map
// const movementsDescription = movements.map((m, i) => {
//     console.log(`Movement ${i + 1}: You ${m > 0 ? "deposited" : "withdraw"} ${Math.abs(m)}`);
//     return m;
// });

// console.log(movementsDescription);

// const deposited = movements.filter((m) => {
//     return m > 0;
// });

// console.log(deposited);

// const withdrawls = movements.filter((m) => m < 0);
// console.log(withdrawls);

// const deposited = movements.map(m => {
//     if (m > 0) return m;
// });
// console.log(deposited);

// const filteredDeposite = deposited.filter(m => Boolean(m));

// console.log(filteredDeposite);

// const deposited = movements.map(m => {
//     if (m > 0) return m;
// }).filter(m => Boolean(m));

// console.log(deposited);

// reduce method

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce((acc, m) => {
//     return acc + m;
// }, 0);

// console.log(balance);

// let bal = 0;
// movements.forEach(e => {
//     bal = bal + e;
// });

// console.log(bal);

const balance = movements.reduce((acc, m) => {
    if (m > 0) {
        if (acc.deposite) {
            acc.deposite += m;
        } else {
            acc.deposite = m;
        }
    }

    return acc;
}, {});

console.log(balance);