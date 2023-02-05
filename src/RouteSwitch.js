import React, { useEffect, useState } from 'react';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Nav from './Components/Nav';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import ItemDetails from './Components/ItemDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useImmer } from 'use-immer';

export default function RouteSwitch() {
  const [cart, setCart] = useImmer([]);
  const [cartCount, setCartCount] = useState(0);

  function sumQuantity(items, prop) {
    return items.reduce(function (acc, curr) {
      return acc + curr[prop];
    }, 0);
  }

  useEffect(() => {
    setCartCount(sumQuantity(cart, 'quantity'));
  }, [cart]);

  return (
    <div className="h-screen">
      <BrowserRouter>
        <Nav cartCount={cartCount} />
        <div className="flex flex-col">
          <div>
            <Routes>
              <Route path="/shopping-cart" element={<Home />} />
              <Route path="/shopping-cart/shop" element={<Shop />} />
              <Route
                path="/shopping-cart/shop/:id"
                element={<ItemDetails cart={cart} setCart={setCart} />}
              />
              <Route
                path="/shopping-cart/cart"
                element={<Cart cart={cart} setCart={setCart} />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
