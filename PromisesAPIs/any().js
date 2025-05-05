//show the result of promise which is fulfilled(success) first

const p1 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P1 Success"), 3000);
  setTimeout(() => reject("P1 Fails"), 3000);
});
const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P2 Success"), 1000);
  setTimeout(() => reject("P2 Fail"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P3 Success"), 2000);
  setTimeout(() => reject("P3 Fails"), 2000);
});

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
    console.log(err.errors);
  });

//Output
//1. if p2 fails => after 2 seconds => P3 Success
//2. if p2 success => after 1 second => P2 Success
//3. if all fail => after 3 seconds => 
    // AggregateError: All promises were rejected 
    // ['P1 Fails', 'P2 Fail', 'P3 Fails']
