// moduleC.js
import {value} from '@/pages/ESM/ModuleA';
import {useEffect, useState} from "react";
import {Button} from "antd";


const ModuleC = () => {

    const [myValue, setMyValue] = useState(value)

    useEffect(() => {
        setMyValue(value)
        console.log('ModuleC',value)
    }, [value]);

    const printValue = ()=>{
        console.log('ModuleC',value)
    }

    return (
        <div  style={{ width:'200px',height:'200px',border:'1px solid red' }}>
            {myValue}
            <Button onClick={printValue}>打印 value 值</Button>
        </div>
    );
};

export default ModuleC;
