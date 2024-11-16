import type { Config } from "tailwindcss";

export default {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,html,js}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,html,js}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,html,js}",
  ],
  theme: {
    fontFamily: {
      KodeMono: ["KodeMono"],
      KellySlab: ["KellySlab"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
