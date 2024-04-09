/* eslint-disable prefer-const */
import dayjs, {Dayjs} from "dayjs";
import MouthCalendar from '@/components/Calendar/MonthCalendar'
import Header from '@/components/Calendar/Header'
import {CSSProperties, ReactNode} from "react";
import cs from "classnames";

export interface CalendarProps {
    value: Dayjs;
    style?: CSSProperties;
    className?: string;
    // 定制日期显示，会完全覆盖日期单元格
    dateRender?: (currentDate: Dayjs) => ReactNode;
    // 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。
    dateInnerContent?: (currentDate: Dayjs) => ReactNode;
    //国际化相关
    locale?: string;
    onChange?: (date: Dayjs) => void;
}

/**
 * 每一个 item 的样式
 * @param currentDate 当前日期
 */
function renderFun(currentDate: Dayjs): ReactNode {
    return (
        <>
            <div>
                <p style={{height: '50px'}}>{currentDate.format('YYYY/MM/DD')}</p>
            </div>
        </>)
}

function Index(props: CalendarProps = {value: dayjs('2024-04-10')}) {

    const day: string = '2023-11-08';

    props = {
        value: dayjs(day),
        className: 'calendar',
        style: {backgroundColor: 'white'},
        dateRender: renderFun
    };

    let {value, style, className} = props;

    const classNames = cs('calendar', className);


    return (
        <div className={`h-full outline outline-offset-2 outline-1 m-2 rounded-sm ${classNames}`} style={style}>
            <Header/>
            <MouthCalendar {...props} />
        </div>
    );
}

export default Index;
