import { CalendarProps } from "@/components/Calendar/index.tsx";
import { Dayjs } from "dayjs";
import { useContext } from "react";
import LocaleContext from "@/components/Calendar/LocaleContext";
import allLocales from "@/components/Calendar/locale";

interface MonthCalendarProps extends CalendarProps {
}

/**
 * 获取给定日期所在月份的所有日期信息列表
 * @param date Dayjs类型，指定的日期
 * @returns 返回一个数组，每个元素包含日期对象和是否为当前月份的标志
 */
function getAllDays(date: Dayjs) {
    const daysInMouth = date.daysInMonth();          // 获取当前月份的天数
    const startDate = date.startOf('month');      // 获取当前月份的开始日期
    const endDate = date.endOf('month');          // 获取当前月份的结束日期
    const day = startDate.day();                     // 获取当前月份1号是星期几，用于计算前面需要填充的空白日期

    const daysInfoList: Array<{ date: Dayjs, currentMouth: boolean }> = Array(6 * 7);
    /**
     * 初始化数组，填充当前月份之前（包括上个月末尾）的日期信息
     */
    for (let i = 0; i < day; i++) {
        daysInfoList[i] = { date: startDate.subtract(day - i, 'day'), currentMouth: false };
    }
    /**
     * 填充当前月份及之后的日期信息
     */
    for (let i = day; i < daysInfoList.length; i++) {

        const calcDate = startDate.add(i - day, 'day');

        daysInfoList[i] = { date: calcDate, currentMouth: calcDate.month() === date.month() };
    }
    return daysInfoList;
}

/**
 * 渲染日历天数的函数。
 * @param days 一个数组，包含日期和是否为当前月份的标志的对象。
 * @param dateRender  // 定制日期显示，会完全覆盖日期单元格
 * @param dateInnerContent   // 定制日期显示，会完全覆盖日期单元格
 * @param value
 * @returns 返回一个元素数组，每个元素代表一周的日期显示。
 */
function renderDays(
    days: Array<{ date: Dayjs, currentMouth: boolean }>,
    value: Dayjs,
    dateRender?: MonthCalendarProps['dateRender'],
    dateInnerContent?: MonthCalendarProps['dateInnerContent'],

) {
    const rows = []; // 用于存储最终渲染的周数组

    // 创建6行（最多显示6周）
    for (let i = 0; i < 6; i++) {
        const row = []; // 用于存储每行的日期元素

        // 每行创建7个日期元素（一周7天）
        for (let j = 0; j < 7; j++) {
            const item = days[i * 7 + j]; // 根据行和列计算出当前日期对象

            row[j] = <div key={j}
                className={`text-left border border-borderColor border-solid overflow-hidden flex-1 h-16 ${item.currentMouth ? '' : 'text-ccc'} `}>

                {dateRender ? dateRender(item.date) : (<div>
                    <div
                        className={value.format('YYYY-MM-DD') === item.date.format('YYYY-MM-DD') ? "bg-color-amber-200" : ""}>{item.date.date()}</div>
                    <div>{dateInnerContent?.(item.date)}</div>
                </div>)}
            </div>

        }
        rows.push(row); // 将填充好的行加入到行数组中
    }

    // 将行数组映射为显示的周元素数组，并返回
    return rows.map((row, index) => <div key={index}
        className="w-full flex justify-around items-center text-color-slate-400">{row}</div>)
}


function MouthCalendar(props: MonthCalendarProps) {

    const localeContext = useContext(LocaleContext);
    const CalendarLocale = allLocales[localeContext.locale];

    // 顶部周数据源
    const weekList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

    // 获取页面上所有需要展示的日期，以及是否是当前月份的日期
    const allDays: Array<{ date: Dayjs, currentMouth: boolean }> = getAllDays(props.value)

    const { dateRender, dateInnerContent, value } = props;


    return <>
        <div className=''>
            <div className='flex justify-around border-0 border-b border-blue border-solid'>

                {weekList.map((week, _) => (
                    <div className='p-2 text-fontColor text-center flex-1 bg-color-amber-200 m-3 rounded'
                        key={week}> {CalendarLocale.week[week]}</div>
                ))}
            </div>
            <div className="">
                {
                    renderDays(allDays, value, dateRender, dateInnerContent)
                }
            </div>

        </div>
    </>
}

export default MouthCalendar;
