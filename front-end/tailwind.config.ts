import type { Config } from "tailwindcss";

const config: Config = {
  content: {
    relative: true,
    transform: (content) => content.replace(/!important/g, ""),
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/*.{html,js}"
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        display: ["Comfortaa", "cursive"],
      },
      colors: {
        "primary": "#00E976"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      safelist: [
        '!duration-[0ms]',
        '!delay-[0ms]',
        'html.js :where([class*="taos:"]:not(.taos-init))'
      ],
    },
  },
  plugins: [
    require('taos/plugin')
  ],
};
export default config;
