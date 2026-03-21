import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    watch: {
      // WSL2 や Docker 環境ではファイル変更イベント (inotify) がうまく伝わらないことがある
      // その場合、ポーリング方式に切り替えることでホットリロードを確実に動作させる
      usePolling: true,
    },
  },
})
