/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/assets/img/homefondo.png')",
        homeleft: "url('/assets/img/home-bg-rect.png')",
        triangules: "url('/assets/img/triangules.png')",
      },
      spacing: {
        136: "50rem",
      },
      fontFamily: {
        mont: "Montserrat",
      },
      colors: {
        ui: "#2EC5CE",
      },
    },
  },
  plugins: [],
};
