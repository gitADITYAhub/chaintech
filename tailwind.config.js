module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#060606", "900_01": "#030303", "900_02": "#000000" },
        gray: { 700: "#5d5d5d", 900: "#1e1e1e" },
        white: { A700: "#ffffff" },
        teal: { A400_01: "#2bff8a", A400: "#00ffa7" },
        cyan: { A400: "#00f0ff" },
        red: { A200: "#fc5959" },
        indigo: { A700: "#2d45e6" },
        blue_gray: { 300: "#98a5ac" },
      },
      boxShadow: {
        xs: "0px 4px  24px -1px #000000",
        sm: "0px 14px  30px -4px #cecece7f",
        md: "0px 4px  24px -1px #ffffff",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #ffffff66,#ffffff,#ffffff)",
        gradient1: "linear-gradient(270deg, #00ffa7,#ffff00)",
      },
      fontFamily: { poppins: "Poppins", mont: "Mont" },
      textShadow: { ts: "0px 4px  4px #29346e33", ts1: "0px 4px  4px #3f4b8b33" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
