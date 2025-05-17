// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
          heading: ['Lora', 'serif'],
        },
        animation: {
            grow: "grow 0.5s ease-out forwards"
          },
          keyframes: {
            grow: {
              '0%': { transform: 'scale(0.8)', opacity: 0 },
              '100%': { transform: 'scale(1)', opacity: 1 },
            },
          }
      },
    },
    plugins: [],
  };
  