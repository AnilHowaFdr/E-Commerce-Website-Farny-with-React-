/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        primary: ["sans-serif", "Poppins"],
        secondary: ["sans-serif", "Jost"],
      },
      colors: {
        brand: "#B88E2F",
        primary: "#3A3A3A",
        secondary: "#FCF8F3",
      },
    },
  },
  plugins: [],
};
