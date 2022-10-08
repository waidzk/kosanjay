/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FFC700",
          "secondary": "#F000B8",
          "accent": "#0E254F",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#f97316",
          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
