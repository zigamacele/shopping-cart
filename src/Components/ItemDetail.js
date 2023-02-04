import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemDetails({ cart, setCart }) {
  const [item, setItem] = useState([]);
  const [quantity, setQuantity] = useState(0);

  let { id } = useParams();

  useEffect(() => {
    fetchItem();
  }, []);

  async function fetchItem() {
    const fetchAPI = await fetch(`https://fakestoreapi.com/products/${id}`);
    const item = await fetchAPI.json();
    setItem(item);
    console.log(item);
  }

  function handleAdd() {
    setQuantity(quantity + 1);
  }
  function handleSubtract() {
    if (quantity >= 1) setQuantity(quantity - 1);
  }

  function handleAddToCart() {
    setCart([...cart, { API: item, quantity: quantity }]);
    console.log(cart);
  }

  return (
    <div>
      <div key={item.id}>
        {item.title}
        <img alt={item.title} src={item.image} />
      </div>
      <div>
        <button onClick={handleSubtract}>-</button>
        <input
          onChange={(e) => setQuantity(Number(e.target.value))}
          value={quantity}
        />
        <button onClick={handleAdd}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
