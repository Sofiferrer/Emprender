import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Obtener el entorno actual (desarrollo o producción)
const isProduction = process.env.NODE_ENV === "production";

// Configuración del proyecto para Vite
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/Emprender/" : "/",
  server: {
    proxy: {
      "/api": {
        target: "https://supplies.onrender.com", // Proxy para API en desarrollo local
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
