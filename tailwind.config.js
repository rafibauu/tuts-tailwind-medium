const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem !important',
          borderRadius: '.25rem !important',
          fontWeight: '600 !important',
        },
        // ...
      })
    })
  ],
}
