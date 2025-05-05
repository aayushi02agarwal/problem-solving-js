//will wait for all to settle and show the result in array - failure/success

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

Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err);
  });

//Output:
// 0: {status: 'fulfilled', value: 'P1 Success'}
// 1: {status: 'rejected', reason: 'P2 Fail'}
// 2: {status: 'fulfilled', reason: 'P3 Success'}
