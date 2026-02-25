import { type Config } from "tailwindcss";

export default {
  content: ["./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        muted: "#737373",
        border: "#e5e5e5",
        accent: "#0a0a0a",
      },
    },
  },
  plugins: [],
} satisfies Config;
