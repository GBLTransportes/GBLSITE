import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#003366',
        'primary-dark': '#001f3f',
        'secondary': '#0066cc',
        'accent': '#ff6b00',
        'golden': '#D4A74E',
        'golden-dark': '#B8952A',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #D4A74E 0%, #4DA8AD 40%, #003D5C 100%)',
        'gradient-to-blue': 'linear-gradient(180deg, #D4A74E 0%, #003D5C 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
