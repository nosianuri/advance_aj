// "use strict";

// const Car = function (brand, price, stock) {
//     this.brand = brand;
//     this.price = price;
//     this.stock = stock;

    //! Avoid this type of action
    // this.totalProfit = function () {
    //     return;
    // };

// };

//* New empty object {} is created.
//* Function is called and, this = {}
//* empty object is linked to prototype
//* Object is returned.

// const m8 = new Car("BMW", 10, 5);
// const modelS = new Car("Tesla", 15, 2);



// Car.prototype.totalProfit = function () {
//     return this.price * this.stock;
// };

// console.log(m8);
// console.log(modelS);

// console.log(Car.prototype);

// console.log(m8.totalProfit());
// console.log(modelS.totalProfit());

// console.log(m8._proto_);
// console.log(modelS);

// const arr = [1,1,5,7,9,2,8,7,3,5,5];
// const obj = {name: "Nuri"};

//! DO NOT DO THIS KIND OF THINGS
// Array.prototype.unique = function () {
//     return [ ...new Set(this)];
// };

//new Array = []

// console.log(arr._proto_._proto_._proto_);
// console.log(arr._proto_._proto_);
// console.log(arr.unique());
//* class Declaration
// class CarCl{
    
// }

//* class Expression
// const CarCl = class {
//     constructor(brand, price, stock){
//         this.brand = brand;
//         this.price = price;
//         this.stock = stock;
//     }

    // Instance Method
    // totalProfit(){
    //     return this.price * this.stock;
    // }

    //static method
//     static hello() {
//         console.log("Hello world");
//     }
// };

// const m8 = new CarCl("BMW", 10,2);
// const modelX = new CarCl("Tesla", 18,2);

// console.log(m8.totalProfit());
// console.log(modelX._proto_);

// CarCl.hello();
// m8.hello();

//Object.create();

const CarProto = {
    totalProfit() {
        return this.price * this.stock;
    },

    creator(brand, price, stock) {
        this.brand = brand;
        this.price = price;
        this.stock = stock;
    }
};

const m8 = Object.create(CarProto);

// m8.brand = "BMW";
// m8.price = 10;
// m8.stock = 2;
m8.create("BMW", 10, 2);
modelX.create("Tesla", 18, 2);

// console.log(m8._proto_);
console.log(m8.totalProfit());
console.log(modelX);
