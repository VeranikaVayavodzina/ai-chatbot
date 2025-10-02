import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: resolve(__dirname, "src/lib.tsx"),
          name: "AIChatBot",
          formats: ["es", "umd"],
          fileName: (format) => `chatbot.${format === "es" ? "js" : "umd.js"}`,
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            exports: "named",
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
        cssCodeSplit: false,
        assetsInlineLimit: 100000,
      },
    };
  }

  return {
    plugins: [react()],
    server: {
      port: 3002,
    },
  };
});
