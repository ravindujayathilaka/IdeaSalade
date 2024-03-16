/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      main: ['Manrope', 'sans-serif'],
      arboria_medium: ['Arboria-Medium', 'sans-serif'],
      arboria_book: ['Arboria-Book', 'sans-serif'],
      header: ['DM Sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      sf_pro: ['SF Pro Display', 'sans-serif'],
    },
    extend: {
      colors: {
        border: '#DDE1E6',
        input: '#CBD5E1',
        ring: '#5e78cc',
        background: '#FFFFFF',
        foreground: '#1D2026',
        primary: {
          DEFAULT: '#AD0008',
          darker: '#700005',
          dark: '#CE000A',
          base: '#D9000A',
          light: '#EF4444',
          lighter: '#FF5860',
          foreground: '#FFFFFF',
        },
        error: '#EF4444',
        success: '#34A853',
        table: '#D9D9D9',
        grey: {
          darker: '#333333',
          dark: '#454545',
          base: '#82868C',
          light: '#DDDDDD',
          lighter: '#E6EBF0',
          lightest: '#F4F4F6',
        },
        secondary: {
          DEFAULT: '#F95299',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: '#e02642',
          foreground: '#f5e1e4',
        },
        muted: {
          DEFAULT: '#fff',
          foreground: '#212B36',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: '#fff',
          foreground: '#212B36',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#212B36',
        },
      },
      borderRadius: {
        lg: `0.5rem`,
        md: `calc(0.5rem - 2px)`,
        sm: `calc(0.5rem - 4px)`,
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('flowbite/plugin')],
};