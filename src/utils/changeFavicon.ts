/**
 *  更改网页favicon图标
 * @param url
 */
function changeFavicon(url: string): void {
    const link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
        const newLink: HTMLLinkElement = document.createElement('link');
        newLink.rel = 'icon';
        newLink.href = url;
        document.head.appendChild(newLink);
    } else {
        link.href = url;
    }
}

export default changeFavicon;
