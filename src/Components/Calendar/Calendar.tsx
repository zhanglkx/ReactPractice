import { Button } from "antd"
import { useState, useEffect } from "react"

function Calendar() {
    return (
        <div className="h-80 w-80 border-2 border-solid border-color-lime-400">
            <CalendarHeader />
            <CalendarWeek />
            <CalendarContent />
            <Page />
        </div>
    )
}


function Page() {
    const [value, setValue] = useState(1)
    console.log(b)
    useEffect(() => {
        console.log(value)
        setValue(2)
    }, [])
    var b = 8
    console.log(b - value)
    return (
        <div className="h-80 w-80 border-2 border-solid border-color-lime-400">

        </div>
    )
}






function CalendarHeader() {
    return (
        <div className="flex justify-between flex-wrap">
            <div >
                <Button type="primary"> {`<`} </Button>
            </div>

            <div>{new Date().toLocaleDateString()}</div>

            <div><Button type="primary">{`>`}</Button></div>
        </div>
    )
}


function CalendarWeek() {

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

    return (
        <div className="flex justify-between flex-wrap">
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
    return (
        <div>Calendar</div>
    )
}


export default Calendar