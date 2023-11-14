// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/comments

//*Promises*

// const promise = new Promise((resolve, reject) => {
//     if(false) {
//         resolve("Shob thik ache");
//     }
//     else {
//         reject("Jibon tai loss");
//     }
// });
// // promise.then(console.log);
// // promise.then(res => console.log(res));
// promise
// .then((res) => res + " Kintu ami thik nei")
// .then((res2) => console.log(res2))
// .catch((err) => console.log(err));

// console.log(fetch("https://jsonplaceholder.typicode.com/users"));

// const promise1 = new Promise((resolve) => {
//     setTimeout(resolve, 500, "Hello");
// });

// const promise2 = new Promise((resolve) =>{
//     throw Error;
//     setTimeout(resolve, 3000, "World");
// });

// Promise.all([promise1, promise2])
// .then(console.log)
// .then((err) => console.log("Error"));


// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/comments",
// ];

// Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
// .then((data) => {
//     console.log("users", data[0]);
//     console.log("posts", data[1]);
//     console.log("comments", data[2]);
// })
// .catch((error) => console.log("Error"));

const promise1 = new Promise((resolve) => {
    setTimeout(resolve, 500, "Hello");
});

const promise2 = new Promise((resolve) =>{
    // throw Error("Something went wrong");
    setTimeout(resolve, 3000, "World");
});
const promise3 = new Promise((resolve) =>{
    setTimeout(resolve, 4000, "!?");
});

Promise.all([promise1, promise2, promise3])
.then(console.log)
.then((err) => console.log("Error"))
.finally(console.log("Inside Finally"));