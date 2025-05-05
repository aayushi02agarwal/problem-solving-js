//show the result of promise which is settled(success or failure) first

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 1000);
  // setTimeout(() => reject("P2 Fail"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 Success"), 2000);
});

Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
//Output:
//1. if p2 fails => after 1 second => Uncaught Error P2 Fail
//2. if all success => after 1 second => P2 Success
