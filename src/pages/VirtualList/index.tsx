/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import isElementInViewport, { isShouldDeleteFromParent } from "../../utils/isElementInViewPort.ts";
import WHList from '@/pages/WaterFall/Data.ts'

const dataList = Array(1000).fill(0).map((_, idx) => {
    return {
        key: idx,
        text: `${idx}`,
        height: 100,
        width: 100,
        lineHeight: 100,
        left: 0,
        top: 0,
        idx: idx,
        desc: '宁可枝头抱香死，何曾吹落北风中。 ---郑思肖-',
    };
})


function handleScroll(e: { target: any; }) {
    const parentElement = e.target;
    const childElements = parentElement.querySelectorAll('div');

    childElements.forEach((child: HTMLElement) => {
        if (isElementInViewport(child)) {
            console.log(`子元素 ${child.innerHTML} 至少部分显示在视口中`);
        } else {
            console.log(`子元素 ${child.innerHTML} 当前不在视口中`);
        }
    });
}


function App() {

    const domRef = useRef<HTMLDivElement | null>(null);

    let scrollTop = 110;

    const [visibleDataList, setVisibleDataList] = useState(WHList);

    useEffect(() => {

        setVisibleDataList(WHList)
    }, []);

    function handleScroll(e: { target: { querySelectorAll: (arg0: string) => any; scrollTop: number; }; }) {

        // 获取所有的 div 子元素
        const childDivs = e.target.querySelectorAll('div');
        childDivs.forEach((child: HTMLElement) => {

            if (scrollTop != e.target.scrollTop) { // 滚动方向 仅当二者不同是判断，否则频繁出发，二者一直是一样的
                isShouldDeleteFromParent(child, e.target.scrollTop > scrollTop)

                domRef.current!.appendChild(child)

                console.log(e.target.scrollTop, '====', scrollTop)
                scrollTop = e.target.scrollTop
            }
        })

    }


    return (
        <div ref={domRef} style={{ height: '700px', marginTop: '00px', border: '1px solid #000', overflow: 'auto' }}
            onScroll={handleScroll}>
            {
                visibleDataList.map((item, index) => {
                    return <IndexItem key={index} item={item} />
                })
            }
        </div>
    )
}


function IndexItem({ item }) {
    const scrollTop = 300

    const text = `第几行：
                ${item.desc}
                 ${item.idx} `

    return (
        <div
            style={{ height: `${scrollTop}px` }}
            className='h-[100px] w-[200px] bg-code ml-32 m-1  whitespace-pre-wrap rounded-2xl relative'>
            <div>
                {
                    text
                }</div>
            <div className='bottom-0 absolute bg-error w-full'>

                {
                    text
                }
            </div>
        </div>
    )
}

export default App
