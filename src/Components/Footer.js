import React from 'react';

export default function Footer() {
  return (
    <div>
      <section className="text-white bg-theme  h-64 flex justify-center items-center flex-col">
        <p className="text-2xl mb-4">
          Join our Email List for Exclusive Offers and Updates
        </p>
        <p className="font-light mb-4">
          Be the first to know about special offers, new product launches,
          features, events and more.
        </p>
        <div className="flex gap-3 items-center">
          <input type="text" className="bg-transparent border rounded " />
          <p className="hover:cursor-pointer font-light">SUBSCRIBE</p>
        </div>
      </section>
      <section className="flex items-center justify-center gap-44 my-10 mb-20 font-light">
        <img
          alt="logo"
          src="https://i.imgur.com/GJ97eF5.png"
          className="h-24"
        />
        <div className="flex flex-col gap-4">
          <p>NAVIGATE</p>
          <ul className="flex flex-col gap-2  text-xs">
            <li className="hover:cursor-pointer hover:text-theme">Our Story</li>
            <li className="hover:cursor-pointer hover:text-theme">FAQs</li>
            <li className="hover:cursor-pointer hover:text-theme">
              Employment
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p>THE LAVENDER JOURNAL</p>
          <ul className="flex flex-col gap-2  text-xs">
            <li className="hover:cursor-pointer hover:text-theme">Recipes</li>
            <li className="hover:cursor-pointer hover:text-theme">DIY</li>
            <li className="hover:cursor-pointer hover:text-theme">Wellness</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p>POLICIES</p>
          <ul className="flex flex-col gap-2  text-xs">
            <li className="hover:cursor-pointer hover:text-theme">
              Shipping & Return Policy
            </li>
            <li className="hover:cursor-pointer hover:text-theme">
              Terms of Service
            </li>
            <li className="hover:cursor-pointer hover:text-theme">
              Privacy Policy
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
