
import { Button } from "antd"
import { useState } from "react";

function Calendar() {

    const [date, setDate] = useState(new Date());


    const handlePrevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    };

    return (
        <div className="h-80 w-80 border-2 border-solid border-color-lime-400 flex flex-col ">
            <CalendarHeader handleNextMonth={handleNextMonth} handlePrevMonth={handlePrevMonth} date={date} />
            <CalendarWeek />
            <CalendarContent />
        </div>
    )
}


function CalendarHeader({ handlePrevMonth, handleNextMonth, date }) {

    const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月',];


    const handlePreClick = () => {

        handlePrevMonth(date);
    };

    const handleNextClick = () => {
        handleNextMonth(date);
    };

    return (
        <div className="flex justify-between flex-wrap h-7">
            <div >
                <Button type="primary" onClick={handlePreClick}> {`<`} </Button>
            </div>

            <div>{date.getFullYear()} {monthNames[date.getMonth()]} </div>

            <div><Button type="primary" onClick={handleNextClick}>{`>`}</Button></div>
        </div>
    )
}


function CalendarWeek() {

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    return (
        <div className="flex justify-between flex-wrap h-7">
            {
                days.map((day, index) => {
                    return (
                        <div key={index} className="flex justify-center">
                            {day}
                        </div>
                    )
                })
            }
        </div>
    )
}

function CalendarContent() {


    const daysOfMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate()
    }

    const weekOfDay = (year: number, month: number) => {
        return new Date(year, month, 1).getDay();
    };

    const renderDay = (year: number, month: number) => {

        const days = [];

        const dayCount = daysOfMonth(year, month);

    }

    const arr = new Array(42).fill(0)
    return (
        <div className="flex justify-between flex-wrap w-full bg-color-amber-100 flex-1" >
            {arr.map((_item, index) => {
                return (
                    <div key={index} className="flex justify-around w-1/6">
                        {index}
                    </div>
                )
            })}
        </div>
    )
}


export default Calendar