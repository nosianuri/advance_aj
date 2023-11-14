//* call() and apply()

const shohag = {
    company: "Shohag",
    serialCode: "SH",
    bookings: [],

    // book: function(){}
    book(name, id) {
        console.log(`${name} booked a seat in ${this.company} ${this.serialCode} ${id}`);

        this.bookings.push({
            name,
            bus: `${this.company} ${this.serialCode}${id}`,
        });
    },
};

shohag.book("Mir Hussain", 110);
console.log(shohag.bookings);

const book = shohag.book;

// book("Mezba Abedin", 255);

book.call(shohag, "Mezba Abedin", 255);

console.log(shohag.bookings);

const hanif = {
    company: "Hanif",
    serialCode: "HA",
    bookings: [],
};

const bookingInfo = ["Abdullah Al Fahim", 555];

book.call(hanif, ...bookingInfo);
console.log(hanif.bookings);