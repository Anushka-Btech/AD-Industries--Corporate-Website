import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),

    react(),

    tailwindcss(),

    tanstackStart({
      server: {
        entry: "server",
      },
    }),
  ],
});