//写一个节流函数
// 根据环境选择正确的类型；在 Node.js 环境下使用 NodeJS.Timeout，在浏览器环境下使用 number
type Timer = number | null;

export function throttle<T extends never[]>(fn: (...args: T) => void, delay: number): (...args: T) => void {
    let timer: Timer = null;

    return function(...args: T): void {
        if (timer !== null) return;
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, delay);
    };
}
