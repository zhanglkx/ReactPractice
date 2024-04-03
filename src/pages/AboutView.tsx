import {useSearchParams, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import changeFavicon from "@/utils/changeFavicon.ts";
import faviconUrl from '@/assets/react.svg';
function AboutView() {
    const navigate = useNavigate();

    const handleClick = () => {
        // 👇️ navigate programmatically
        navigate(-1);
    };

    useEffect(() => {
        changeFavicon("https://www.baidu.com/favicon.ico")

        return () => {
            changeFavicon(faviconUrl)
        }
    }, []);

    // 获取about查询参数redirect的值
    const [SearchParams] = useSearchParams();
    // 获取redirect的值
    const redirect = SearchParams.get("redirect");
    // 渲染
    return (
        <div>
            {/* // 传递查询参数 */}
            <h1>About页面查询参数：-{redirect}</h1>
            <button onClick={handleClick}>Back to Home</button>
        </div>
    );
}

// 导出组件
export default AboutView;
