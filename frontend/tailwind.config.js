/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        fun: ["sono", "sans-serif"],
      },
      colors: {
        navBlue: {
          DEFAULT: "#15616D",
          400: "#508486",
        },
        backcolor: "#FFECD1",
        bargreen: "#15616D",
        colorAge: "#219aad",
        cream: "#E2DBC5",
        backpink: "#D88C9A",
        backgreen: "#99C1B9",
      },
      backgroundImage: {
        basic: "url('src/assets/Brewery_phone.png')",
        home: "url('src/assets/Home phone.png')",
      },
    },
  },
  plugins: [],
};
