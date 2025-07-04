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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
       boxShadow: {
        "card-shadow": '0px 0px 20px 0px #272D2F1A',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'germania': ['Germania One', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
