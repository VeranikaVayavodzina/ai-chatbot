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
          formats: ["es", "umd"] as const,
          fileName: (format: string) =>
            `chatbot.${format === "es" ? "js" : "umd.js"}`,
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            exports: "named" as const,
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
            assetFileNames: (assetInfo: any) => {
              if (assetInfo.name === "style.css") return "chatbot.css";
              return assetInfo.name || "asset";
            },
          },
        },
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
