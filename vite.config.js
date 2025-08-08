import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: {
    "@": path.resolve(__dirname, "./src"),
    "@/views": path.resolve(__dirname, "./src/views"),
    "@/api": path.resolve(__dirname, "./src/config/api"),
    "@/routes": path.resolve(__dirname, "./src/config/routes"),
    "@/components": path.resolve(__dirname, "./src/components"),
    "@/constants": path.resolve(__dirname, "./src/constants"),
    "@/context": path.resolve(__dirname, "./src/context"),
    "@/assets": path.resolve(__dirname, "./src/assets"),
    "@/layout": path.resolve(__dirname, "./src/layout"),
    "@/hooks": path.resolve(__dirname, "./src/hooks"),
    "@/utils": path.resolve(__dirname, "./src/utils"),
    "@/config": path.resolve(__dirname, "./src/config"),
  },
});
