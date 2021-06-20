import { defineConfig, loadEnv, UserConfig, UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default ({ mode }: UserConfig): UserConfigExport => {
  return defineConfig({
      plugins: [vue()],
      define: {
        // add process env
        'process.env': {
          NODE_ENV: process.env.NODE_ENV,
          ...loadEnv(mode, process.cwd()),
        },
      },
      resolve: {
        // add "@/" path alias
        alias: {
          '@': path.resolve(__dirname, '/src'),
        },
      },
  });
};
