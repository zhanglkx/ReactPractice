import dayjs, {Dayjs} from "dayjs";
import MouthCalendar from '@/components/Calendar/MonthCalendar'

export interface CalendarProps {
    value: Dayjs;
}

function Index(props: CalendarProps = {value: dayjs('2024-04-10')}) {

    const day: string = '2023-11-08';

    // 更严谨的检查和设置默认值
    if (!props || Object.keys(props).length === 0) {
        props = {value: dayjs(day)};
    } else if (!props.value) {
        // 如果 props 不为空，但是缺少 value 属性，也设置默认 value
        props.value = dayjs(day);
    }

    return (
        <div className='h-full bg-main outline outline-offset-2 outline-1 m-2 rounded-sm'>
            <h1 className='text-center align-middle'>日历组件</h1>
            <MouthCalendar {...props}/>
            <h1>日历组件</h1>
        </div>
    );
}

export default Index;
