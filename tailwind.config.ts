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
        play: "'Playfair Display', serif",
      },
      screens: {
        tab: "920px",
        monitor: "1600px",
        phone: "365px",
      },
      backgroundImage: {
        heroImg: "url('/imgs/heroImg.png')",
        circleImg: "url('/imgs/circle.png')",
        cardImg: "url('/imgs/cardbg.png')",
        radiantBg:
          "radial-gradient(50% 50.00% at 50% 50.00%, rgba(217, 235, 205, 0.14) 0%, rgba(217, 235, 205, 0.03) 100%), #11453B",
      },
      boxShadow: {
        cardShad:
          "-11px 0px 19px 0px rgba(23, 23, 23, 0.30), 0px 13px 20px 0px rgba(23, 23, 23, 0.20)",
        contactShad: "0px 20px 48px 0px rgba(170, 170, 170, 0.29)",
        payrollShad: "0px 6px 12px 0px rgba(170, 170, 170, 0.11)",
      },
    },
  },
  plugins: [],
};
export default config;
