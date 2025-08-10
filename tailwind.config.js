// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(date-picker|button|ripple|spinner|calendar|date-input|form|popover).js",
  ],
  theme: {
    extend: {animation: {
        scroll: "scroll var(--animation-duration, 40s) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
      
  },
  darkMode: "class",
  plugins: [heroui()],
};