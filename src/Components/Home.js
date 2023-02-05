import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import icon_button from '../Images/Icons/ico-01.webp';
import ribbon from '../Images/Icons/ico-02.webp';
import bird from '../Images/Icons/ico-03.webp';
import logo1 from '../Images/Logos/logo-atlantic.webp';
import logo2 from '../Images/Logos/logo-bustle.webp';
import logo3 from '../Images/Logos/logo-forbes.webp';
import logo4 from '../Images/Logos/logo-them.avif';
import logo5 from '../Images/Logos/logo-vice.webp';
import icon_glasses from '../Images/Icons/ico-04.avif';
import casual_1 from '../Images/HP_full1.webp';
import casual_2 from '../Images/HP_full2.webp';
import casual_3 from '../Images/HP_full3.webp';
import casual_4 from '../Images/HP_full4.webp';

export default function Home() {
  return (
    <div>
      <section className="bg-hero-pattern bg-cover h-96 text-white flex justify-end items-end mb-20">
        <div className="flex flex-col mr-24 mb-10 items-end text-right">
          <p className="font-light mb-2">WEAR YOUR TRUTH</p>
          <div className="flex flex-col text-5xl mb-4">
            <p>Defying</p>
            <p>Fashion</p>
          </div>
          <p className="font-light">
            Clothing & accessories that let you express your authentic self.
          </p>
          <Link to={'/shopping-cart/shop'}>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-light py-4 px-16  border-gray-400 rounded shadow text-sm mt-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      </section>
      <section className="flex flex-col text-center items-center  mx-52 mb-12 gap-4">
        <img src={icon_button} alt="button" className="h-9 " />
        <p className="text-4xl text-theme">Our Story</p>
        <hr class="w-72 h-0.5 mx-auto my-4  border-0 rounded md:my-2 bg-theme" />
        <p className="font-light">
          We challenge fashion industry norms for what is considered menswear &
          womenswear and instead focus on
          <br /> creating great fitting clothing that makes you feel comfortable
          & confident in who you are.
        </p>
        <button className="text-theme ">READ MORE</button>
      </section>
      <section className="flex justify-center gap-5 mx-52 mb-12">
        <div className="bg-home-page-1 bg-center h-best-seller w-best-seller text-white flex justify-start items-end">
          <div className="flex flex-col ml-10 mb-10 items-start">
            <img src={ribbon} alt="ribbon" className="h-8 w-12 mb-2" />
            <p className="font-light">NEW ARRIVALS</p>
            <p className="text-5xl font-serif mb-6">
              What to
              <br /> Wear Now
            </p>
            <p className="font-light">
              Check out the latest and greatest in our
              <br /> menswear-inspired apparel and accessories.
            </p>
            <Link to={'/shopping-cart/shop'}>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-light py-4 px-16  border-gray-400 rounded shadow text-sm mt-4">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-home-page-2 bg-center h-best-seller w-best-seller text-white flex justify-start items-end">
          <div className="flex flex-col ml-10 mb-10 items-start">
            <img src={bird} alt="ribbon" className="h-8 w-12 mb-2" />
            <p className="font-light">BEST SELLERS</p>
            <p className="text-5xl font-serif mb-6">
              We Can’t
              <br /> Keep These <br /> Stocked
            </p>
            <p className="font-light">
              Check out the latest and greatest in our
              <br /> menswear-inspired apparel and accessories.
            </p>
            <Link to={'/shopping-cart/shop'}>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-light py-4 px-16  border-gray-400 rounded shadow text-sm mt-4">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <hr class="w-wh mx-52 h-0.5  my-4  border-0 rounded md:my-2 bg-gray-300" />
        <div className="flex justify-center items-center gap-28 my-10">
          <img src={logo1} alt="logo" className="h-12" />
          <img src={logo2} alt="logo" className="h-12" />
          <img src={logo3} alt="logo" className="h-12" />
          <img src={logo4} alt="logo" className="h-12" />
          <img src={logo5} alt="logo" className="h-12" />
        </div>
        <hr class="w-wh mx-52 h-0.5  my-4  border-0 rounded md:my-2 bg-gray-300" />
      </section>
      <section className="flex flex-col justify-center items-center bg-gray-200 py-12 mb-12 ">
        <div className="flex flex-col justify-center items-center mb-12">
          <img src={icon_glasses} alt="glasses" className="h-4" />
          <p className="text-sm">CASUAL WEAR</p>
          <p className="text-5xl font-serif mt-2">
            Feel Confident No Matter The Moment
          </p>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col justify-center ">
            <div>
              <img
                src={casual_1}
                alt="casual clothes"
                className="h-80 hover:cursor-pointer"
              />
              <p className="hover:cursor-pointer hover:text-theme text-lg mb-2">
                The Windsor Navy Chinos 29" Inseam
              </p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p>67 reviews</p>
              <p className="font-light">$ 160.00</p>
            </div>
          </div>{' '}
          <div className="flex flex-col justify-center ">
            <div>
              <img
                src={casual_2}
                alt="casual clothes"
                className="h-80 hover:cursor-pointer"
              />
              <p className="hover:cursor-pointer hover:text-theme text-lg mb-2">
                Slim Tapered Indigo Denim Jean
              </p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p>32 reviews</p>
              <p className="font-light">$ 130.00</p>
            </div>
          </div>
          <div className="flex flex-col justify-center ">
            <div>
              <img
                src={casual_3}
                alt="casual clothes"
                className="h-80 hover:cursor-pointer"
              />
              <p className="hover:cursor-pointer hover:text-theme text-lg mb-2">
                The Windsor Light Gray Chinos
              </p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p>16 reviews</p>
              <p className="font-light">$ 175.00</p>
            </div>
          </div>
          <div className="flex flex-col justify-center ">
            <div>
              <img
                src={casual_4}
                alt="casual clothes"
                className="h-80 hover:cursor-pointer"
              />
              <p className="hover:cursor-pointer hover:text-theme text-lg mb-2">
                Olive Basket Weave Sweater
              </p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p>3 reviews</p>
              <p className="font-light">$ 100.00</p>
            </div>
          </div>
        </div>
        <Link to={'/shopping-cart/shop'}>
          <button className="mt-16 bg-black hover:bg-gray-800 text-white font-light py-4 px-16  border-gray-400 rounded shadow text-sm ">
            GO TO SHOP
          </button>
        </Link>
      </section>
    </div>
  );
}
