import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@rc-001",
      fileName: (format) => `rc-001.${format}.js`,
      cssFileName: "rc-001"
    },
    rollupOptions: {
      external: ["react", "react-dom","react-router"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-router": "ReactRouter"
        },
      },
    },
  },
});
