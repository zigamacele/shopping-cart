/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/Images/Hero_Banner.webp')",
        'home-page-1': "url('/src/Images/Home_Page_Best_Sell_1.webp')",
        'home-page-2': "url('/src/Images/Home_Page_Best_Sell_2.webp')",
        'shop-page': "url('/src/Images/Shop.webp')",
      },
      colors: {
        theme: '#443879',
      },
      height: {
        'best-seller': '45rem',
      },
      width: {
        'best-seller': '42rem',
      },
    },
  },
  plugins: [],
};
