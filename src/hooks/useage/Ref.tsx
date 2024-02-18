// // 保存 dom 引用
// import { useEffect, useRef } from "react";

// function App() {
//     const inputRef = useRef<HTMLInputElement>(null);

//     useEffect(() => {
//         inputRef.current?.focus();
//     });

//     return (
//         <div>
//             <input ref={inputRef}></input>
//         </div>
//     );
// }

// export default App;
// import { useRef, useState } from "react";

// function App() {
//     const numRef = useRef<number>(0);
//     const [, forceRender] = useState(0);

//     return (
//         <div>
//             <div onClick={() => {
//                 numRef.current += 1;
//                 forceRender(Math.random());
//             }}>{numRef.current}</div>
//         </div>
//     );
// }

// export default App;

import { useRef } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { useImperativeHandle } from 'react';

interface RefProps {
    aaa: () => void;
}

const Guang: React.ForwardRefRenderFunction<RefProps> = (_props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
        return {
            aaa() {
                inputRef.current?.focus();
            }
        }
    }, [inputRef]);

    return <div>
        <input ref={inputRef}></input>
    </div>
}

const WrapedGuang = React.forwardRef(Guang);

function App() {
    const ref = useRef<RefProps>(null);

    useEffect(() => {
        console.log('ref', ref.current)
        ref.current?.aaa();
    }, []);

    return (
        <div className="App">
            <WrapedGuang ref={ref} />
        </div>
    );
}

export default App;
