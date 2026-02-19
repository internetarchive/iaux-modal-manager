/// <reference types="vitest" />
import { defineConfig, mergeConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import viteConfig from './vite.config';

// https://vitest.dev/config
export default mergeConfig(
  viteConfig,
  defineConfig({
    server: {
      host: '127.0.0.1',
      port: 8080,
    },
    test: {
      browser: {
        headless: true,
        enabled: true,
        provider: playwright(),
        instances: [{ browser: 'chromium' }],
      },
      watch: false,
      coverage: {
        include: ['src/**/*.ts'],
      },
    },
  }),
);
