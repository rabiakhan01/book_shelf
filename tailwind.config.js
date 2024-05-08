/** @type {import('tailwindcss').Config} */
import {
  primaryColor,
  secondaryColor,
  yellowColor500,
  yellowColor700,
  blackColor60,
  whiteColor,
  yellowColor400,
  grayColor,
  blackColor38,
  blackColor
} from './src/utils/styles/color';

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'primaryColor': primaryColor,
      'secondaryColor': secondaryColor,
      'yellowColor400': yellowColor400,
      'yellowColor500': yellowColor500,
      'yellowColor700': yellowColor700,
      'blackColor': blackColor,
      'blackColor38': blackColor38,
      'blackColor60': blackColor60,
      'whiteColor': whiteColor,
      'grayColor': grayColor,
    },
    extend: {},
  },
  plugins: [],
}

