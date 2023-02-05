import React, { useState, useEffect } from 'react';

export default function Cart({ cart, setCart }) {
  const [cartTotal, setCartTotal] = useState(0);

  function handleRemoveFromCart(id) {
    setCart(cart.filter((item) => item.API.id !== id));
  }

  function sumTotal(items, prop, propQuantity) {
    return items.reduce(function (acc, curr) {
      console.log(curr[prop].price);
      return acc + curr[propQuantity] * curr[prop].price;
    }, 0);
  }

  useEffect(() => {
    setCartTotal(sumTotal(cart, 'API', 'quantity'));
  }, [cart]);

  function handleQuantityChange(e, index, item) {
    setCart((draft) => {
      draft[index] = { API: item.API, quantity: Number(e.target.value) };
    });
  }

  function handleAdd(index, item) {
    setCart((draft) => {
      draft[index] = { API: item.API, quantity: draft[index].quantity + 1 };
    });
  }

  function handleSubtract(index, item) {
    if (item.quantity >= 1)
      setCart((draft) => {
        draft[index] = { API: item.API, quantity: draft[index].quantity - 1 };
      });
  }

  return (
    <div>
      {cart.map((item, index) => {
        return (
          <div key={item.id}>
            {item.API.title},{item.quantity}
            <button onClick={() => handleRemoveFromCart(item.API.id)}>
              remove
            </button>
            <div key={item.id}>
              <button onClick={() => handleSubtract(index, item)}>-</button>
              <input
                onChange={(e) => handleQuantityChange(e, index, item)}
                value={item.quantity}
              />
              <button onClick={() => handleAdd(index, item)}>+</button>
            </div>
          </div>
        );
      })}
      <div>Total: ${cartTotal}</div>
    </div>
  );
}
