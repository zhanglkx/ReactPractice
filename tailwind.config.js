/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    colors: {
      //自定义颜色
      custom: "yellow",
      pink: "#ff49db",
      theme: "#fefefe",
      tahiti: {
        100: "orange",
        200: "#a5f3fc",
        DEFAULT: "#06b6d4",
        testColor: "#06b6d4",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
      extend: {},
    },
    plugins: [],
  },
};
