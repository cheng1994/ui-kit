import { defineConfig } from 'vite'
import { resolve } from 'path';
import dts from "vite-plugin-dts"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({ rollupTypes: true, include: ["src/lib"] })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/lib/index.ts'),
            name: 'react-ui-kit',
            fileName: 'index'
        },
        rollupOptions: {
            external: ['react'],
            output: {
                globals: {
                    react: 'React'
                }
            }
        }

    }
})