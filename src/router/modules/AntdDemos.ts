import { lazy } from "react";

const AntdRoutes: any[] = [
  {
    path: "/form",
    Component: lazy(() => import("@/pages/ZForm/Zform.tsx")),
  },
  {
    path: "/waterfall",
    Component: lazy(() => import("@/pages/WaterFall/WaterFall.tsx")),
  },
  {
    path: "/virtualList",
    Component: lazy(() => import("@/pages/VirtualList/index")),
  },
];

export default AntdRoutes;
