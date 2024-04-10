/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        funkyPurple: {
          50: "var(--funkyPurple-50)",
          100: "var(--funkyPurple-100)",
          200: "var(--funkyPurple-200)",
          300: "var(--funkyPurple-300)",
          400: "var(--funkyPurple-400)",
          500: "var(--funkyPurple-500)",
          600: "var(--funkyPurple-600)",
          700: "var(--funkyPurple-700)",
          800: "var(--funkyPurple-800)",
          900: "var(--funkyPurple-900)",
        },
        habibiViolet: {
          50: "var(--habibiViolet-50)",
          100: "var(--habibiViolet-100)",
          200: "var(--habibiViolet-200)",
          300: "var(--habibiViolet-300)",
          400: "var(--habibiViolet-400)",
          500: "var(--habibiViolet-500)",
          600: "var(--habibiViolet-600)",
          700: "var(--habibiViolet-700)",
          800: "var(--habibiViolet-800)",
          900: "var(--habibiViolet-900)",
        },
      },
    },
  },
  plugins: [],
};
