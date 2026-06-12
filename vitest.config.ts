import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './vitest.setup.ts',
        alias: {
            '@/components': path.resolve(__dirname, './components'),
            '@/hooks': path.resolve(__dirname, './hooks'),
            '@/store': path.resolve(__dirname, './store'),
            '@/lib': path.resolve(__dirname, './lib'),
        },
    },
})