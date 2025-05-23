/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#00796B',        // Primary Bold
        'brand-teal-light': '#4DB6AC', // Lighter accent for hover/secondary elements
        'brand-text-dark': '#212529',   // Main body text
        'brand-text-light': '#6C757D',  // Meta text, secondary info
        'brand-bg-light': '#F8F9FA',    // Main background
        'brand-bg-card': '#FFFFFF',     // Card backgrounds
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.brand-text-dark'),
            '--tw-prose-headings': theme('colors.brand-teal'),
            '--tw-prose-lead': theme('colors.brand-text-light'),
            '--tw-prose-links': theme('colors.brand-teal'),
            '--tw-prose-bold': theme('colors.brand-text-dark'),
            '--tw-prose-counters': theme('colors.brand-text-light'),
            '--tw-prose-bullets': theme('colors.brand-teal'),
            '--tw-prose-hr': theme('colors.gray[300]'),
            '--tw-prose-quotes': theme('colors.brand-text-dark'),
            '--tw-prose-quote-borders': theme('colors.brand-teal'),
            '--tw-prose-captions': theme('colors.brand-text-light'),
            '--tw-prose-code': theme('colors.brand-text-dark'),
            '--tw-prose-pre-code': theme('colors.gray[200]'),
            '--tw-prose-pre-bg': theme('colors.gray[800]'),
            '--tw-prose-th-borders': theme('colors.gray[400]'),
            '--tw-prose-td-borders': theme('colors.gray[300]'),
            h1: {
              fontWeight: '700',
            },
            a: {
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            // Add more prose customizations here if needed
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
          "primary": "#00796B",        // brand-teal
          "secondary": "#4DB6AC",      // brand-teal-light
          "accent": "#B08D57",         // Muted Gold (example)
          "neutral": "#212529",       // brand-text-dark
          "base-100": "#F8F9FA",      // brand-bg-light
          "base-200": "#FFFFFF",      // brand-bg-card
          "info": "#007bff",
          "success": "#198754",
          "warning": "#ffc107",
          "error": "#dc3545",

          // Ensuring good contrast for DaisyUI components
          "--rounded-box": "1rem", 
          "--rounded-btn": "0.5rem", 
          "--tab-border": "1px",
          "--tab-radius": "0.5rem", 
        },
      },
    ],
    darkTheme: false, // Disable DaisyUI dark theme if you're not using it explicitly
    base: true, 
    styled: true, 
    utils: true, 
    prefix: "", 
    logs: true, 
    themeRoot: ":root", 
  },
}; 