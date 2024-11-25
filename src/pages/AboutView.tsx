import {useSearchParams, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import changeFavicon from "@/utils/changeFavicon.ts";
import faviconUrl from '@/assets/react.svg';
import {Button} from "antd";
function AboutView() {
    const navigate = useNavigate();

    const [value, setValue] = useState(1)
    const domRef = useRef(null);

    const handleClick = () => {
        // 👇️ navigate programmatically
        navigate(-1);
    };

    useEffect(() => {
      setInterval(()=>{
          console.log(value)
      },2000)


        if (1) { //当orgId不匹配的时候，说明当前目录组件是来自资料库的模板，在 toolbar 做出提示
            if (domRef.current) {
                domRef.current.setAttribute('data-category-template', 'true');
            }
        } else if (domRef.current) {
            domRef.current.setAttribute('data-category-template', 'false');
        }

    }, []);

    useEffect(() => {
        changeFavicon("https://www.baidu.com/favicon.ico")
        return () => {
            changeFavicon(faviconUrl)
        }
    }, []);

    const inc = ()=>{
        setValue(value+1)
    }

    // 获取about查询参数redirect的值
    const [SearchParams] = useSearchParams();
    // 获取redirect的值
    const redirect = SearchParams.get("redirect");
    // 渲染
    return (
        <div ref={domRef}>  ·
            <div>{value}</div>
            <Button onClick={inc}>增加</Button>
            {/* // 传递查询参数 */}
            <h1>About页面查询参数：-{redirect}</h1>
            <button onClick={handleClick}>Back to Home</button>
        </div>
    );
}

// 导出组件
export default AboutView;
