import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ cart, setCart }) {
  const [cartTotal, setCartTotal] = useState(0);

  function handleRemoveFromCart(id) {
    setCart(cart.filter((item) => item.API.id !== id));
  }

  function sumTotal(items, prop, propQuantity) {
    return items.reduce(function (acc, curr) {
      return acc + curr[propQuantity] * curr[prop].price;
    }, 0);
  }

  useEffect(() => {
    setCartTotal(Math.round(sumTotal(cart, 'API', 'quantity') * 100) / 100);
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
    if (item.quantity >= 2) {
      setCart((draft) => {
        draft[index] = { API: item.API, quantity: draft[index].quantity - 1 };
      });
    }
  }

  return (
    <>
      {cart.length > 0 && (
        <div className="flex flex-col justify-center items-center  mb-2 mt-4 font-serif text-3xl">
          <p>Cart</p>
          <hr class="w-96 h-0.5 mx-auto my-6  border-0 rounded  bg-gray-200" />
        </div>
      )}
      {cart.length > 0 ? (
        cart.map((item, index) => {
          return (
            <div
              key={item.id}
              className="flex justify-center items-center gap-24 mb-4"
            >
              <div className="flex gap-6">
                <img src={item.API.image} alt={item.name} className="h-20" />
                <div className="flex flex-col items-start">
                  <p className="w-36 font-light mb-2">{item.API.title}</p>
                  <button
                    onClick={() => handleRemoveFromCart(item.API.id)}
                    className="border border-gray-400 rounded-full py-2 px-3 text-xs"
                  >
                    REMOVE
                  </button>
                </div>
              </div>

              <p className="w-36">$ {item.API.price}</p>

              <div key={item.id}>
                <button
                  onClick={() => handleSubtract(index, item)}
                  className="border hover:bg-gray-200 text-black font-light  px-4 h-10 border-gray-400 text-sm"
                >
                  -
                </button>
                <input
                  onChange={(e) => handleQuantityChange(e, index, item)}
                  value={item.quantity}
                  className="text-center bg-transparent border w-24 h-10"
                />
                <button
                  onClick={() => handleAdd(index, item)}
                  className="border hover:bg-gray-200 text-black font-light h-10  px-4 border-gray-400 text-sm"
                >
                  +
                </button>
              </div>
              <p className="w-36">$ {item.quantity * item.API.price}</p>
            </div>
          );
        })
      ) : (
        <div className="flex flex-col justify-center items-center mt-36 mb-96">
          <p className="  text-gray-300 text-5xl font-serif mb-6">
            Your Cart is Empty!
          </p>
          <Link to={'/shopping-cart/shop'}>
            <button className="bg-theme hover:bg-gray-600 text-white font-light py-4 px-16  border-gray-400 rounded shadow text-sm mt-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
      {cart.length > 0 && (
        <div className="flex flex-col justify-center items-center text-3xl mb-48 mt-8">
          <hr class="w-96 h-0.5 border-0 rounded bg-gray-200 mb-12" />
          <div className="flex flex-col items-center">
            <div className="text-lg flex gap-96 mb-2">
              <p>Subtotal</p>
              <p>$ {cartTotal}</p>
            </div>

            <button className="bg-theme hover:bg-gray-300 text-white hover:text-black font-light py-4 px-16  border-gray-400 rounded shadow text-sm mt-4">
              CHECKOUT
            </button>
          </div>
        </div>
      )}
    </>
  );
}
