/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind will scan these files for classes
  ],
  theme: {
    extend: {
      colors: {
        scrollbarThumb: '#FFc205', // Custom thumb color
        scrollbarTrack: '#f4f4f4', // Custom track color
      },
    },
  },
  plugins: [require('tailwind-scrollbar')], // Add the scrollbar plugin
  variants: {
    scrollbar: ['rounded'], // Add optional rounded variant
  },
};
