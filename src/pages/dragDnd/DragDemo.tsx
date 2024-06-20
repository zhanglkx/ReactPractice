import styles from './style.module.less';
import {useEffect, useRef, useState} from "react";
import {useDrag, useDragLayer, useDrop} from "react-dnd";
import {getEmptyImage} from "react-dnd-html5-backend";


interface ItemType {
    color: string;
}

interface BoxProps {
    color: string
}

function Box(props: BoxProps) {
    const ref = useRef(null);

    const [{dragging}, drag, dragPreview] = useDrag({
        type: 'box',
        item: {
            color: props.color
        },
        collect(monitor) {
            return {
                dragging: monitor.isDragging()
            }
        }
    });

    useEffect(() => {
        drag(ref);
        dragPreview(getEmptyImage(), {captureDraggingState: true});
    }, [])


    return <div ref={ref} className={[dragging ? styles.dragging : '', styles.box].join(" ")} style={
        {background: props.color || 'blue'}
    }></div>
}

const DragLayer = () => {
    const {isDragging, item, currentOffset} = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        isDragging: monitor.isDragging(),
        currentOffset: monitor.getSourceClientOffset(),
    }));

    if (!isDragging) {
        return null;
    }
    return (
        <div className={styles.dragLayer} style={{
            left: currentOffset?.x,
            top: currentOffset?.y
        }}>{item.color} 拖拖拖</div>
    );
}


function Container() {
    const ref = useRef(null)

    const [boxes, setBoxes] = useState<ItemType[]>([]);

    const [, drop] = useDrop({
        accept: 'box', drop(item: ItemType) {
            console.log(item)
            setBoxes((boxes) => [...boxes, item])
        }
    })
    useEffect(() => {
        drop(ref);
    }, []);

    return <div ref={ref} className={styles.container}> {
        boxes.map(item => {
            return <Box key={item.color + Math.random()} color={item.color}></Box>
        })
    }</div>
}

const DragDemo = () => {
    return (
        <div>
            <Container></Container>
            <Box color={'red'}></Box>
            <Box color={'blue'}></Box>
            <Box color={'green'}></Box>
            <DragLayer/>
        </div>
    );
};

export default DragDemo;
