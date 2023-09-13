/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PT: ["PT Sans Narrow", "sans-serif"],
        teko: ["Teko", "sans-serif"],
        Kufi: ["Reem Kufi Fun", "sans-serif"],
      },
      colors: {
        background: "#2a2438",
        shade2: "#6c5fa7",
        shade3: "#ECE594",
        shade4: "#8983f3",
        shade5: "#363b4e",
        shade6: "#fffc3a",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
