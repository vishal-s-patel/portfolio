import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        bodyFont: ['Fira Mono', 'monospace'],
        titleFont: ['Inter', 'sans-serif']
      },
      colors: {
        'navy-blue': '#0a192f',
        'lightest-slate': '#CCD6F6',
        'green': '#64ffda',
        'my-slate': '#8892b0'
      }
    },
  },
  plugins: [],
}
export default config
