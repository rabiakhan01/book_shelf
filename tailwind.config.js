/** @type {import('tailwindcss').Config} */

import {
  primaryColor,
  secondaryColor,
  btnPrimaryColor,
  btnsecondaryColor,
  textPrimaryColor,
  textSecondaryColor,
  textLightWhiteColor,
  textLightBlackColor,
  yellowColor700,
  blackColor60,
  whiteColor,
  yellowColor400,
  grayColor,
  textGrayColor,
  blackColor
} from './src/utils/styles/color';

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primaryColor': primaryColor,
        'secondaryColor': secondaryColor,
        'yellowColor400': yellowColor400,
        'btnPrimaryColor': btnPrimaryColor,
        'btnsecondaryColor': btnsecondaryColor,
        'textPrimaryColor': textPrimaryColor,
        'textSecondaryColor': textSecondaryColor,
        'textLightWhiteColor': textLightWhiteColor,
        'textLightBlackColor': textLightBlackColor,
        'yellowColor700': yellowColor700,
        'blackColor': blackColor,
        'textGrayColor': textGrayColor,
        'blackColor60': blackColor60,
        'whiteColor': whiteColor,
        'grayColor': grayColor,
      },
      screens: {
        'xs': '370px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      transitionProperty: {
        'height': 'height'
      }
    },

  },

  plugins: [],
}

