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
        // Встраиваем CSS в JS
        cssCodeSplit: false,
        // Встраиваем ассеты как base64
        assetsInlineLimit: 100000, // 100KB - все файлы меньше этого размера будут встроены
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
