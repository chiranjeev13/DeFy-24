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
      fontFamily: {
        robomon: ["Roboto MonoL", 'sans-serif'],
      },
      boxShadow: {
        'xl': '0.1rem 0.1rem 1rem rgba(153, 255, 82, 1)'
      }
    },
  },
  plugins: [],
}

