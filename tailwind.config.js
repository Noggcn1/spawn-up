/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    fontSize: {
      0.4: '0.4rem', // Tamanho de fonte 0.4rem
      0.5: '0.5rem', // Tamanho de fonte 0.5rem
      0.6: '0.6rem', // Tamanho de fonte 0.6rem
      0.7: '0.7rem', // Tamanho de fonte 0.7rem
      0.8: '0.8rem', // Tamanho de fonte 0.8rem
      0.9: '0.9rem', // Tamanho de fonte 0.9rem
      '1.0': '1rem', // Tamanho de fonte 1.0rem
      1.1: '1.1rem', // Tamanho de fonte 1.1rem
      1.2: '1.2rem', // Tamanho de fonte 1.2rem
      1.3: '1.3rem', // Tamanho de fonte 1.3rem
      1.4: '1.4rem', // Tamanho de fonte 1.4rem
      1.5: '1.5rem', // Tamanho de fonte 1.5rem
      1.6: '1.6rem', // Tamanho de fonte 1.6rem
      1.7: '1.7rem', // Tamanho de fonte 1.7rem
      1.8: '1.8rem', // Tamanho de fonte 1.8rem
      1.9: '1.9rem', // Tamanho de fonte 1.9rem
      '2.0': '2rem', // Tamanho de fonte 2.0rem
      2.1: '2.1rem', // Tamanho de fonte 2.1rem
      2.2: '2.2rem', // Tamanho de fonte 2.2rem
      2.3: '2.3rem', // Tamanho de fonte 2.3rem
      2.4: '2.4rem', // Tamanho de fonte 2.4rem
      2.5: '2.5rem', // Tamanho de fonte 2.5rem
      2.6: '2.6rem',
      2.7: '2.7rem',
      2.8: '2.8rem',
      2.9: '2.9rem',
      '3.0': '3rem',
      3.1: '3.1rem',
      3.2: '3.2rem',
      3.3: '3.3rem',
      3.4: '3.4rem',
      3.5: '3.5rem',
      3.6: '3.6rem',
      3.7: '3.7rem',
      3.8: '3.8rem',
      3.9: '3.9rem',
      '4.0': '4rem',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        interFamily: ['var(--font-family-inter)', 'sans'],
        orbitronFamily: ['var(--font-family-orbitron)', 'sans'],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        extraLight: 200, // Adicione outras variações de peso conforme necessário
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border2: 'rgba(255, 255, 255, 0.10)',
        bgGreen: 'rgba(40, 245, 190, 0.10)',
        bgRed: 'rgba(245, 51, 91, 0.10)',
        buttonForeground: '#17171B',
        redPrimary: '#F5335B',
        redSecondary: 'rgba(245, 51, 91, 0.10)',
        greenPrimary: '#28F5BE',
        greenSecondary: 'rgba(40, 245, 190, 0.10)',
        orangePrimary: '#F58D1B',
        orangeSecondary: 'rgba(245, 141, 27, 0.10)',
        gray: '#7B7B7B',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
      boxShadow: {
        green: '0px 4px 68px 0px rgba(40, 245, 190, 0.50)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
