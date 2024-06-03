/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        background: "#09090A",
      },
      fontFamily: {
        regular: "Inter_400Regular",
        semibold: "Inter_400SemiBold",
        bold: "Inter_400Bold",
        extrabold: "Inter_400ExtraBold",
      },
    },
  },
  plugins: [],
};
