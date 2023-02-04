import React from 'react';

export default function Cart({ cart, setCart }) {
  function handleRemoveFromCart(id) {
    setCart(cart.filter((item) => item.API.id !== id));
  }
  return (
    <div>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            {item.API.title},{item.quantity}
            <button onClick={() => handleRemoveFromCart(item.API.id)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
