import { Navigate, RouteObject } from "react-router-dom";
// 权限路由
function Private(props: RouteObject) {
  if (localStorage.getItem("token")) {
    return <>{props.children}</>;
  } else {
    return <Navigate to="/" />;
  }
}

export default Private;
