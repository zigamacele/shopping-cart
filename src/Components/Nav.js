import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ cartCount }) {
  return (
    <div className="flex justify-between">
      <div className="text-3xl font-bold">Logo</div>
      <div className="flex gap-5">
        <Link to={'/about'}>
          <div>About</div>
        </Link>
        <Link to={'/shop'}>
          <div>Shop</div>
        </Link>
        <Link to={'/cart'}>
          <div>Cart({cartCount})</div>
        </Link>
      </div>
    </div>
  );
}
