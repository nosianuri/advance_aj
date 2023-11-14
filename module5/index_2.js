//* 3 promise
//* parallel
//* sequential
//* Race

const promisify = () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(item, delay));
    });
    return promise;
};
const task1 = () => promisify("Task one", 500);
const task2 = () => promisify("Task Two", 100);
const task3 = () => promisify("Task Three", 5000);
// console.log(task1());
const parallel = async () => {
    const promises = [task1(), task2(), task3()];
    const [result1, result2, result3] = await Promise.all(promises);
    return `Parallel Done: ${result1}, ${result2}, ${result3}`;
};

// parallel().then(console.log);

const race = async () => {
    const promises = [task1(), task2(), task3()];
    const result = await Promise.race(promises);
    return `Race Done: ${result}`;
};

// race().then(console.log);

const sequential = async()=> {
    const result1 = await task1();
    console.log(result1);
    const result2 = await task2();
    console.log(result2);
    const result3 = await task3();
    console.log(result3);

    return `Sequential Done: ${result1}, ${result2}, ${result3}`;
};

sequential().then(console.log);