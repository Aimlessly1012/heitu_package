import { defineConfig } from 'dumi';
import { resolve } from 'path';

export default defineConfig({
  title: 'heitu_package',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  alias: {
    '@heitu_package/ui': resolve(__dirname, './packages/ui/src/index.ts'),
    '@heitu_package/hook': resolve(__dirname, './packages/hook/src/index.ts'),
  },
  resolve: {
    includes: ['docs', 'packages/hook/src', 'packages/ui/src'],
  },
});
