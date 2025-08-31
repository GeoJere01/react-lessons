import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// New import to enable tailwindcss
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
});
