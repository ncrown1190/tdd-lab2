let calculateChange = (total, payment) => {
  return payment - total;
};

const isSufficientPayment = (total, payment) => {
  return true ? payment >= total : false;
};

const calculateTotal = (itemsArray) => {
  let sum = 0;
  for (let items of itemsArray) {
    sum += items.price;
  }
  return sum;
};

const addItem = (itemsArray, name, price) => {
  const newItem = {
    name: name,
    price: price,
  };
  itemsArray.push(newItem);
  console.log(itemsArray);
};

const removeItem = (itemsArray, index) => {
  console.log("before splice", itemsArray);
  itemsArray.splice(index, 1);
  console.log("after splice", itemsArray);
};

module.exports = {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
};
