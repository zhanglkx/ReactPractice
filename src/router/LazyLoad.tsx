// 动态加载组件
import {lazy, Suspense} from "react";

// 动态加载组件 方法
/**
 *
 * @param url :String 动态加载组件路径
 * @returns {JSX.Element}
 * @constructor
 */
function LazyLoad(url: string) {
    // 配置动态加载组件路径
    const Element = lazy(() => import(url));
    return (
        // 返回组件，Suspense:懒加载组件
        <Suspense fallback={<h3>加载中. . . </h3>}>
            {/* 内容组件 */}
            <Element/>
        </Suspense>
    );
}

// 导出方法
export default LazyLoad;
