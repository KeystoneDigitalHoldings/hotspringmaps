import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* Brand colors (AA-compliant aqua) */
      colors: {
        brand: {
          forest: '#2E5538',
          aqua:   '#36A8A8',   // Darker aqua – full AA (white text contrast ≈ 4.55:1)
          stone:  '#F5F5F0',
          sand:   '#E9E6DD',
        },
      },

      /* Optional: Typography tokens (used in your styleguide) */
      fontSize: {
        h1:    ['2rem',   { lineHeight: '2.5rem', fontWeight: '700' }],  // 32/40
        h2:    ['1.5rem', { lineHeight: '2rem',   fontWeight: '600' }],  // 24/32
        h3:    ['1.25rem',{ lineHeight: '1.75rem',fontWeight: '600' }],  // 20/28
        body:  ['1rem',   { lineHeight: '1.75rem', fontWeight: '400' }], // 16/28
        small: ['0.875rem',{ lineHeight: '1.5rem',  fontWeight: '400' }], // 14/24
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold:   '700',
      },

      /* Card/menu elevations used by .card */
      boxShadow: {
        card: '0 1px 2px rgba(16,24,40,0.06), 0 1px 3px rgba(16,24,40,0.10)',
        menu: '0 4px 10px rgba(16,24,40,0.10)',
      },

      /* Roundness used in buttons/cards */
      borderRadius: {
        lg: '0.5rem',
        xl: '0.75rem',
      },
    },
  },
  plugins: [],
}

export default config
