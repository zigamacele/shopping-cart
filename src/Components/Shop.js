import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/index.css';

export default function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    const fetchAPI = await fetch(
      'https://fakestoreapi.com/products/category/electronics'
    );
    const items = await fetchAPI.json();
    setItems(items);
  }

  return (
    <div className="grid grid-cols-5">
      {items.map((item) => {
        return (
          <Link key={item.id} to={`/shop/${item.id}`}>
            <div key={item.id}>
              {item.title}
              <img alt={item.title} src={item.image} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
