const zero = (text) => {
    text = String(text);
    return text.length < 2 ? `0${text}` : text;
};

const formatTime = function formatTime(time) {
    const arr = time.match(/\d+/g),
        [, month, day, hours = "00", minute = "00"] = arr;
    return `${zero(month)}-${zero(day)} ${zero(hours)}:${zero(minute)}`;
};

export default  formatTime;
