//* class inheritance

// const Person = function (name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
// };

// Person.prototype.calculateAge = function (year) {
//     return year - this.birthYear;
// };

// const mir = new Person("Mir", 1970);
// console.log(mir.calculateAge(2058));

// const Student = function(name, birthYear, subject) {
    // this.name = name;
    // this.birthYear = birthYear;
//     Person.call(this, name, birthYear);
//     this.subject = subject;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.intro = function () {
//     return `I am ${this.name}`;
// };

// const mezba = new Student("Mezba Abedin", 1965, "Science");

// console.log(mezba.calculateAge(2001));
// console.log(mezba.intro());
// console.log(Person.prototype);

class Person {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }

    calculateAge() {
        return 2030 - this.birthYear;
    }
}

const mizan = new Person("Mizan", 1980);
console.log(mizan);

class Student extends Person {
    constructor(name, birthYear, subject) {
        super(name, birthYear);
        this.subject = subject;
    }
    // calculateAge() {
    //     return 2040 - this.birthYear;
    // }
}

const fahim = new Student("Fahim", 1988, "CSE");
// console.log(fahim.calculateAge());
console.log(fahim);