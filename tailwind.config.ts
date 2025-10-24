import type { Config } from 'tailwindcss'
import aspectRatio from '@tailwindcss/aspect-ratio'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#2E5538',
          aqua:   '#36A8A8',   // AA-compliant aqua
          stone:  '#F5F5F0',
          sand:   '#E9E6DD',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,24,40,0.06), 0 1px 3px rgba(16,24,40,0.10)',
        menu: '0 4px 10px rgba(16,24,40,0.10)',
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '0.75rem',
      },
      fontSize: {
        h1:    ['2rem',   { lineHeight: '2.5rem', fontWeight: '700' }],
        h2:    ['1.5rem', { lineHeight: '2rem',   fontWeight: '600' }],
        h3:    ['1.25rem',{ lineHeight: '1.75rem',fontWeight: '600' }],
        body:  ['1rem',   { lineHeight: '1.75rem', fontWeight: '400' }],
        small: ['0.875rem',{ lineHeight: '1.5rem', fontWeight: '400' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold:   '700',
      },
    },
  },
  plugins: [aspectRatio],
}
export default config
