//will throw error if any of the promises fails else if all fulfills then show the results if all in an array

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 3000);
});
const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P2 Success"), 1000);
  setTimeout(() => reject("P2 Fail"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 Success"), 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//Output
// 1. if all success - after 3 seconds - print array of results
// 2. p2 fails - after 1 second - print error