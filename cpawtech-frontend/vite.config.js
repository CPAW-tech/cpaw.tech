import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), reactRouter()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
