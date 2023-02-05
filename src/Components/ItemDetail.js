import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
  }

  function handleAdd() {
    setQuantity(quantity + 1);
  }
  function handleSubtract() {
    if (quantity >= 1) setQuantity(quantity - 1);
  }

  function handleAddToCart() {
    console.log(item);
    if (quantity > 0 && !cart.some((f) => f.API.id === item.id)) {
      setCart((draft) => {
        draft.push({ API: item, quantity: quantity });
      });
    }
  }

  return (
    <div className="mt-4 mb-24 flex justify-center ">
      <div key={item.id} className="flex gap-48">
        <img alt={item.title} src={item.image} className="h-96 w-96" />
        <div className="flex flex-col gap-3">
          <p className="text-2xl">{item.title}</p>
          <div className="flex items-center gap-3"></div>
          <p className="font-light">$ {item.price}</p>

          <hr class="w-96 h-0.5 mx-auto my-6  border-0 rounded  bg-gray-200" />
          <div className="mb-2 flex justify-center items-center gap-3">
            <button
              onClick={handleSubtract}
              className="border hover:bg-gray-200 text-black font-light py-2 px-4 border-gray-400 rounded text-sm"
            >
              -
            </button>
            <input
              onChange={(e) => setQuantity(Number(e.target.value))}
              value={quantity}
              className="text-center bg-transparent border rounded w-72 h-10 "
            />
            <button
              onClick={handleAdd}
              className="border hover:bg-gray-200 text-black font-light py-2 px-4 border-gray-400 rounded text-sm"
            >
              +
            </button>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <button
              onClick={handleAddToCart}
              className=" bg-theme hover:bg-gray-800 text-white font-light w-96 h-12 border-gray-400 rounded shadow text-sm"
            >
              Add to Cart
            </button>
            <Link to={'/shopping-cart/cart'}>
              <button
                onClick={handleAddToCart}
                className="border hover:bg-gray-200 text-black font-light w-96 h-12  border-gray-400 rounded shadow text-sm"
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
