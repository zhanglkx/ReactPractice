/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    colors: {
      //自定义颜色
      color: colors,
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      slate: colors.slate,
      zinc: colors.zinc,
      white: colors.white,
      indigo: colors.indigo,
      red: colors.rose,
      orange: colors.orange,
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
    scale: {
      '175': '1.75',
    },
    extend: {
      width: {
        '1/7': 'calc(100% / 7)',
      },
      keyframes: {
        displace: {
          '0%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(-90deg)' },
          '40%': { transform: 'rotate(0deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '80%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        propel: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(25%)' },
          '40%': { transform: 'translateX(-25%)' },
          '60%': { transform: 'translateX(25%)' },
          '100%': { transform: 'translateX(-25%)' },
        },
        shake: {
          '0%': {
            transform: 'translateX(10px)',
          },
          '50%': {
            transform: 'translateX(-10px)',
          },
          '100%': {
            transform: 'translateX(10px)'
          }
        }
      },
    },
  },

  plugins: [],

  corePlugins: {
    preflight: false, // 添加这一行
  },
};
