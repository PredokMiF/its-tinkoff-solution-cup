/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
    ],
    test: {
        globals: true,
        environment: 'jsdom'
    },
    resolve: {
        alias: {
            '~': resolve(__dirname, 'src'),
        },
    },
    server: {
        port: 8080,
    },
    preview: {
        port: 8080,
    },
})
