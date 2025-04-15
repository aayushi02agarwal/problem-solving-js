const worker = new Worker('/webWorkers/worker.js');
const sumButton = document.querySelector("#sumButton");
const bgButton = document.querySelector("#bgButton");

sumButton.addEventListener('click', (event) => {
    worker.postMessage("Hello");
});
worker.onmessage = function (message) {
    alert(`The sum is ${message.data.toString()}`);
}

bgButton.addEventListener('click', (event) => {
    document.body.style.background = document.body.style.background !== "green" ? "green" : "blue";
});