/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // screens
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440x",
      },
      colors: {
        // Colors
        cl_AlmostWhite: "hsl(0, 0%, 98%)",
        cl_MediumGray: "hsl(0, 0%, 41%)",
        cl_AlmostBlack: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
}
