module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [
        "from-green-200",
        "to-green-300",
        "from-red-200",
        "to-red-300",
        "from-blue-200",
        "to-blue-300",
        "from-yellow-200",
        "to-yellow-300",
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Jost", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
