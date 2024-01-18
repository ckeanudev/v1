import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-1": "#FFFFFF",
        "light-2": "#F8F9FA",
        "light-3": "#E9ECEF",
        "light-4": "#DEE2E6",
        "light-5": "#CED4DA",

        "dark-1": "#212529",
        "dark-2": "#343A40",
        "dark-3": "#495057",
        "dark-4": "#6C757D",
        "dark-5": "#ADB5BD",
      },

      backgroundImage: {
        "hero-bg": "url('/images/heroBG2.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
