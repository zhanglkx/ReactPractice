
import { Button } from "antd"
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

function Calendar(props, ref) {

    const [date, setDate] = useState(new Date());

    useImperativeHandle(ref, () => {
        return {
            getDate() {
                return date;
            },
            setDate(date: Date) {
                setDate(date)
            }
        }
    });

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
            <CalendarContent date={date} onChange={(date: Date) => {
                alert(date.toLocaleDateString());
            }} />
        </div>
    )
}


function CalendarHeader({ handlePrevMonth, handleNextMonth, date }: { handlePrevMonth: any, handleNextMonth: any, date: Date }) {

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

function CalendarContent({ date, onChange }: { date: Date, onChange?: any }) {

    const daysOfMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate()
    }

    const weekOfDay = (year: number, month: number) => {
        return new Date(year, month, 1).getDay();
    };

    const renderDays = () => {
        const days = [];

        const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
        const firstDay = weekOfDay(date.getFullYear(), date.getMonth());

        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="w-1/7"></div>);
        }

        for (let i = 1; i <= daysCount; i++) {
            const clickHandler = onChange?.bind(null, new Date(date.getFullYear(), date.getMonth(), i));
            if (i === date.getDate()) {
                days.push(<div key={i} className="w-1/7 flex justify-center items-center bg-color-orange-300" onClick={clickHandler}>{i}</div>);
            } else {
                days.push(<div key={i} className="w-1/7 flex justify-center items-center" onClick={clickHandler}>{i}</div>);
            }
        }
        return days;
    };

    return (
        <div className="flex flex-wrap w-full mt-2 bg-color-amber-100 flex-1" >
            {renderDays()}
        </div>
    )
}


const CalendarRef = forwardRef(Calendar);

const TestApp = () => {


    const calendarRef = useRef(null);

    useEffect(() => {
        const date = calendarRef.current.getDate();
        alert(date.toLocaleDateString());
    }, []);
    return (<>
        <CalendarRef ref={calendarRef} props={1} />
    </>)

}

export default TestApp
