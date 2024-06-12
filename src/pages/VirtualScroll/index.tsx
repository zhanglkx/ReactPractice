import './index.less'
import {useEffect, useRef, useState} from "react";
import {Button} from "antd";

const Index = () => {
    const [data, setData] = useState(new Array(20).fill(0).map((_, i) => i)); // 模拟真实数据
    const [showData, setShowData] = useState(data.slice(0, 20));
    const viewHeight = useRef(400); // 可视容器高度
    const itemHeight = useRef(60); // 每一项的高度
    const scrollTop = useRef(0); // 初始滚动距离
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const updateShowData = () => {
        const newData = new Array(20).fill(0).map((_, i) => i + data.at(-1) + 1);
        setData(prevData => [...prevData, ...newData]);
    }

    // 滚动事件
    const handleScroll = (e: Event, currentData) => {
        scrollTop.current = (e.target as HTMLElement).scrollTop;
        // 初始索引 = 滚动距离 / 每一项的高度
        const startIndex = Math.floor(scrollTop.current / itemHeight.current);
        // 结束索引 = 初始索引 + 容器高度 / 每一项的高度
        const endIndex = Math.min(startIndex + Math.ceil(viewHeight.current / itemHeight.current), currentData.length);
        // 根据初始索引和结束索引，截取数据
        // showData = ;
        const newData = currentData.slice(startIndex, endIndex);
        setShowData(newData);
        console.log(startIndex, endIndex, currentData, newData);
    };

    useEffect(() => {
        const divElement = scrollRef.current;
        if (divElement) {
            divElement.addEventListener('scroll', (e) => handleScroll(e, data));
        }
        return () => {
            if (divElement) {
                divElement.removeEventListener('scroll', (e) => handleScroll(e, data));
            }
        };
    }, [data]);

    // useEffect(() => {
    //     console.log({data});
    //     const startIndex = Math.floor(scrollTop.current / itemHeight.current);
    //     const endIndex = Math.min(startIndex + Math.ceil(viewHeight.current / itemHeight.current), data.length);
    //     const newData = data.slice(startIndex, endIndex);
    //     setShowData(newData);
    // }, [data]);

    return (
        <div>
            <Button type='primary' onClick={updateShowData}>添加数据</Button>
            <div className="view-container" ref={scrollRef}
                 style={{height: viewHeight.current + 'px', overflowY: 'auto'}}>
                <div className="content-container" style={{height: itemHeight.current * data.length + 'px'}}></div>
                <div className="item-container"
                     style={{transform: `translateY(${Math.floor(scrollTop.current / itemHeight.current) * itemHeight.current}px)`}}>
                    {showData.map((item, i) => <div className="item" key={i}>{item}</div>)}
                </div>
            </div>
        </div>
    );
};

export default Index;
