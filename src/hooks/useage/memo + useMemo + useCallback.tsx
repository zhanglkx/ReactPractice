import { memo, useCallback, useEffect, useState } from "react";
// memo 是防止 props 没变时的重新渲染，useMemo 和 useCallback 是防止 props 的不必要变化。

/**
 *  memo 包裹组件，当组件参数不变化的时候，不会重新渲染
 *  useMemo 作用是防止 props 没变时的重新渲染。可以使用useMemo 包裹props，有点类似 vue 的 computed
 * useCallback 是作用就是当 deps 数组不变的时候，始终返回同一个 function，当 deps 变的时候，才把 function 改为新传入的。
 * @returns {JSX.Element}
 */

function Aaa() {
    const [, setNum] = useState(1);

    const [count, setCount] = useState(2);


    useEffect(() => {
        setInterval(() => {
            setNum(Math.random());
        }, 2000)
    }, []);



    /**
     * 因为每次 function 都是新创建的，也就是每次 props 都会变，这样 memo 就没用了。
     */
    const bbbCallback = useCallback(function () {
        // xxx
    }, []);


    return <div>
        <MemoBbb count={count} callback={bbbCallback}></MemoBbb>
    </div>
}

interface BbbProps {
    count: number;
}

function Bbb(props: BbbProps) {
    console.log('bbb render');

    return <h2>{props.count}</h2>
}

const MemoBbb = memo(Bbb);

export default Aaa;
