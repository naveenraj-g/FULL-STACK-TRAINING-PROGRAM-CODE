"use strict";

// Default arguments
const bookings = [];

const createBooking = function (flightNum, numPass = 1, price = 12000) {
    const booking = {
        flightNum,
        numPass,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

// createBooking("HB100");
// createBooking("HB100", 18, 12230);

const flight = "L345";
const pass1 = {
    name: "Naveen Raj",
    passport: 98684123985,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 98684123985) {
        alert('Checked in');
    } else {
        alert('Wrong passport!');
    }
};

// checkIn(flight, pass1);

// console.log(pass1);

// callback functions

const oneWord = function (str) {
    return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// const str1 = "hello world";
// console.log(str1.split(" ").join(" "));

const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

// transformer("Javascript is fun", oneWord);
// transformer("Javascript is fun", upperFirstWord);

// addEventListener("beforeinput", () => {});

//////////////////////////////////////////////////////////////

// Immediately Invoked Function Expressions (IIFE)

const runOnce = function () {
    console.log('This will never run again');
};
// runOnce();

// (function () {
//     console.log('This will never run again');
// })()

///////////////////////////////////////////////////

// Closures
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();
booker();
booker();
booker();
booker();
booker();