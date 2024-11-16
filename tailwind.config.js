/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#FAE3B6",
        borderColor:"#FDBB57",
        lastColor:"#CFA485",
        starColor: ['#FFAF37'],
        priceColor:"#C4C4C4",
        counterBg: ['#FEECC8'],

      },
      fontFamily:{
        pop:['Poppins'],
        frank:['Frank Ruhl Libre'],
        podd:['Podkova'],
      },
      maxHeight:{
        bannerContainer:'1270px',
      },
    },
  },
  plugins: [],
}

