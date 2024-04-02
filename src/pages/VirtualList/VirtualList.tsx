import React, {
    CSSProperties,
    useEffect,
    useRef,
    useState,
    useCallback,
} from "react";
import "./index.module.less";

interface IProps<T extends { key: React.Key }> {
    height?: CSSProperties["height"];
    width?: CSSProperties["width"];
    dataSource: T[];
    itemHeight?: number;
    cacheNumber?: number;
    listItemRender?: (item: T) => React.ReactNode;
}

export const VirtualList: <T extends { key: React.Key }>(
    props: IProps<T>
) => React.ReactNode = (props) => {
    const {
        height = "500px",
        dataSource = [],
        width = "400px",
        itemHeight = 32,
        cacheNumber = 10,
        listItemRender,
    } = props;

    /** 虚拟列表外层容器 */
    const containerRef = useRef<HTMLDivElement>(null);

    /** 真正用于存放虚拟列表项的容器 */
    const listItemsContainerRef = useRef<HTMLDivElement>(null);

    /** 用于撑开滚动条的容器高度（数据项个数 * 每个数据项高度） */
    const [scrollerContainerHeight, setScrollerContainerHeight] =
        useState<number>(0);

    /** 虚拟列表渲染的真实数据 */
    const [renderData, setRenderData] = useState<(typeof dataSource)[number][]>(
        []
    );

    /** 渲染数据区域偏移量 */
    const [renderAreaOffset, setRenderAreaOffset] = useState<number>(0);

    /** 监听滚动条变化，触发计算渲染数据以及渲染区域偏移量 */
    const handleScroll = useCallback(() => {
        /** 渲染元素个数（可视区域可容纳最大元素数量 + 缓冲区元素数量） */
        const renderDataNum =
            Math.ceil((containerRef.current?.clientHeight || 0) / itemHeight) +
            cacheNumber;

        /** 渲染元素起始索引 */
        let renderDataStartIndex =
            Math.floor((containerRef.current?.scrollTop || 0) / itemHeight) -
            cacheNumber;

        if (renderDataStartIndex < 0) {
            renderDataStartIndex = 0;
        }

        setRenderData(
            dataSource.slice(
                renderDataStartIndex,
                renderDataStartIndex + renderDataNum
            )
        );

        setRenderAreaOffset(renderDataStartIndex * itemHeight);
    }, [cacheNumber, dataSource, itemHeight]);

    useEffect(() => {
        setScrollerContainerHeight(dataSource.length * itemHeight);
        handleScroll();
    }, [dataSource, handleScroll, itemHeight]);

    return (
        <div
            className="virtual-list-container"
            ref={containerRef}
            style={{ height, width }}
            onScroll={handleScroll}
        >
            <div style={{ height: `${scrollerContainerHeight}px` }}></div>
            <div
                className="virtual-list-items-container"
                ref={listItemsContainerRef}
                style={{
                    width: "100%",
                    transform: `translate(0,${renderAreaOffset}px)`,
                }}
            >
                {renderData.map((item) => (
                    <div style={{ height: `${itemHeight}px` }} key={item.key}>
                        {listItemRender
                            ? listItemRender(item)
                            : typeof item === "object"
                                ? JSON.stringify(item)
                                : (item as string)}
                    </div>
                ))}
            </div>
        </div>
    );
};
