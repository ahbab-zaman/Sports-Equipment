/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerImage: "url('./assets/bannerSports.jpg')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0077B6",
          secondary: "#FFD60A",
          accent: "#A7C957",
          neutral: "#F4F4F4",
          "base-100": "#FFFFFF",
        },
        dark: {
          primary: "#0D3B66",
          secondary: "#FFD60A",
          accent: "#6ECB63",
          neutral: "#2C2C2C",
          "base-100": "#1B263B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
