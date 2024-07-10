/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-image": "url('/assets/imgs/bg.png')",
      },
    },
  },
  plugins: [],
};
