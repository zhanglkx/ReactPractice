import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import path from "path";

function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 配置项目别名
  resolve: {
    alias: {
      '@': _resolve('src'),
    },
  },
  server: {
    host: "127.0.0.1", // 开发服务器的地址 host和port写不写都行，不写系统会默认一个地址和端口
    port: 3001, // 开发服务器的端口号
    cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    proxy: {
      "/api": {
        target: "http://127.0.0.1:9000", // 目标地址
        changeOrigin: true, // 是否换源
        ws: true, // 允许websocket代理
        rewrite: (path) => path.replace(/^\/api/, ""), //将 /api 字段替换为’’空字段
      },
    },
  },
});
