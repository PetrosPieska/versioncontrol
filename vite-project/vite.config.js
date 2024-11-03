import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    root: './',  // Ensure this points to the correct directory
    plugins: [react()],
});
