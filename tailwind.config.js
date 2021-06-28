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
        "bg-green-700",
        "from-red-200",
        "to-red-300",
        "bg-red-700",
        "from-blue-200",
        "to-blue-300",
        "bg-blue-700",
        "from-yellow-200",
        "to-yellow-300",
        "bg-yellow-700",
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
