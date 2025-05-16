import React, { useState } from "react";

const App = () => {
  // Sample product data
  const products = [
    { id: 1, name: "Laptop", price: 999.99, available: true },
    { id: 2, name: "Smartphone", price: 799.99, available: false },
    { id: 3, name: "Headphones", price: 199.99, available: true },
    { id: 4, name: "Monitor", price: 299.99, available: true },
  ];

  // State to manage the cart
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Available Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>
              {product.name} - ${product.price.toFixed(2)}
            </span>
            {product.available ? (
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            ) : (
              <span>Out of Stock</span>
            )}
          </li>
        ))}
      </ul>

      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}{" "}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default App;
