import styles from './style.module.css';
import { useEffect } from "react";
import MyComponent from './MyComponent.tsx'
import { Props } from './Type.ts'



const List: Props[] = [
    {
        idx: 1,
        columnIdx: 1,
        width: '200',
        height: '300',
        left: 100,
        top: 100,
        text: 'string',
        lineHeight: 400, // 根据css设置的值计算得到 文字高度
    },
    {
        idx: 1,
        columnIdx: 1,
        width: '200',
        height: '300',
        left: 100,
        top: 100,
        text: 'string',
        lineHeight: 400, // 根据css设置的值计算得到 文字高度
    },
]

function WaterFall() {

    useEffect(() => {
        document.title = '瀑布流';
    }, []);

    return (
        <>
            <div className={styles.root}>
                <div className={styles.aside}>我是侧边栏</div>
                <main>
                    <div className={styles.header}>我是顶部</div>
                    <div className={styles.waterFallContainer}>
                        <div className={styles.container}>
                            <div className={styles.loading}>加载中...</div>
                            {List.map((item, index) => {
                                return <MyComponent key={index} {...item} />
                            })}
                        </div>
                    </div>
                </main>
            </div>
            <div className={styles.toTop}>↑</div>
        </>
    )
}




export default WaterFall
