import { useState, useRef, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const buttonRef = useRef(null);

    const handleClick = () => {
        console.log(count);

        setCount(count + 1);
    };
    console.log(count);
    // const buttonDom = buttonRef.current;
    // if (buttonDom) {
    //     buttonDom.addEventListener('click', handleClick);
    // }

    useEffect(() => {
        const buttonDom: any = buttonRef.current;
        if (buttonDom) {
            buttonDom.addEventListener('click', handleClick);
        }
        return () => {
            if (buttonDom) {
                buttonDom.removeEventListener('click', handleClick);
            }
        };
        console.log(count);
    }, []);
    return (
        <div>
            {count}
            <button ref={buttonRef}>count+++</button>
        </div>
    );
}

export default Counter;