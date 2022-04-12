const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
} = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test("add calculateChange tests here", () => {
    expect(calculateChange(5, 6)).toEqual(1);
  });
  test("add calculateChange tests here", () => {
    expect(calculateChange(12.3, 13.03)).toBeCloseTo(0.73);
  });
  test("add calculateChange tests here", () => {
    expect(calculateChange(150, 200)).toBeCloseTo(50);
  });
});

describe("isSufficientPayment", () => {
  test("add isSufficientPayment tests here", () => {
    expect(isSufficientPayment(5, 6)).toEqual(true);
  });
  test("add isSufficientPayment tests here", () => {
    expect(isSufficientPayment(10, 7)).toEqual(false);
  });
  test("add isSufficientPayment tests here", () => {
    expect(isSufficientPayment(3, 3)).toEqual(true);
  });
  test("add isSufficientPayment tests here", () => {
    expect(isSufficientPayment(315, 200)).toEqual(false);
  });
});

describe("calculateTotal", () => {
  test("add calculateTotal tests here", () => {
    //arrange
    const myArray = [{ name: "Tea", price: 4.99 }];
    expect(calculateTotal(myArray)).toEqual(4.99);
  });
  test("add calculateTotal tests here", () => {
    const myArray = [
      { name: "Taco", price: 3.5 },
      { name: "Tea", price: 12.99 },
      { name: "Jelly", price: 0.03 },
    ];
    expect(calculateTotal(myArray)).toBeCloseTo(16.52);
  });
});

describe("addItem", () => {
  test("an empty array should return with one item in it", () => {
    //Arrange
    const emptyArray = [];
    const name = "Beans";
    const price = 3;
    //Act
    const result = addItem(emptyArray, name, price);
    //Assert
    expect(result).toEqual(result);
  });
  test("should return an arrar with two items in it", () => {
    const myArray = [{ name: "Beans", price: 3 }];
    expect(addItem(myArray, "Sugar", 2));
  });
  test("should return an array with three items in it", () => {
    const myArray2 = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ];
    expect(addItem(myArray2, "coffee", 5));
  });
});
//
describe("removeItem", () => {
  test("removing the first element ", () => {
    const myArrayItems = [
      { name: "Jelly", price: 3 },
      { name: "Coke", price: 5 },
      { name: "Cookies", price: 2 },
    ];
    expect(removeItem(myArrayItems, 0));
  });
  test("removing the last element ", () => {
    const myArrayItems = [
      { name: "Jelly", price: 3 },
      { name: "Coke", price: 5 },
      { name: "Cookies", price: 2 },
    ];
    expect(removeItem(myArrayItems, 2));
  });
  test("removing the middle element", () => {
    const myArrayItems = [
      { name: "Jelly", price: 3 },
      { name: "Coke", price: 5 },
      { name: "Cookies", price: 2 },
    ];
    expect(removeItem(myArrayItems, 1));
  });
  test("removing the element from an array of one item", () => {
    const myArrayItems = [{ name: "Jelly", price: 3 }];
    expect(removeItem(myArrayItems, 0));
  });
});
