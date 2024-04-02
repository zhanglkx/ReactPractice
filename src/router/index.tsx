// 导入路由依赖
import { useRoutes } from "react-router-dom";

// import AboutView from "../views/AboutView";
// 导入懒加载组件方法
import LazyLoad from "./LazyLoad";
// import Private from "./Private";



interface RouteConfig {
  path: string;
  element: React.ReactNode | null;
}

// 创建路由
const routers: RouteConfig[] = [
  {
    path: "/",
    element: LazyLoad("../pages/login/index.tsx"),
  },
  {
    path: "/deviceList",
    element: LazyLoad("../pages/deviceList/DeviceList.tsx"),
  },
  // {
  //     path: "/product/:id",
  //     element: LazyLoad("../views/ProductView")
  // },
  {
    path: "*",
    element: LazyLoad("@/pages/console.error/404/index"),
  },
];

// 使用useRoutes 创建
export default function RouterView() {
  // 创建路由
  const elem = useRoutes(routers);
  // console.log(elem);
  // 返回接口
  return elem;
}
