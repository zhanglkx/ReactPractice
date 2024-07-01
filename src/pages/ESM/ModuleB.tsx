// moduleB.js
import { value, setValue } from '@/pages/ESM/ModuleA';
import {useEffect, useState} from "react";
import {Button} from "antd";


function ModuleB() {

    const [myValue, setMyValue] = useState(value)


    useEffect(() => {
        setMyValue(value)
        console.log('ModuleB',value); // 输出: 42
    }, [value]);


    console.log(value); // 输出: 100

    const changeValue = () => {
        setValue(100)
        console.log('ModuleB',value); // 输出: 42
    }

    return (
        <div style={{ width:'200px',height:'200px',border:'1px solid black' }}>
            <h1>{myValue}</h1>
            <Button title='改变 value 值' onClick={changeValue}>改变 value 值</Button>
        </div>
    );
}

export default ModuleB;
