// 导入路由依赖
import { useRoutes } from "react-router-dom";
import { lazy } from "react";

// 创建路由
const routers: any[] = [
    {
        path: "/",
        Component: lazy(() => import('@/pages/HomeView')),
    },
    {
        path: "/about",
        Component: lazy(() => import('@/pages/AboutView')),
    },
    {
        path: "/miniCalendar",
        Component: lazy(() => import('@/components/Calendar/Calendar')),
    },
    {
        path: "/calendar",
        Component: lazy(() => import('@/components/Calendar/index')),
    },
    {
        path: "/product/:id",
        Component: lazy(() => import('@/pages/ProductView')),
    },
    {
        path: "/login",
        Component: lazy(() => import('@/pages/Login/index')),
    },
    {
        path: "/deviceList",
        Component: lazy(() => import('@/pages/DeviceList/DeviceList')),
    },
    {
        path: "/task",
        Component: lazy(() => import('@/pages/task/TaskView')),
    },
    {
        path: "/virtualList",
        Component: lazy(() => import('@/pages/VirtualList/index')),
    },
    {
        path: "/virtualList",
        Component: lazy(() => import('@/pages/VirtualList/index')),
    },
    {
        path: "/waterfall",
        Component: lazy(() => import('@/pages/WaterFall/WaterFall')),
    },
    {
        path: "/zform",
        Component: lazy(() => import('@/pages/ZForm/Zform')),
    },
    {
        path: "/Admin",
        Component: lazy(() => import('@/pages/admin/AdminView')),
    },
    {
        path: "/PropsChildren",
        Component: lazy(() => import('@/pages/Demo/PropsChildren.tsx')),
    },
    {
        path: '/modalView',
        Component: lazy(() => import('@/components/Modal/modal'))
    },
    {
        path: '/waterMark',
        Component: lazy(() => import('@/pages/WaterMark'))
    },
    {
        path: '/virtualScroll',
        Component: lazy(() => import('@/pages/VirtualScroll'))
    },
    {
        path: '/dragSort',
        Component: lazy(() => import('@/pages/dragDnd/DragDemo.tsx'))
    },
    {
        path: '/ESMImp',
        Component: lazy(() => import('@/pages/ESM/ESMImp&Exp.tsx'))
    },
    {
        path: "*",
        Component: lazy(() => import('@/pages/Error/404/index')),
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
];

// 使用useRoutes 创建
export default function RouterView() {

    // routers = routers.concat(AntdRoutes);

    // 创建路由
    // console.log(elem);
    // 返回接口
    return useRoutes(routers);
}
