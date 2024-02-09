// vite.config.ts
import { defineConfig } from "file:///Users/zlk/Documents/%E5%BC%80%E5%8F%91/iotcontrol/node_modules/.pnpm/vite@5.0.12_@types+node@20.11.5/node_modules/vite/dist/node/index.js";
import react from "file:///Users/zlk/Documents/%E5%BC%80%E5%8F%91/iotcontrol/node_modules/.pnpm/@vitejs+plugin-react-swc@3.5.0_vite@5.0.12/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/Users/zlk/Documents/\u5F00\u53D1/iotcontrol";
function _resolve(dir) {
  return path.resolve(__vite_injected_original_dirname, dir);
}
var vite_config_default = defineConfig({
  plugins: [react()],
  // 配置项目别名
  resolve: {
    alias: {
      "@": _resolve("src")
    }
  },
  server: {
    host: "127.0.0.1",
    // 开发服务器的地址 host和port写不写都行，不写系统会默认一个地址和端口
    port: 8e3,
    // 开发服务器的端口号
    cors: true,
    // 默认启用并允许任何源
    open: true,
    // 在服务器启动时自动在浏览器中打开应用程序
    proxy: {
      "/api": {
        target: "http://127.0.0.1:9000",
        // 目标地址
        changeOrigin: true,
        // 是否换源
        ws: true,
        // 允许websocket代理
        rewrite: (path2) => path2.replace(/^\/api/, "")
        //将 /api 字段替换为’’空字段
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvemxrL0RvY3VtZW50cy9cdTVGMDBcdTUzRDEvaW90Y29udHJvbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3psay9Eb2N1bWVudHMvXHU1RjAwXHU1M0QxL2lvdGNvbnRyb2wvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3psay9Eb2N1bWVudHMvJUU1JUJDJTgwJUU1JThGJTkxL2lvdGNvbnRyb2wvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcblxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZnVuY3Rpb24gX3Jlc29sdmUoZGlyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGRpcik7XG59XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIC8vIFx1OTE0RFx1N0Y2RVx1OTg3OVx1NzZFRVx1NTIyQlx1NTQwRFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogX3Jlc29sdmUoJ3NyYycpLFxuICAgIH0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IFwiMTI3LjAuMC4xXCIsIC8vIFx1NUYwMFx1NTNEMVx1NjcwRFx1NTJBMVx1NTY2OFx1NzY4NFx1NTczMFx1NTc0MCBob3N0XHU1NDhDcG9ydFx1NTE5OVx1NEUwRFx1NTE5OVx1OTBGRFx1ODg0Q1x1RkYwQ1x1NEUwRFx1NTE5OVx1N0NGQlx1N0VERlx1NEYxQVx1OUVEOFx1OEJBNFx1NEUwMFx1NEUyQVx1NTczMFx1NTc0MFx1NTQ4Q1x1N0FFRlx1NTNFM1xuICAgIHBvcnQ6IDgwMDAsIC8vIFx1NUYwMFx1NTNEMVx1NjcwRFx1NTJBMVx1NTY2OFx1NzY4NFx1N0FFRlx1NTNFM1x1NTNGN1xuICAgIGNvcnM6IHRydWUsIC8vIFx1OUVEOFx1OEJBNFx1NTQyRlx1NzUyOFx1NUU3Nlx1NTE0MVx1OEJCOFx1NEVGQlx1NEY1NVx1NkU5MFxuICAgIG9wZW46IHRydWUsIC8vIFx1NTcyOFx1NjcwRFx1NTJBMVx1NTY2OFx1NTQyRlx1NTJBOFx1NjVGNlx1ODFFQVx1NTJBOFx1NTcyOFx1NkQ0Rlx1ODlDOFx1NTY2OFx1NEUyRFx1NjI1M1x1NUYwMFx1NUU5NFx1NzUyOFx1N0EwQlx1NUU4RlxuICAgIHByb3h5OiB7XG4gICAgICBcIi9hcGlcIjoge1xuICAgICAgICB0YXJnZXQ6IFwiaHR0cDovLzEyNy4wLjAuMTo5MDAwXCIsIC8vIFx1NzZFRVx1NjgwN1x1NTczMFx1NTc0MFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NjM2Mlx1NkU5MFxuICAgICAgICB3czogdHJ1ZSwgLy8gXHU1MTQxXHU4QkI4d2Vic29ja2V0XHU0RUUzXHU3NDA2XG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCBcIlwiKSwgLy9cdTVDMDYgL2FwaSBcdTVCNTdcdTZCQjVcdTY2RkZcdTYzNjJcdTRFM0FcdTIwMTlcdTIwMTlcdTdBN0FcdTVCNTdcdTZCQjVcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3UyxTQUFTLG9CQUFvQjtBQUNyVSxPQUFPLFdBQVc7QUFFbEIsT0FBTyxVQUFVO0FBSGpCLElBQU0sbUNBQW1DO0FBS3pDLFNBQVMsU0FBUyxLQUFhO0FBQzdCLFNBQU8sS0FBSyxRQUFRLGtDQUFXLEdBQUc7QUFDcEM7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUE7QUFBQSxFQUVqQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFNBQVMsS0FBSztBQUFBLElBQ3JCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUE7QUFBQSxRQUNSLGNBQWM7QUFBQTtBQUFBLFFBQ2QsSUFBSTtBQUFBO0FBQUEsUUFDSixTQUFTLENBQUNBLFVBQVNBLE1BQUssUUFBUSxVQUFVLEVBQUU7QUFBQTtBQUFBLE1BQzlDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJwYXRoIl0KfQo=
