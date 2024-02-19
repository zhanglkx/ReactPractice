import { Button } from "antd"

function Calendar() {
    return (
        <div className="h-80 w-80 border-2 border-yellow-300">
            <CalendarHeader />
            <CalendarWeek />
            <CalendarContent />
        </div>
    )
}



function CalendarHeader() {
    return (
        <div>
            <div>
                <Button type="primary">1</Button>
            </div>
            <div></div>
            <div><Button type="primary">Primary Button</Button></div>
        </div>
    )
}


function CalendarWeek() {
    return (
        <div>Calendar</div>
    )
}

function CalendarContent() {
    return (
        <div>Calendar</div>
    )
}


export default Calendar