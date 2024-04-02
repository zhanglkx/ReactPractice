import { NavLink, Outlet } from "react-router-dom";
function AdminView() {
    return (
        <div>
            <h3>管理页面</h3>
            <NavLink to="">管理页面</NavLink>&emsp;||&emsp;
            <NavLink to="orderList">概览页面</NavLink>
            <Outlet />
        </div>
    );
}
export default AdminView;
