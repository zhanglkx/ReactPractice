// 导入路由依赖
import { useRoutes } from "react-router-dom";

// import AboutView from "../views/AboutView";
// 导入懒加载组件方法
import LazyLoad from "@/router/LazyLoad"
// import Private from "./Private";
import AntdRoutes from "@/router/modules/AntdDemos";
// import AdminView from "@/pages/admin/AdminView";
// import DashView from "@/pages/admin/DashView";
// import OrderList from "@/pages/admin/OrderList";
// import AboutView from "../views/AboutView";

// import Private from "@/router/Private";



// 创建路由
let routers: any[] = [
  {
    path: "/",
    element: LazyLoad("../pages/HomeView.tsx"),
  },
  {
    path: "/about",
    element: LazyLoad("../views/AboutView"),
  },
  {
    path: "/calendar",
    element: LazyLoad("../components/Calendar/Calendar"),
  },
  {
    path: "/product/:id",
    element: LazyLoad("../views/ProductView"),
  },
  // {
  //   path: "/Admin",
  //   element: (
  //     <Private>
  //       <AdminView />
  //     </Private>
  //   ),
  //   // 配置子路由
  //   children: [
  //     {
  //       path: "",
  //       element: <DashView></DashView>,
  //     },
  //     {
  //       path: "orderList",
  //       element: <OrderList></OrderList>,
  //     },
  //   ],
  // },
  {
    path: "/",
    element: LazyLoad("../pages/login/index.tsx"),
  },
  {
    path: "/deviceList",
    element: LazyLoad("../pages/deviceList/DeviceList.tsx"),
  },
  {
    path: "/product/:id",
    element: LazyLoad("../views/ProductView")
  },
  {
    path: "/calendar",
    element: LazyLoad("@/Components/Calendar/Calendar")
  },
  {
    path: "*",
    element: LazyLoad("../pages/error/404/index.tsx"),
  },
];

// 使用useRoutes 创建
export default function RouterView() {

  routers = routers.concat(AntdRoutes);

  // 创建路由
  const elem = useRoutes(routers);
  // console.log(elem);
  // 返回接口
  return elem;
}
