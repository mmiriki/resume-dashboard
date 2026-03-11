import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'resume-dashboard' with your actual GitHub repo name
// if you're deploying to https://<username>.github.io/<repo-name>/
export default defineConfig({
    plugins: [react()],
    base: '/resume-dashboard/',
});
