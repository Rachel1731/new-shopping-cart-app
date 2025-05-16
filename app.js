// ! Exercise 1:

// Use the map() method to iterate over the cart array.

//For each item, apply a 10% discount to its price.

//Store the updated items in a new array called discountedCart.

//Log the discountedCart to the console.

const cart = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 800 },
  { id: 3, name: "Headphones", price: 150 },
];

const discountedCart = cart.map((item) => ({
  ...item,
  price: parseFloat((item.price * 0.9).toFixed(2)),
}));

console.log(discountedCart);

// ! Exercise 2:

//Given a pizzaOrder array, use destructuring to extract the first two toppings.

//Assign them to variables firstTopping and secondTopping.

//Log these variables to the console.

const pizzaOrder = ["Cheese", "Tomato", "Olives", "Mushrooms"];
const [firstTopping, secondTopping] = pizzaOrder;

console.log(firstTopping); // Cheese
console.log(secondTopping); // Tomato

// ! Exercise 3:

//Given a carDetails object, use destructuring to extract the make and model properties.

//Log these properties to the console.

const carDetails = {
  make: "Tesla",
  model: "Model S",
  year: 2022,
};

const { make, model } = carDetails;

console.log(make); // Tesla
console.log(model); // Model S

// ! Exercise 4:

//Given a cartItems array, use the spread operator to create a copy called cartCopy.

//Add a new item to cartCopy and log both arrays to the console.

const cartItems = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 800 },
];

const cartCopy = [...cartItems, { id: 3, name: "Tablet", price: 500 }];

console.log(cartItems); // Original cartItems
console.log(cartCopy); // cartCopy with new item
