import { lazy } from "react";

const AntdRoutes = [
  {
    path: "/form",
    Component: lazy(() => import("../../views/ZForm/Zform")),
  },
  {
    path: "/waterfall",
    Component: lazy(() => import("../../views/WaterFall/WaterFall")),
  },
  {
    path: "/virtualList",
    Component: lazy(() => import("../../views/VirtualList/index.tsx")),
  },
];

export default AntdRoutes;
