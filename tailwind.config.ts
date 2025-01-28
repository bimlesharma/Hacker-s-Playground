import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'red-600': '#E50914', // Netflix-like red
        'gray-800': '#1F1F1F', // Dark gray
        'gray-300': '#D1D1D1', // Light gray
      },
    },
  },
  plugins: [],
} satisfies Config;
