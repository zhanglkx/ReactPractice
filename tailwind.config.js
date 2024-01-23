/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    colors: {
      //自定义颜色
      custom: "yellow",
      pink: "#ff49db",
      tahiti: {
        100: "orange",
        200: "#a5f3fc",
        DEFAULT: "#06b6d4",
      },
      extend: {},
    },
    plugins: [],
  },
};
