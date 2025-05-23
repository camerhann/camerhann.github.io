/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-lime': '#00FF00',
        'brand-pink': '#FF00FF',
        'brand-text-dark': '#212529',
        'brand-text-light': '#6C757D',
        'brand-bg-light': '#F8F9FA',
        'brand-bg-card': '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'sans-serif'],
        serif: ['var(--font-noto-sans)', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.brand-text-dark'),
            '--tw-prose-headings': theme('colors.brand-text-dark'),
            '--tw-prose-lead': theme('colors.brand-text-light'),
            '--tw-prose-links': theme('colors.brand-pink'),
            '--tw-prose-bold': theme('colors.brand-text-dark'),
            '--tw-prose-counters': theme('colors.brand-text-light'),
            '--tw-prose-bullets': theme('colors.brand-pink'),
            '--tw-prose-hr': theme('colors.gray[300]'),
            '--tw-prose-quotes': theme('colors.brand-text-dark'),
            '--tw-prose-quote-borders': theme('colors.brand-lime'),
            '--tw-prose-captions': theme('colors.brand-text-light'),
            '--tw-prose-code': theme('colors.brand-text-dark'),
            '--tw-prose-pre-code': theme('colors.gray[200]'),
            '--tw-prose-pre-bg': theme('colors.gray[800]'),
            '--tw-prose-th-borders': theme('colors.gray[400]'),
            '--tw-prose-td-borders': theme('colors.gray[300]'),
            h1: {
              fontWeight: '700',
              fontFamily: theme('fontFamily.sans').join(', '),
            },
            h2: {
              fontFamily: theme('fontFamily.sans').join(', '),
            },
            h3: {
              fontFamily: theme('fontFamily.sans').join(', '),
            },
            h4: {
              fontFamily: theme('fontFamily.sans').join(', '),
            },
            h5: {
              fontFamily: theme('fontFamily.sans').join(', '),
            },
            h6: {
              fontFamily: theme('fontFamily.sans').join(', '),
            },
            a: {
              fontFamily: theme('fontFamily.sans').join(', '),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00FF00",
          "secondary": "#FF00FF",
          "accent": "#B08D57",
          "neutral": "#212529",
          "base-100": "#F8F9FA",
          "base-200": "#FFFFFF",
          "info": "#007bff",
          "success": "#198754",
          "warning": "#ffc107",
          "error": "#dc3545",

          "--rounded-box": "1rem", 
          "--rounded-btn": "0.5rem", 
          "--tab-border": "1px",
          "--tab-radius": "0.5rem", 
        },
      },
    ],
    darkTheme: false,
    base: true, 
    styled: true, 
    utils: true, 
    prefix: "", 
    logs: true, 
    themeRoot: ":root", 
  },
}; 