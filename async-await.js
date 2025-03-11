const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise Resolved1"),5000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise Resolved2"),10000);
})

async function handlePromises() {
    console.log("hello");
    const value1 = await p1;
    console.log(value1);
    const value2 = await p2;
    console.log(value2);
}

// // function handlePromises() {
// //     p.then((data) => console.log(data));
// //     console.log("Hello world");
// // }
handlePromises();

// async function handlePromises () {
//     try{
//     const value = await fetch("https..");
//     const jsonValue = await value.json();
//     console.log(jsonValue);
//      } catch(err) {
//         console.log(err);
//      }
// }
// handlePromises();