import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'selector',

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

    fontFamily: {
      sans: ['var(--font-sans)', 'sans-serif'],
      mono: ['var(--font-mono)', 'monospace'],
      disp: ['var(--font-disp)', 'var(--font-sans)', 'sans-serif'],
    },

    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        fg: 'rgb(var(--color-fg) / <alpha-value>)',

        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-fg': 'rgb(var(--color-primary-fg) / <alpha-value>)',

        pop: 'rgb(var(--color-pop) / <alpha-value>)',
        'pop-fg': 'rgb(var(--color-pop-fg) / <alpha-value>)',

        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'secondary-fg': 'rgb(var(--color-secondary-fg) / <alpha-value>)',

        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-fg': 'rgb(var(--color-accent-fg) / <alpha-value>)',

        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        'muted-bg': 'rgb(var(--color-muted-bg) / <alpha-value>)',

        error: 'rgb(var(--color-error) / <alpha-value>)',
        'error-bg': 'rgb(var(--color-error-bg) / <alpha-value>)',

        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        'warning-bg': 'rgb(var(--color-warning-bg) / <alpha-value>)',

        success: 'rgb(var(--color-success) / <alpha-value>)',
        'success-bg': 'rgb(var(--color-success-bg) / <alpha-value>)',

        info: 'rgb(var(--color-info) / <alpha-value>)',
        'info-bg': 'rgb(var(--color-info-bg) / <alpha-value>)',

        border: 'rgb(var(--color-border) / <alpha-value>)',
      },

      borderColor: {
        DEFAULT: 'rgb(var(--color-border) / <alpha-value>)',
      },

      animation: {
        'fade-in': 'fade-in 0.15s ease-in-out',
        'float-in': 'float-in 0.15s ease-in-out',
      },

      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
        },

        'float-in': {
          from: { transform: 'translateY(10%)' },
        },
      },
    },
  },
}

export default config
