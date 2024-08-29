import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        "primary-50":"#3A3938",
        "primary-150":"#C2C2C2",
        "primary-100":"#075985",
        "primary-200":"#bae6fd",
        "primary-300" : "#84cc16",
        "secondary-50": "#e5e7eb ",
        "secondary-100": "#525150",
        "secondary-200": "#739500",
        "secondary-300": "#63C84E",
        // "secondary-300" : "linear-gradient(0deg, #8DB600 20%, #525150 100%)"
      },
      backgroundImage: (theme) => ({
          // "gradient-primary":"linear-gradient(0deg, #134E4A 20%, #525150 100%)",
          // "gradient-secondary":"linear-gradient(0deg, #FF6F00 0%, #525150 100%)",
          // "gradient-primaryTwo":"linear-gradient(90deg, #F69278 0%, #525150 100%)",
          "gradient-primary":"linear-gradient(90deg, #075985 0%, #525150 100%)",
          "gradient-primary-100": "radial-gradient(circle at center, #bae6fd 10%, #F8FAFC 70%)",
          "gradient-primary-200": "radial-gradient(circle farthest-side, #bae6fd, #C7C8CB)",
          "gradient-secondary":"linear-gradient(90deg, rgb(99, 200, 78)0%, #47B0E8 100%)",
          "gradient-secondary-100":"linear-gradient(90deg, rgb(99, 200, 78)0%, #525150 100%)",
          "about-bg":"url('/src/app/assets/consultancy.png')",
          "bg-image":"url('/deskImage.jpg')",
          "fact-image":"url('/factImage.jpg')",
          "home-about":"url('/berlog.png')",

          
      }),
      content: {
        heroImage:"url(/bg-assets3.png')"
      }
    },
    screens: {
      xs: "480px",
      ssm:"600px",
      sm: "850px",
      bm: "1000px",
      md: "1060px",
    }
  },
  plugins: [],
};
export default config;
