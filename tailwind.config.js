/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'cero': '0px',
      'xs': '330px',
      'md': '650px',
      'xl': '1100px',
      'xlhero': '1500px',
      '2xl': '1350px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero': "url('/bg-black.jpg')",
        'about': "url('/bg-about.jpg')",
        'workspace': "url('/bg-workspace02.jpg')",
        'phrase': "url('/bg-workspace01.jpg')",
      },
      colors: {
        'main-black': '#080300',
        'main-primary': '#00D89D',
        'main-secondary': '#805AFF',
        'secondary-black': '#272727',
        'main-background': '#354747',
        'main-gray': '#323232',
        'main-white': '#F9F9F9',
        'smooth':'rgba(0, 0, 255, 0.8)', 
      },
    },
  },
  plugins: [],
}
