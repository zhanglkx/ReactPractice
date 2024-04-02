import {NavLink} from "react-router-dom"

function NoMatch() {
    return (
        <div>
            <h1>你的页面被😽偷走了!</h1>
            <NavLink to="/">首页</NavLink>
        </div>
    );
}

export default NoMatch;
