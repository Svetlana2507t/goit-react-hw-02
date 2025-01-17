import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    modules: {
      localsConvention: "camelCaseOnly",
      generateScopedName: "[name]__[hash:base64:5]",
    },
  },
  build: {
    sourcemap: true,
  },
});
