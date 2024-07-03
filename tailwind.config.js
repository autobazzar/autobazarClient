/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      dast: ["dastNevis"],
    },
    extend: {},
    screens: {
      'lg': '1130px',
      // => @media (min-width: 640px) { ... }

      'med': '1129px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
