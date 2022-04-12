const { formatCurrency, getCoins } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("0 return $0.00", () => {
    expect(formatCurrency(0)).toEqual("$0.00");
  });
  test("1 return $1.00", () => {
    expect(formatCurrency(1)).toEqual("$1.00");
  });

  test("1.5 return $1.50", () => {
    expect(formatCurrency(1.5)).toEqual("$1.50");
  });

  test("0.01 return $0.01", () => {
    expect(formatCurrency(0.01)).toEqual("$0.01");
  });

  test("527.6789 returns $527.68", () => {
    expect(formatCurrency(527.6789)).toEqual("$527.68");
  });

  test("-1 returns -$1.00", () => {
    expect(formatCurrency(-1)).toEqual("-$1.00");
  });
  test("negative decimal", () => {
    expect(formatCurrency(-0.8)).toEqual("-$0.80");
  });

  test("no number in the ones place in decimal", () => {
    expect(formatCurrency(0.25)).toEqual("$0.25");
  });
});

describe("getCoins", () => {
  test("32 cents gives back: Quarter:1, Dime:0, nickel:1, pennies:2", () => {
    expect(getCoins(32)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2,
    });
  });

  test("10 centsgives back: Quarter:0, Dime:1, nickel:0, pennies:0", () => {
    expect(getCoins(10)).toEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0,
    });
  });

  test("27 cents gives back: Quarter:1, Dime:0, nickel:0, pennies:2", () => {
    expect(getCoins(27)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2,
    });
  });

  test("68 centsgives back: Quarter:2, Dime:1, nickel:1, pennies:3", () => {
    expect(getCoins(68)).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3,
    });
  });

  test("$1 55 cents gives back: Quarter:6, Dime:0, nickel:1, pennies:0", () => {
    expect(getCoins(155)).toEqual({
      quarters: 6,
      dimes: 0,
      nickels: 1,
      pennies: 0,
    });
  });
});
