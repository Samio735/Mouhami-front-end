import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary1: "#61BF7B",
        primary2: "#203129",
        sec1: "#407557",
        sec2: "#BAF0DD",
        black: "#423D3D",
        grey1: "#E9E9E9",
        grey2: "#B3B3B3",
        white: "#FCFCFC",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        disabledOpacity: "0.3", // opacity-[0.3]
        radius: {
          small: "0px", // rounded-small
          medium: "0px", // rounded-medium
          large: "0px", // rounded-large
        },
        borderWidth: {
          small: "0px", // border-small
          medium: "5px", // border-medium
          large: "10px", // border-large
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              100: "#ffffff",
              200: "#C8F8C7",
              300: "#A6EBAB",
              400: "#88D896",
              500: "#61BF7B",
              600: "#46A469",
              700: "#30895A",
              800: "#1E6E4C",
              900: "#125B43",

              DEFAULT: "#61BF7B",
              foreground: "#ffffff",
            },

            focus: "#61BF7B",
          },
        },
        dark: {},
      },
    }),
  ],
};
export default config;
