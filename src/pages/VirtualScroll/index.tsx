import './index.less'
import {SetStateAction, useEffect, useRef, useState} from "react";
import {Button} from "antd";

const Index = () => {
    const [data, setData] = useState(new Array(20).fill(0).map((_, i) => i));// 模拟真实数据
    const [showData, setShowData] = useState(data.slice(0, 20))
    const viewHeight = useRef(400); // 可视容器高度
    const itemHeight = useRef(60); // 每一项的高度
    const scrollTop = useRef(0); // 初始滚动距离
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const updateShowData = (index: SetStateAction<number[]>): void => {
        index = new Array(20).fill(0).map((_, i) => i + data.at(-1))
        const temp = data.concat(index)
        setData([...temp])
    }

// 滚动事件
    const handleScroll = (e: Event) => {
        // 获取滚动距离
        scrollTop.current = (e.target as HTMLElement).scrollTop;
        // 初始索引 = 滚动距离 / 每一项的高度
        const startIndex = Math.round(scrollTop.current / itemHeight.current);
        // 结束索引 = 初始索引 + 容器高度 / 每一项的高度
        const endIndex = Math.round(startIndex + viewHeight.current / itemHeight.current);
        // 根据初始索引和结束索引，截取数据
        // showData = ;

        const newData = data.slice(startIndex, endIndex);
        console.log(startIndex, endIndex,data, showData, newData)
        setShowData([...newData])

        // console.log(scrollTop);
    };

    useEffect(() => {
        console.log({data})
    }, [data]);

    useEffect(() => {

        const divElement = scrollRef.current;
        if (divElement) {
            divElement.addEventListener('scroll', handleScroll);
        }

        // Cleanup function to remove the event listener
        return () => {
            if (divElement) {
                divElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);


    return (

        <div>
            <Button type='primary' onClick={updateShowData}>添加数据</Button>
            <div className="view-container" ref={scrollRef}
                 style={{height: viewHeight.current + 'px'}}>

                <div className="content-container" style={{height: itemHeight.current * data.length + 'px',}}></div>
                <div className="item-container" style={{transform: 'translateY(' + scrollTop.current + 'px)',}}>
                    {
                        showData.map((item, i) =>
                            <div className="item">{item}</div>
                        )
                    }
                </div>
            </div>
        </div>

    );
};

export default Index;
