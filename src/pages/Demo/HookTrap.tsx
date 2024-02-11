import { useState, useRef, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const buttonRef = useRef(null);

    const handleClick = () => {
        setCount(count + 1);
    };

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
    }, []);
    return (
        <div>
            {count}
            <button ref={buttonRef}>count+++</button>
        </div>
    );
}

export default Counter;