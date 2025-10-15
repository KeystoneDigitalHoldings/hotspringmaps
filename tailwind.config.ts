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
          moss: '#4CA000',
          aqua: '#4CA0A0',
          stone: '#E3EAE2',
          earth: '#6F4C3E'
        }
      }
    },
  },
  plugins: [],
}
export default config
