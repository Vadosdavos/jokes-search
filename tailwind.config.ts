import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';


const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'fira': ['Fira Sans', ...defaultTheme.fontFamily.sans],
        'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
