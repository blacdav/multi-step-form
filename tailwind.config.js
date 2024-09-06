/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(213, 96%, 18%)',
        secondary: 'hsl(243, 100%, 62%)',
        tertiary: 'hsl(228, 100%, 84%)',
        gray: 'hsl(231, 11%, 63%)'
      }
    },
  },
  plugins: [],
}

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
