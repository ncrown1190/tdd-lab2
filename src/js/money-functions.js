const formatCurrency = (amount) => {
  if (amount >= 0) {
    amount = amount.toFixed(2);
    console.log("positive amount", amount);
    return `$${amount}`;
  } else {
    amount = Math.abs(amount);
    amount = amount.toFixed(2);
    console.log("negative amount", amount);
    return `-$${amount}`;
  }
};
console.log(formatCurrency(-25));

const getCoins = (cents) => {
  let numOfQuarters = Math.floor(cents / 25);

  let remainingChange = (cents - 25 * numOfQuarters).toFixed(2);

  let numOfDimes = Math.floor(remainingChange / 10);

  remainingChange = (cents - 25 * numOfQuarters - 10 * numOfDimes).toFixed(2);

  let numOfNickels = Math.floor(remainingChange / 5);

  remainingChange = (
    cents -
    25 * numOfQuarters -
    10 * numOfDimes -
    5 * numOfNickels
  ).toFixed(2);

  let numOfPennies = Math.floor(remainingChange / 1);

  let coins = {
    quarters: numOfQuarters,
    dimes: numOfDimes,
    nickels: numOfNickels,
    pennies: numOfPennies,
  };

  return coins;
};
console.log(getCoins(116));

module.exports = { formatCurrency, getCoins };
