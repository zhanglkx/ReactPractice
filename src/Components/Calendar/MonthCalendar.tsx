import {useEffect} from "react";
import {CalendarProps} from "@/Components/Calendar/index.tsx";
import dayjs, {Dayjs} from "dayjs";

interface MonthCalendarProps extends CalendarProps {

}


function getAllDays(date: Dayjs) {
    const daysInMouth = date.daysInMonth()          //每月的天数
    const startDate = date.startOf('month')      //每月开始
    const endDate = date.endOf('month')          //每月结束
    const day = startDate.day()                     //开始是哪天,也就是日历表格上 1 号之前，有多少个空位置

    const daysInfoList = Array(6 * 7);

    for (let i = 0; i < day; i++) {
        daysInfoList[i] = {date: startDate.subtract(day - i, 'day').format('YYYY-MM-DD')};
    }
}

function MouthCalendar(props: MonthCalendarProps) {
    const weekList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

    useEffect(() => {
        getAllDays(props.value)
    }, []);

    return <>
        <div className='border-0 border-b border-blue border-solid'>
            <div className='flex justify-around'>
                {/*{...props}*/}
                {weekList.map((week, _) => (
                    <div className='p-2 text-fontColor text-center flex-1 bg-color-amber-200 m-3 rounded'
                         key={week}>{week}</div>
                ))}
            </div>
        </div>
    </>
}

export default MouthCalendar;
