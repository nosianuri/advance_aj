// ERROR HANDLING

// try {
//     console.log("All good");
// } catch (e) {
//     console.log("Something went wrong");
// }

// console.log("All good 2");

// try {
//     console.log("All good");
// } catch (err) {
//     console.log(err.stack);
// }

// try {
//     promise.reject("Bad diye dise ");
//     // throw new SyntaxError
//     // console.log("All ok");
//     // throw new Error("Kisu ekta jhamela hoysa");
// } catch (err) {
//     console.log("Something went wrong", err.message);
// }

// throw new Error("Kichu akta jhamela hoyse");
// console.log("All Ok");

// (async () => {
//     try {
//         await Promise.reject("Bad diye dise ");
//     }
//  catch (err) {
//     console.log(err);
// }
// })();

class myError extends Error {
    constructor(message) {
        super(message);
        this.name = "My Error";
    }
}
class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = "Database Error";
        this.message = "Database e akta bhajal lagche";
    }
}

try {
    throw new DatabaseError();
} catch (err) {
    console.log(err.message);
}