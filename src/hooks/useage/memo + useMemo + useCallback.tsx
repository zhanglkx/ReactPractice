import { memo, useEffect, useState } from "react";

function Aaa() {
    const [, setNum] = useState(1);

    useEffect(() => {
        setInterval(() => {
            setNum(Math.random());
        }, 2000)
    }, []);

    return <div>
        <Bbb count={Math.random()}></Bbb>
    </div>
}

interface BbbProps {
    count: number;
}

function Bbb(props: BbbProps) {
    console.log('bbb render');
    // debugger
    return <h2>{props.count}</h2>
}

export default Aaa;
