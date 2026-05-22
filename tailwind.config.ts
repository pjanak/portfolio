import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#FFCA05',       // AD Architects gold — primary brand accent
          'blue-dark': '#CB9D14', // hover state
          'blue-light': '#FFF8D6', // light tint for badges / selected states
          navy: '#575756',        // dark charcoal (their secondary dark)
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F0F0EE',         // matches their #e5e5e5 lightened slightly
          dark: '#575756',        // AD Architects dark charcoal
        },
        ink: {
          DEFAULT: '#575756',     // primary text — their dark gray
          body: '#575756',
          muted: '#9C9B9B',       // their medium gray
          subtle: '#CECECD',      // their lighter gray
        },
        border: {
          DEFAULT: '#E5E5E5',
          dark: '#3A3A39',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
