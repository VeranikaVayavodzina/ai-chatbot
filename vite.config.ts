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
          output: {
            exports: "named",
            intro:
              'if (typeof process === "undefined") { var process = { env: { NODE_ENV: "production" } }; }',
          },
          plugins: [
            {
              name: "replace-env",
              transform(code) {
                return code
                  .replace(/process\.env\.NODE_ENV/g, '"production"')
                  .replace(/__DEV__/g, "false");
              },
            },
          ],
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
