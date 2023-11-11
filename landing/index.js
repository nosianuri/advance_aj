"use strict";

const Car = function (brand, price, stack) {
    this.brand = brand;
    this.price = price;
    this.stock = stock;
};
//* New empty object {} is created.
//* Function is called and, this = {}
//* empty object is linked to prototype
//* Object is returned.

const m8 = new Car("BMW", 10, 5);

console.log(m8);