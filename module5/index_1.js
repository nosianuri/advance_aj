// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/comments

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((data) => console.log(data));

// const fetchUsers = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();

//     console.log(data);
// };

// fetchUsers();

// const promise = new Promise((resolve) => {
//     throw Error;
//     setTimeout(resolve, 1000, "Done");
// });

// const asyncFunction = async () => {
//     try {
//         const result = await promise;
//         console.log(result);
//     } catch(err) {
//         console.log("Error");
//     }
// };

// asyncFunction();

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
];
const fetchData = async () => {
    const [users, posts, comments] = await Promise.all(
        urls.map((url) => fetch(url).then((res) => res.json()))
    );

    console.log(users);
    console.log(posts);
    console.log(comments);
};

fetchData();