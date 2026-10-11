import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import babel from '@rolldown/plugin-babel';
import { defineConfig } from 'vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "sass:color";
          @use "@/styles/_variables.scss" as *;
        `,
      },
    },
  },
  plugins: [react(), svgr(), babel({ presets: [reactCompilerPreset()] })],
});
