/** @type {import('tailwindcss').Config} */

import {
  primaryColor,
  secondaryColor,
  lightYellowColor,
  lightGrayColor,
  chipColor,
  lightBlackColor,
  blackTaupeColor,
  btnPrimaryColor,
  btnsecondaryColor,
  textPrimaryColor,
  textSecondaryColor,
  textLightWhiteColor,
  textLightBlackColor,
  textYellowColor,
  textLightGrayColor,
  placeholderTextColor,
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
        'lightBlackColor': lightBlackColor,
        'yellowColor400': yellowColor400,
        'blackTaupeColor': blackTaupeColor,
        'btnPrimaryColor': btnPrimaryColor,
        'btnsecondaryColor': btnsecondaryColor,
        'textPrimaryColor': textPrimaryColor,
        'textSecondaryColor': textSecondaryColor,
        'textLightWhiteColor': textLightWhiteColor,
        'textLightBlackColor': textLightBlackColor,
        'textYellowColor': textYellowColor,
        'textLightGrayColor': textLightGrayColor,
        'blackColor': blackColor,
        'textGrayColor': textGrayColor,
        'placeholderTextColor': placeholderTextColor,
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

