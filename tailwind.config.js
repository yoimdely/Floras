/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#05070d",
          950: "#03040a",
          900: "#060910"
        },
        ocean: "#0e1a2b",
        emerald: "#30D086"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 20% 20%, rgba(48,208,134,0.35), transparent 55%), radial-gradient(circle at 80% 30%, rgba(80,182,206,0.25), transparent 55%)"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"]
      },
      boxShadow: {
        glass: "0 25px 50px -12px rgba(15, 23, 42, 0.4)"
      }
    }
  },
  plugins: []
};
