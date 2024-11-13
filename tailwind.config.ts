import type { Config } from "tailwindcss";

export default {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,html,js}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,html,js}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,html,js}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
