import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [   
     "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
    colors:{
      brand: '#D950C2'
    }
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["light", "dark", "coffee"],
  },
}





