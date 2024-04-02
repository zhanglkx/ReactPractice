import { Button } from "antd";
import { useEffect, useState } from "react";

function EffectDependency() {
    const [array, setArray] = useState([
        {
            id: 1,
            task: '任务1',
            state: 1,
            time: '2020-01-01 00:00'
        },
        {
            id: 1,
            task: '任务1',
            state: 1,
            time: '2020-01-01 00:00'
        },
    ]);
    /**
     * 在useEffect钩子中，如果依赖项是未使用useState修饰的变量，则useEffect将在每次渲染时都执行该回调函数。
     * 但是当数据或者变量改变的时候，useEffect是不会执行的，因为即便它们的值发生了变化，React 认为它们的引用没有变化，所以 useEffect 不会执行。
     * 所以说需要使用useState来管理以来想，使用setState来更新数据，这样useState才会更新
     */
    const [num, setNum] = useState(1);

    useEffect(() => {
        console.log(array);
    }, [array]);

    useEffect(() => {
        console.log(num);
    }, [num]);

    const click = () => {
        // 创建一个新的数组，而不是修改原始数组
        setArray(prevArray =>    prevArray[0].state + 2,);
        setNum(prevNum => prevNum + 1);
    }

    return (
        <>
            <Button type={"primary"} onClick={click}>点击事件</Button>
        </>
    )
}

export default EffectDependency;
