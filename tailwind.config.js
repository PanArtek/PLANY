/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A', // Slate 900
          light: '#334155', // Slate 700
          dark: '#020617', // Slate 950
        },
        secondary: {
          DEFAULT: '#2563EB', // Blue 600
          light: '#60A5FA', // Blue 400
          dark: '#1E40AF', // Blue 800
        },
        accent: {
          DEFAULT: '#F59E0B', // Amber 500
          light: '#FCD34D', // Amber 300
          dark: '#B45309', // Amber 700
        },
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#F8FAFC', // Slate 50
        },
        text: {
          DEFAULT: '#0F172A', // Slate 900
          light: '#64748B', // Slate 500
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

