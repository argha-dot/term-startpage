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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
