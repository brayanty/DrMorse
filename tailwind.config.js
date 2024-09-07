/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
          primaryRegular: ['Regular', 'sans-serif'],
          primaryMedium: ['Medium', 'sans-serif'],
          primarybold: ['Bold', 'sans-serif'],
          titleSemiBold: ['PixelifySans-Semibold'],
          Filano: ['filano']
      }
    },
  },
  plugins: [],
}

