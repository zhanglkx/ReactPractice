/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    colors: {
      //自定义颜色
      color:colors,
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      slate:colors.slate,
      zinc:colors.zinc,
      white: colors.white,
      indigo: colors.indigo,
      red: colors.rose,
      orange:colors.orange,
      yellow: colors.amber,
      green: colors.emerald,
      purple: colors.violet,  
      blue: colors.blue,    
      extend: {
        colors: {
          'regal-blue': '#243c5a',
        },
      },
    },
    plugins: [],
  },
};
