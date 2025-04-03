const cart = [
  {
    name: "shirt",
    price: 300,
  },
  { name: "pant", price: 200 },
  { name: "tie", price: 500 },
];
var wallet = 2000;
console.log("Wallet: ", wallet);
function validateOrder(cart) {
  return cart.length > 0;
}
function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (validateOrder(cart)) {
      resolve({
        message: "Cart is ready!",
        total: cart.reduce((acc, curr) => {
          acc += curr.price;
          return acc;
        }, 0),
      });
    } else {
      reject("Cart is not valid. Please try again!");
    }
  });
}

function proceedToPayment(orderDetails) {
  return new Promise((resolve, reject) => {
    if (orderDetails.total > 0) {
      resolve({ message: "Payment Successfull", data: orderDetails });
    } else {
      reject("Invalid amount");
    }
  });
}

function showOrderSummary(cart, orderDetails) {
  return new Promise((resolve, reject) => {
    if (cart.length > 0) {
      resolve({
        data: cart,
        total: orderDetails.total,
        message: "Order placed",
      });
    } else {
      reject("Invalid");
    }
  });
}

function updateWallet(wallet, total) {
  return new Promise((resolve, reject) => {
    resolve(wallet - total);
  });
}

createOrder(cart)
  .then((orderDetails) => {
    console.log(orderDetails.message);
    return proceedToPayment(orderDetails);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo.message);
    return showOrderSummary(cart, paymentInfo.data);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .then((orderSummary) => {
    console.log("Order Summry:");
    console.log("Details: ", orderSummary.data);
    console.log("Total: ", orderSummary.total);
    console.log(orderSummary.message);
    return updateWallet(wallet, orderSummary.total);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .then((wallet) => {
    console.log("Wallet: ", wallet);
  });