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
          // Добавляем хеш к имени файла
          fileName: (format) => {
            const timestamp = Date.now();
            const hash = Math.random().toString(36).substring(2, 8);
            return `chatbot-${hash}-${timestamp}.${
              format === "es" ? "js" : "umd.js"
            }`;
          },
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            exports: "named",
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
            // Хеширование для ассетов
            assetFileNames: (assetInfo) => {
              const timestamp = Date.now();
              const hash = Math.random().toString(36).substring(2, 8);
              const ext = assetInfo.name?.split(".").pop();
              const name = assetInfo.name?.replace(`.${ext}`, "");
              return `${name}-${hash}-${timestamp}.${ext}`;
            },
          },
        },
        cssCodeSplit: false,
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
