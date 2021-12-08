module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        lg: "0 10px 15px -3px rgba(220, 38, 38, 0.5), 0 4px 6px -2px rgba(220, 38, 38, 0.1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
