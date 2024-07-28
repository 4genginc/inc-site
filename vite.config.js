import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__test__/setupTests.js',
  },
});
