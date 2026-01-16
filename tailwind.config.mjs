export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "var(--color-yellow)",
        purple: "var(--color-purple)",
        black: "var(--color-black)",
        white: "var(--color-white)",
      },
    },
  },
  plugins: [],
}