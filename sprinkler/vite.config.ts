import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /* moved the vite generated files down 1 layer */
  root: "./src/client",
  build: {
    outDir: "../../dist/client",
    emptyOutDir: true,
  },
  /* direct api calls to express server */
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace("/api", ""),
      },
    },
  },
});
