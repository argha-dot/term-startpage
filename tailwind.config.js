module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bg-gray': "#3f3f3f",
        'term-gray': "#1f1f1f"
      },
      boxShadow: {
        'shadow': "0 12px 12px -12px rgba(0, 0, 0, 0.3)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
