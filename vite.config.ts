import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    outDir: './dist',
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        }
      }
    }
  },
  plugins: [react(), dts({rollupTypes: true, tsconfigPath: './tsconfig.app.json'})],
})
