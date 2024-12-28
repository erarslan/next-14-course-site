/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#0d0c22",
        "purple-soft": "#2d2b42",
        "white-soft": "#e5e5e5",
        "nice-blue": "#3673fd",
      },
      flex: {
        2: "2 1 0%",
      },
    },
  },
  plugins: [],
};
