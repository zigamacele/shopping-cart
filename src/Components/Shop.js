import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import '../CSS/index.css';

export default function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    const fetchAPI = await fetch(
      "https://fakestoreapi.com/products/category/men's%20clothing"
    );
    const items = await fetchAPI.json();
    setItems(items);
  }

  return (
    <div>
      <div className="bg-shop-page h-96 w-306 bg-cover bg-right mb-14 font-serif text-white flex justify-end items-end ">
        <p className="mr-12 mb-12 text-6xl">Limited Edition</p>
      </div>
      <div className="flex justify-center items-center gap-10 mx-20 mb-36 ">
        {items.map((item) => {
          return (
            <Link key={item.id} to={`/shopping-cart/shop/${item.id}`}>
              <div key={item.id} className="flex flex-col">
                <img
                  alt={item.title}
                  src={item.image}
                  className="h-72 w-72  mb-6"
                />
                <p className="mb-2 hover:text-theme">{item.title}</p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p>{item.rating.count} Reviews</p>
                </div>

                <p>$ {item.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
