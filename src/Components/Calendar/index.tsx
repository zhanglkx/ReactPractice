function Index() {
    return (
        <div className='h-full bg-main outline outline-offset-2 outline-1 m-2 rounded-sm'>
            <h1 className='text-center align-middle'>日历组件</h1>
            <MouthCalendar/>
            <h1>日历组件</h1>
        </div>
    );
}


function MouthCalendar() {
    const weekList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    return <>
        <div className='border-0 border-b border-blue border-solid'>
            <div className='flex justify-around'>
                {weekList.map((week, _) => (
                    <div className='p-2 text-fontColor text-center flex-1 bg-color-amber-200 m-3 rounded' key={week}>{week}</div>
                ))}
            </div>
        </div>
    </>
}

export default Index;
