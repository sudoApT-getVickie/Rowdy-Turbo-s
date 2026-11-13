import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'win-beige': '#C0C0C0',
        'win-blue': '#0000A8',
        'win-gray-dark': '#808080',
        'win-gray-light': '#DFDFDF',
      },
      fontFamily: {
        pixel: ['"VT323"', 'monospace'],
      },
      boxShadow: {
        'win-outset': 'inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf',
        'win-inset': 'inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080',
      }
    },
  },
  plugins: [],
};
export default config;
