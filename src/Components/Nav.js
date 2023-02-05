import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { CiShoppingBasket, CiShop, CiSearch } from 'react-icons/ci';

export default function Nav({ cartCount }) {
  return (
    <div>
      <section className="text-center text-white bg-theme  py-2 mb-4">
        <span className="font-bold">FREE</span> SHIPPING ON{' '}
        <span className="font-bold">ALL</span> ORDERS{' '}
      </section>
      <div className="flex justify-between items-center mx-8 mb-4">
        <Link to={'/'}>
          <img
            className="h-12"
            alt="logo"
            src="https://i.imgur.com/Zwbrni5.png"
          />
        </Link>
        <div className="flex items-center gap-5">
          <div className="hover:cursor-pointer hover:text-theme">
            Your Account
          </div>
          <IconContext.Provider value={{ size: '1.5em' }}>
            <Link
              to={'/shop'}
              className="hover:cursor-pointer hover:text-theme"
            >
              <CiShop />
            </Link>
            <Link
              to={'/cart'}
              className="hover:cursor-pointer hover:text-theme"
            >
              <div className="flex justify-center items-center h-2 gap-1">
                <CiShoppingBasket />
                <p className="text-xs">( {cartCount} )</p>
              </div>
            </Link>

            <CiSearch className="hover:cursor-pointer hover:text-theme" />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
