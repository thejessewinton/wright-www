/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Manrope',
          '-apple-system',
          'BlinkMacSystemFont',
          'Helvetica Neue',
          'sans-serif',
        ],
        serif: [
          'Syne',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
      },
    },
  },
  plugins: [],
};
