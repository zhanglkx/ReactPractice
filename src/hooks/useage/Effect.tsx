import { useEffect, useState } from "react";
// 注意，想用 async await 语法需要单独写一个函数，因为 useEffect 参数的那个函数不支持 async。
async function queryData() {
    const data = await new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(666);
        }, 2000);
    })
    return data;
}

function App() {
    const [num, setNum] = useState(0);

    useEffect(() => {
        queryData().then(data => {
            setNum(data);
        })
    }, []);

    return (
        <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>
    );
}

export default App;
