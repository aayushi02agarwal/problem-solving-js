self.onmessage = function(message) {
    let sum = 0n; // BigInt literal
    for (let i = 0n; i < 1000000000n; i++) {
        sum += i;
    }
    self.postMessage(sum);
}