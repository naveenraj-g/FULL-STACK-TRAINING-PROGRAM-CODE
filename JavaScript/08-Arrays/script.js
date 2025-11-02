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

// const balance = movements.reduce((acc, m) => {
//     if (m > 0) {
//         if (acc.deposite) {
//             acc.deposite += m;
//         } else {
//             acc.deposite = m;
//         }
//     }

//     return acc;
// }, {});

// console.log(balance);

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find(val => val < 0);
// console.log(firstWithdrawal);

// const firstWithdrawalIndex = movements.findIndex(val => val < 0);
// console.log(firstWithdrawalIndex);

// const lastWithdrawal = movements.findLast(val => val < 0);
// console.log(lastWithdrawal);

// const lastWithdrawalIndex = movements.findLastIndex(val => val < 0);
// console.log(lastWithdrawalIndex);

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

// console.log(owners);
// owners.sort();
// console.log(owners);

// console.log(movements);

// return < 0, a, b (keep order)
// return > 0, b, a (switch order)

// movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// });

// movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//     return 0;
// });

// movements.sort((a, b) => b - a);


// console.log(movements);

// const user1 = {
//     name: "arun",
//     age: 12,
//     getAge() {
//         console.log(this.age);
//     },
// };

// const arr6 = [1, 2];
// console.log(arr6);

// const str1 = new String("abc");
// console.log(str1);

// class User {
//     static numOfusers = 0;
//     _userDefaultPassword = "1243215";
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         User.numOfusers++;
//     }

//     getAge() {
//         console.log(this.age);
//     }

//     static getTotalUser() {
//         console.log(User.numOfusers);
//     }
// }

// const user1 = new User("arun", 12);
// const user2 = new User("raj", 12);
// const user3 = new User("arun", 12);
// const user4 = new User("arun", 12);
// const user5 = new User("arun", 12);

// console.log(user1);
// user1.getAge();
// // User.getTotalUser()
// console.log(User.numOfusers);
// console.log(User._userDefaultPassword);

// const lotteryPromise = new Promise((resolve, reject) => {
//     console.log("Lotter draw is happening!");
//     setTimeout(() => {
//         if (Math.random() >= 0.5) {
//             resolve("You win!");
//         } else {
//             reject(new Error("You lost!"));
//         }
//     }, 2000);
// });

// // lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function (seconds) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, seconds * 1000);
//     });
// }

// wait(1).then(() => {
//     console.log("1 second passed");
//     return wait(1);
// }).then(() => {
//     console.log("2 second passed");
//     return wait(1);
// }).then(() => {
//     console.log("3 second passed");
//     return wait(1);
// })

// fetch("https://restcountries.com/v2/name/india").then(res => {
//     // console.log(res);
//     return res.json();
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.error(err);
// });

// const fetchCountry = async function (country) {};
// const fetchCountry = async  (country) => {};
// async function fetchCountry() {
//     try {
//         const res = await fetch(`https://restcountries.com/v2/name/india`);
//         if (!res.ok) throw new Error(`Country not found (${res.status})`);
//         const data = await res.json();
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// fetchCountry();