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
      white: colors.white,
      indigo: colors.indigo,
      red: colors.rose,
      orange:colors.orange,
      yellow: colors.amber,
      green: colors.emerald,
      purple: colors.violet,  
      blue: colors.blue,    
      blueInit: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      extend: {
        colors: {
          'regal-blue': '#243c5a',
          amber: colors.amber,
          emerald: colors.emerald,
        },
      },
    },
    plugins: [],
  },
};
