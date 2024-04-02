function isElementInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    // 检查元素是否在水平和垂直方向上都至少部分可见
    const isInViewVertically = (rect.top >= 0 && rect.bottom <= windowHeight) ||
        (rect.top < 0 && rect.bottom > 0) ||
        (rect.top <= windowHeight && rect.bottom >= 0);

    const isInViewHorizontally = (rect.left >= 0 && rect.right <= windowWidth) ||
        (rect.left < 0 && rect.right > 0) ||
        (rect.left <= windowWidth && rect.right >= 0);

    return isInViewVertically && isInViewHorizontally;
}

export const isShouldDeleteFromParent = (element: HTMLElement, upDirection: boolean) => {
    const rect = element.getBoundingClientRect();
    console.log(upDirection? '向上': '向下')
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    // const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    if (rect.y > -(windowHeight/2) && rect.y < (700 + windowHeight/2)) {

    } else {
        element.remove();
    }

}

export default isElementInViewport
