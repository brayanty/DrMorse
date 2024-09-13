/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
        fontFamily: {
          primaryRegular: ['Regular', 'sans-serif'],
          primaryMedium: ['Medium', 'sans-serif'],
          primarybold: ['Bold', 'sans-serif'],
          titleSemiBold: ['PixelifySans-Semibold'],
          Filano: ['filano'], 
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)'
      },
        colors: {
          primary: '#4A90E2',
          secondary: '#50C8B6',
          text: '#333333',
          error: '#E57373',
          success: '#A5D6A7',
      },
      backgroundImage: {
        'medical-research': "linear-gradient(180deg, hsla(0, 0%, 0%, 0.219) 0%, hsla(0, 0%, 0%, 0.205) 100%),url('src/assets/HeaderImagen/brand.jpg')",
      },
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
     

    },
  },
  plugins: [
       function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value
          })
        },
        { values: theme('textShadow') }
      )
    },
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
}

