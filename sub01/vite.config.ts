import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
  // 生产环境需要指定运行域名作为base
  // base: 'http://xxx.com/'
  plugins: [vue(), vueJsx(), qiankun('sub01')],
  server: { port: 3010 },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
