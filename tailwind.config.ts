import type { Config } from 'tailwindcss'

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
          aqua:   '#4CBEBE',
          stone:  '#F5F5F0',
          sand:   '#E9E6DD',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,24,40,0.06), 0 1px 3px rgba(16,24,40,0.10)',
      },
      borderRadius: {
        xl: '0.75rem',
      },
    },
  },
  plugins: [],
}
export default config
