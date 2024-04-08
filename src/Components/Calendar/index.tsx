function Index() {
    return (
        <div className='w-full h-100vh bg-main'>
            <h1>日历组件</h1>
            <MouthCalendar/>
        </div>
    );
}


function MouthCalendar() {
    const weekList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    return <>
        <div>
            <div className='flex justify-around'>
                {weekList.map((week, _) => (
                    <div key={week}>{week}</div>
                ))}
            </div>
        </div>
    </>
}

export default Index;
