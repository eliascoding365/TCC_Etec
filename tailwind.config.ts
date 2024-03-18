import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        gridTemplateColumns: {
        '3': 'repeat(3, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '3': 'repeat(3, minmax(0, 1fr))',
      },
      backdropBlur: {
        xs: '2px',
      },
      height: {
        '128': '600px',
      },
      widht: {
        '350': '350px',
        '700': '700px'
      }
    },
  },
  plugins: [],
};
export default config;
