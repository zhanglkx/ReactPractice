import { Button } from "antd"
import { useState } from "react";

function Calendar() {
    return (
        <div className="h-80 w-80 border-2 border-solid border-color-lime-400 flex flex-col ">
            <CalendarHeader />
            <CalendarWeek />
            <CalendarContent />
        </div>
    )
}


function CalendarHeader() {

    const [date, setDate] = useState(new Date());

    const handlePrevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    };


    return (
        <div className="flex justify-between flex-wrap h-7">
            <div >
                <Button type="primary" onClick={handlePrevMonth}> {`<`} </Button>
            </div>

            <div>{date.toLocaleDateString()}</div>

            <div><Button type="primary" onClick={handleNextMonth}>{`>`}</Button></div>
        </div>
    )
}


function CalendarWeek() {

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

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