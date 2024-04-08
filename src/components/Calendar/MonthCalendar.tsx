import {useEffect} from "react";
import {CalendarProps} from "@/components/Calendar/index.tsx";
import dayjs, {Dayjs} from "dayjs";

interface MonthCalendarProps extends CalendarProps {

}


function getAllDays(date: Dayjs) {
    const daysInMouth = date.daysInMonth()          //每月的天数
    const startDate = date.startOf('month')      //每月开始
    const endDate = date.endOf('month')          //每月结束
    const day = startDate.day()                     //开始是哪天,也就是日历表格上 1 号之前，有多少个空位置

    const daysInfoList: Array<{ date: Dayjs, currentMouth: boolean }> = Array(6 * 7);
    /**
     * 获取 1 号之前的日期，也就是上个月显示在当前页面的日期
     */
    for (let i = 0; i < day; i++) {
        daysInfoList[i] = {date: startDate.subtract(day - i, 'day'), currentMouth: false};
    }
    // 获取剩下的日期
    for (let i = day; i < daysInfoList.length; i++) {
        daysInfoList[i] = {date: startDate.add(i - day, 'day'), currentMouth: false};
    }
    return daysInfoList;
}

function renderDays(days: Array<{ date: Dayjs, currentMonth: boolean }>) {
    const rows = [];
    for (let i = 0; i < 6; i++) {
        const row = [];
        for (let j = 0; j < 7; j++) {
            const item = days[i * 7 + j];
            row[j] = <div key={`${i}+${j}`}
                          className="p-2 text-fontColor text-center flex-1 bg-color-amber-200 m-3 rounded">{item.date.date()}</div>
        }
        rows.push(row);
    }
    return rows.map(row => <div className="w-full flex justify-around items-center text-color-slate-400">{row}</div>)
}


function MouthCalendar(props: MonthCalendarProps) {
    const weekList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

    const allDays: Array<{ date: Dayjs, currentMouth: boolean }> = getAllDays(props.value)

    return <>
        <div className=''>
            <div className='flex justify-around border-0 border-b border-blue border-solid'>
                {/*{...props}*/}
                {weekList.map((week, _) => (
                    <div className='p-2 text-fontColor text-center flex-1 bg-color-amber-200 m-3 rounded'
                         key={week}>{week}</div>
                ))}
            </div>
            <div className="">
                {
                    renderDays(allDays)
                }
            </div>

        </div>
    </>
}

export default MouthCalendar;
