/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    colors: {
      //自定义颜色
      color: colors,
      transparent: "transparent",
      current: "currentColor",
      main: "#f5f5f5",
      ccc: "#CCCCCC",
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      borderColor: "#eee",

      extend: {
        colors: {
          "regal-blue": "#243c5a",
        },
      },
    },
    scale: {
      175: "1.75",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    spacing: {
      px: "1px",
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    opacity: {
      0: "0",
      20: "0.2",
      40: "0.4",
      60: "0.6",
      80: "0.8",
      100: "1",
    },
    borderStyle: {
      test111: "border-top-style",
      "t-solid": "border-top-style",
      "r-solid": "border-right-style",
      "b-solid": "border-bottom-style",
      "l-solid": "border-left-style",
    },
    textColor: {
      fontColor: "#7d7d7f",
      ccc: "#CCCCCC",
    },
    extend: {
      width: {
        "1/7": "calc(100% / 7)",
        w100vw: "100vw",
      },
      height: {
        "1/7": "calc(100% / 7)",
        "100vh": "100vh",
      },
      borderStyle: {
        test: "solid",
      },
      borderWidth: {
        1: "1px",
        121212: "2px",
      },
      borderRadius: {
        "4xl": "2rem",
        "2xl": "2rem",
      },
      keyframes: {
        displace: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(-90deg)" },
          "40%": { transform: "rotate(0deg)" },
          "60%": { transform: "rotate(0deg)" },
          "80%": { transform: "rotate(90deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        propel: {
          "0%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(25%)" },
          "40%": { transform: "translateX(-25%)" },
          "60%": { transform: "translateX(25%)" },
          "100%": { transform: "translateX(-25%)" },
        },
        shake: {
          "0%": {
            transform: "translateX(10px)",
          },
          "50%": {
            transform: "translateX(-10px)",
          },
          "100%": {
            transform: "translateX(10px)",
          },
        },
      },
    },
  },

  plugins: [],

  corePlugins: {
    preflight: false, // 添加这一行
  },
};
