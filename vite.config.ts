import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
// Note: removed `@tailwindcss/vite` import because it pulls in
// platform-native bindings (@tailwindcss/oxide) that can fail on some CI
// platforms (Netlify). Tailwind is loaded via PostCSS / `index.css`.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
});
