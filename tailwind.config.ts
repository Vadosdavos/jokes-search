import type { Config } from "tailwindcss";

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
      colors: {
        "chat-bg": "var(--chat-bg)",
        "ecru-white": "var(--ecru-white)",
        "brandy-rose": "var(--brandy-rose)",
        casper: "var(--casper)",
        "chathams-blue": "var(--chathams-blue)",
      },
    },
  },
  plugins: [],
};
export default config;
