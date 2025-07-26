/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        samurai: ['"Kaushan Script"', '"Rampart One"', '"Zen Tokyo Zoo"', 'cursive'],
        kaushan: ['"Kaushan Script"', 'cursive'],
        rampart: ['"Rampart One"', 'cursive'],
        jpserif: ['"Sawarabi Mincho"', 'serif'],
        body: ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
