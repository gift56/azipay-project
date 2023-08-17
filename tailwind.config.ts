import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#11453B",
        army: "#B4A572",
        danger: "#EA4E4B",
        dark: "#292A29",
        gray1: "#515251",
      },
      fontFamily: {
        samp: "'Satoshi', sans-serif",
      },
      screens: {
        tab: "920px",
      },
      backgroundImage: {
        heroImg: "url('/imgs/heroImg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
