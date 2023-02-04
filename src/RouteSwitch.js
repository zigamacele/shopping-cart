import React, { useState } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop';
import Nav from './Components/Nav';
import Cart from './Components/Cart';
import ItemDetails from './Components/ItemDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function RouteSwitch() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/shop/:id"
          element={<ItemDetails cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}
