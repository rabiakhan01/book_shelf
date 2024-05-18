/** @type {import('tailwindcss').Config} */

import {
  primaryColor,
  secondaryColor,
  lightYellowColor,
  lightGrayColor,
  chipColor,
  btnPrimaryColor,
  btnsecondaryColor,
  textPrimaryColor,
  textSecondaryColor,
  textLightWhiteColor,
  textLightBlackColor,
  textYellowColor,
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
        'lightYellowColor': lightYellowColor,
        'lightGrayColor': lightGrayColor,
        'chipColor': chipColor,
        'yellowColor400': yellowColor400,
        'btnPrimaryColor': btnPrimaryColor,
        'btnsecondaryColor': btnsecondaryColor,
        'textPrimaryColor': textPrimaryColor,
        'textSecondaryColor': textSecondaryColor,
        'textLightWhiteColor': textLightWhiteColor,
        'textLightBlackColor': textLightBlackColor,
        'textYellowColor': textYellowColor,
        'blackColor': blackColor,
        'textGrayColor': textGrayColor,
        'blackColor60': blackColor60,
        'whiteColor': whiteColor,
        'grayColor': grayColor,
      },
      screens: {
        'extra-small': '320px',
        'small-tab': '463px',
        'sm': '605px',
        'mid-tab': '650px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1290px'
      },
      transitionProperty: {
        'height': 'height'
      }
    },

  },

  plugins: [],
}

