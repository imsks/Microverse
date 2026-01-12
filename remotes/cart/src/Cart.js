import { useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <span>{item.title}</span>
          <span>${item.price}</span>
        </div>
      ))}
      <div>Total: ${total.toFixed(2)}</div>
      <button onClick={() => setCartItems([])}>Clear Cart</button>
    </div>
  );
}

export default Cart;
