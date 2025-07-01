/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        primary: {
          50: '#f0f9f6',
          100: '#dcf2ea',
          200: '#bce5d6',
          300: '#8dd1ba',
          400: '#5ab599',
          500: '#389a7d',
          600: '#2a7d65',
          700: '#236553',
          800: '#1f5244',
          900: '#063D3B', // Updated primary dark green
        },
        secondary: {
          50: '#f6f9f8',
          100: '#ecf3f1',
          200: '#d5e6e0',
          300: '#b1d0c6',
          400: '#86b5a6',
          500: '#6B9B8A', // Secondary muted teal/sage
          600: '#5a8a78',
          700: '#4a7366',
          800: '#3e5f56',
          900: '#354f48',
        },
        accent: {
          50: '#fefcf0',
          100: '#fef7d9',
          200: '#fdedb3',
          300: '#fbe083',
          400: '#f8d051',
          500: '#F4C542', // Accent warm yellow/gold
          600: '#e0a821',
          700: '#bb8518',
          800: '#986a19',
          900: '#7c5619',
        },
        cream: {
          50: '#FAFAFA', // Main cream color
          100: '#f7f7f7',
          200: '#f0f0f0',
          300: '#e8e8e8',
          400: '#d6d6d6',
          500: '#c4c4c4',
          600: '#a3a3a3',
          700: '#828282',
          800: '#666666',
          900: '#525252',
        },
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#2D2D2D', // Main charcoal color
        },
        // Background colors using new palette
        bg: {
          1: '#FAFAFA', // Cream background
          2: '#f6f9f8', // Light secondary tint
          3: '#FFFFFF', // Pure white
        },
        // Text colors using charcoal
        text: {
          primary: '#2D2D2D', // Charcoal
          secondary: '#5d5d5d',
          muted: '#888888',
        }
      },
      fontFamily: {
        sans: ['"Work Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
        serif: ['Adamina', 'serif'],
        heading: ['Adamina', 'serif'],
        'work-sans': ['"Work Sans"', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
      }
    },
  },
  plugins: [],
};