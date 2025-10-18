"use strict";

// Data needed for a later exercise
const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
]);

const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
]);

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    // orderDelivery: function (obj) {
    //     console.log(obj);
    // },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};


// Looping Objects

const properties = Object.keys(restaurant.openingHours)
const values = Object.values(restaurant.openingHours)
// console.log(properties);
// console.log(values);

// for (const day of properties) {
//     console.log(day);
// }

// for (const time of values) {
//     console.log(Object.keys(time));
// }

const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}


//////////////////////////////////
/*
// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
}

// console.log(restaurant?.openingHours?.mon);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? "closed"
    console.log(`On ${day}, we ${open === "closed" ? `are ${open}` : `open at ${open}`}`);
}

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');
*/

/////////////////////////////////////////
/*
// The for of loop

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

for (const item of menu) {
    // console.log(item);
}

for (const [index, item] of menu.entries()) {
    console.log(`${index + 1}. ${item}`);
}
*/

/////////////////////////////////////////

/*

// The Nullish Coalescing operator
restaurant.numGuest = 0;
const guest1 = restaurant.numGuest || 10;
console.log(guest1);

// Nullish: null and undefined (not - 0 "")
const guest2 = restaurant.numGuest ?? 10;
console.log(guest2);

const a = NaN

console.log(a ?? 10);

*/

/*
// Short Circutting (&& and ||)

// || (OR)
console.log(3 || "naveen");
console.log("" || "naveen");

restaurant.newGuest = 0;
const guest1 = restaurant.newGuest ? restaurant.newGuest : 10;
console.log(guest1);

const guest2 = restaurant.newGuest || 10;
console.log(guest2);

// && (AND)
console.log(0 && "naveen");
console.log(7 && "naveen");

if (restaurant.orderPizza) {
    restaurant.orderPizza("mushroom", "spinach")
}

restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach")
*/

/////////////////////////////////////////////

/*
// Rest patterns and parameters

// const arr = [12, ...[2,3]]

// arrays
const [a, b, c, ...e] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c);
// console.log(e);

const [pizza, pasta, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, pasta);
// console.log(otherFood);

// objects
const { sat, ...weekdays } = restaurant.openingHours
console.log(sat, weekdays);

// functions
const add = function (...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) sum += nums[i];
    console.log(sum);
}

add(1, 2, 3, 4, 5, 65, 76, 7, 8);

restaurant.orderPizza("mushroom", "onion", "olives")
*/
/////////////////////////////////////////////

// Spread Operator (...)
/*
const arr = [5, 7, 8];
const arr1 = [2, 4, arr[0], arr[1], arr[2]]
console.log(arr1);

const arr2 = [2, 4, ...arr];
console.log(arr2);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu);

// Iterables: array, strings, maps, sets. (NOT objects)

const str = "naveen";

const letters = [...str, "", "G"]
console.log(letters);
console.log(str);
console.log(...str);
console.log({ ...str });

// console.log(`${...str} Raj`);

// const ing = [
//     prompt("Let's make pasta! Ing 1?"),
//     prompt("Ing 2?"),
//     prompt("Ing 3?"),
// ]

// console.log(ing);

// restaurant.orderPasta(ing[0], ing[1], ing[2])
// restaurant.orderPasta(...ing);

const newRestaurant = { foundedIn: 1976, founder: "Alex", name: "Alex resturant", ...restaurant }

const newRestaurant1 = { ...restaurant, foundedIn: 1976, founder: "Alex", name: "Alex resturant" }

console.log(newRestaurant);
console.log(newRestaurant1);

const r = { ...restaurant };
*/

//////////////////////////////////////////////

// Destructuring Objects

/*
// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// })

// restaurant.orderDelivery({
//     address: 'Via del Sole, 21',
//     starterIndex: 1,
// });

const { name, openingHours, categories, anasd } = restaurant;
// console.log(name, openingHours);

// const { name: restaurantName, openingHours, categories } = restaurant;
// console.log(restaurantName);

const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(starters);

let a = 111;
let b = 888;

const obj = { a: 22, b: 8, c: 12 };

// a = obj.a
// b = obj.b

({ a, b } = obj)

// console.log(a, b);

const { fri: { open: o, close: c } } = restaurant.openingHours;
console.log(o, c);
*/


/*
// Destructuring Arrays
const arr = [1, 2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);

const [x, , , y] = arr;

// console.log(x, y);

let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp
// console.log(main, secondary);

[main, secondary] = [secondary, main];
// console.log(main, secondary);

let a = 10;
let b = 15;

[a, b] = [b, a]
// console.log(a, b);

const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse);

// Nested array
const nested = [1, 2, 3, [5, 6, 7]];

// const [i, j, k, g] = nested;
const [i, j, k, [g, h, o]] = nested;
console.log(g, h, o);

// Default value
const [p = 2, q = 3, r = 1] = [9, 8];
console.log(p, q, r);
*/