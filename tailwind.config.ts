import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* Brand colors */
      colors: {
        brand: {
          forest: '#2E5538',
          aqua:   '#4CBEBE',
          stone:  '#F5F5F0',
          sand:   '#E9E6DD',
        },
      },

      /* Spacing scale (use Tailwind defaults; these ensure we stick to a rhythm) */
      spacing: {
        //  Tailwind already includes 0, 1, 2, 4, 6, 8, 10 (as 0, 0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, 2.5rem)
        //  This reminder is to standardize usage rather than overwrite defaults.
      },

      /* Typography scale (tokens for headings/body) */
      fontSize: {
        // h1/h2/h3 tuned for mobile-first; Tailwind adds responsive variants
        'h1': ['2rem',   { lineHeight: '2.5rem', fontWeight: '700' }], // ~32px
        'h2': ['1.5rem', { lineHeight: '2rem',   fontWeight: '600' }], // ~24px
        'h3': ['1.25rem',{ lineHeight: '1.75rem',fontWeight: '600' }], // ~20px
        'body': ['1rem', { lineHeight: '1.75rem', fontWeight: '400' }], // 16/28
        'small': ['0.875rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 14/24
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
      },

      /* Shadows: card/menu elevations */
      boxShadow: {
        card: '0 1px 2px rgba(16,24,40,0.06), 0 1px 3px rgba(16,24,40,0.10)',
        menu: '0 4px 10px rgba(16,24,40,0.10)', // dropdowns/sheets
      },

      /* Radius defaults */
      borderRadius: {
        lg: '0.5rem',   // 8px
        xl: '0.75rem',  // 12px — used by .card & buttons
      },
    },
  },
  plugins: [],
}
export default config
