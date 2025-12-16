import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable manual dark mode toggling
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#D00000", // Deep Red
          50: "#FDF2F2",
          100: "#FDE8E8",
          500: "#D00000",
          600: "#B00000",
          900: "#700000",
        },
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex)"], // Body font
        heading: ["var(--font-outfit)"], // Heading font
        ui: ["var(--font-inter)"], // UI elements
      },
    },
  },
  plugins: [],
};
export default config;
