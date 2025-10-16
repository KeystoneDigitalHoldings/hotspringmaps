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
    },
  },
  plugins: [],
}
export default config
