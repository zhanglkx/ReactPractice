import {useState, useEffect} from "react";
import {Button} from "antd";

function DemoView() {

    const [redirect, setRedirect] = useState(0);

    useEffect(() => {
        console.log('@1', redirect)
        return () => {
            console.log('@2卸载', redirect)
        }
    }, [redirect])

    useEffect(() => {
        console.log('@空数组')
    }, [])

    useEffect(() => {
        console.log('@无依赖')
    }, )

    const handleClick = () => {
        setRedirect(redirect => redirect + 1)

        let red=  promiseDemo()
        console.log(red)
    }

    const  promiseDemo = async () => {
      let res = await 1;
        console.log(res)
    }


    // 渲染
    return (<div>
        {/* // 传递查询参数 */}
        <h1>{redirect}</h1>
        <Button size={"large"} onClick={handleClick}>Back to Home</Button>
    </div>);
}

// 导出组件
export default DemoView;
