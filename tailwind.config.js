/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: { 
      'sm': '375px',
      'lg': '1024px',
      'xl': '1440px'
    },
    extend: {
      rotate: {
        '90': '90deg',
        '180': '180deg',
        '270': '270deg',
      },
      colors: {
        "darkViolet": "hsl(256, 26%, 20%)",
        "grayishBlue": "hsl(216, 30%, 68%)",
        "veryDarkViolet": "hsl(270, 9%, 17%)",
        "darkGrayishViolet": "hsl(273, 4%, 51%)",
        "veryLightGray": "hsl(0, 0%, 98%)"
      },
      fontFamily: { 
        DM: "DM Serif Display",
        karla: "Karla"
      },
      fontWeight: { 
        400: "400"
      },
    }
  },
  plugins: [],
}

