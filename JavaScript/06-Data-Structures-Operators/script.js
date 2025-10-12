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

/////////////////////////////////////////////

// Spread Operator (...)

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