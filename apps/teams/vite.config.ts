import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
  },
  preview: {
    port: 4001,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
