/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#142033',
          800: '#1d2b42',
          700: '#2d3d56',
          600: '#41536f'
        },
        parchment: {
          50: '#fffdf7',
          100: '#f8f1e4',
          200: '#eadfc9'
        },
        gold: {
          500: '#b08a32',
          600: '#8d6f25'
        },
        sage: {
          100: '#e7f0e9',
          300: '#9db8a4',
          600: '#54775d'
        },
        scholar: {
          100: '#dfeaf2',
          300: '#91afc4',
          600: '#426f8e'
        },
        amber: {
          100: '#f7ead2',
          600: '#9c6316'
        },
        rose: {
          100: '#f6dedc',
          600: '#a4473f'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif'
        ],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      boxShadow: {
        soft: '0 18px 50px rgba(20, 32, 51, 0.10)',
        line: '0 1px 0 rgba(20, 32, 51, 0.08)'
      }
    }
  },
  plugins: []
};
