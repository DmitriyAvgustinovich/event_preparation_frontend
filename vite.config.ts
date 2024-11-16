import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  resolve: {
    alias: {
      pages: "/src/pages",
      components: "/src/components",
      configs: "/src/configs",
      constants: "/src/constants",
      hooks: "/src/hooks",
      providers: "/src/providers",
      store: "/src/store",
      types: "/src/types",
      utils: "/src/utils",
    },
  },
});
