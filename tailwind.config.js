 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
       colors: {
        'light-gray': '#fbfbfb',
        'medium-gray': '#f2f2f2',
        'dark-gray': '#e3e3e3',
      },

      spacing: {
        '18': '72px',
        '25': '100px',
        '9.5': '38px',
      },

      width: {
        '15.25': '61%',
        '7.5': '30%',
        '5': '20%',
        '22.75': '91%',
      },
     },

      fontSize: {
      '8': '32px',
      '5.3325': '21.33px',
      '4.665': '18.66px',
      
    }



   },
   plugins: [],
 }