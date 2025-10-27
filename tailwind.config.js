// tailwind.config.js (JS version to avoid any loader ambiguity)
const aspectRatio = require('@tailwindcss/aspect-ratio')

/** @type {import('tailwindcss').Config} */
module.exports = {
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
      borderRadius: { lg: '0.5rem', xl: '0.75rem' },
    },
  },
  plugins: [aspectRatio],
}
