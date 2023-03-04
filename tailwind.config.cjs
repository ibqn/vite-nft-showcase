/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/assets/banner.svg')",
        banner02: "url('/assets/banner02.svg')",
        banner03: "url('/assets/banner03.svg')",
        banner04: "url('/assets/banner04.svg')",
      },
      colors: {
        primary: '#0B65C6',
        secondary: '#EEF1F6',
        tertiary: '#0e1133',

        lightBlue: '#E1F6FE',
        lightPink: '#FDEEDC',
        lightGreen: '#E1FDE2',
      },
      lineHeight: {
        12: '1.2',
        13: '1.3',
        16: '1.6',
      },
    },
    screens: {
      lg: { max: '1800px' },
      md: { max: '990px' },
      sm: { max: '600px' },
      xs: { max: '400px' },
      minmd: '1700px',
      minlg: '2100px',
    },
    fontFamily: {
      IBMPlex: ['IBM Plex Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
