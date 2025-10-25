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

createBooking("HB100");
createBooking("HB100", 18, 12230);

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

checkIn(flight, pass1);

console.log(pass1);