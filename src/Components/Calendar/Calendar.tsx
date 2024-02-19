import { Button } from "antd"

function Calendar() {
    return (
        <div className="h-80 w-80 bg-color-slate-300  border-2 border-solid border-color-lime-400">
            <CalendarHeader />
            <CalendarWeek />
            <CalendarContent />
        </div>
    )
}



function CalendarHeader() {
    return (
        <div className="flex justify-between flex-wrap">
            <div >
                <Button type="primary"> {`<`} </Button>
            </div>

            <div>{`1111`}</div>

            <div><Button type="primary">{`>`}</Button></div>
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