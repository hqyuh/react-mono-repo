import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
      "@": resolve(__dirname, "./src"),
      "@ui": resolve(__dirname, "../../packages/ui/src"),
    },
  },
});
