/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#071B33',
          dark: '#041426',
          text: '#0A1930',
        },
        brand: {
          DEFAULT: '#0878D1',
          bright: '#0A84E8',
        },
        surface: {
          white: '#FFFFFF',
          off: '#F7F9FC',
          light: '#EEF3F8',
        },
        muted: '#53657A',
        border: '#DCE5EE',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
