export type Props = {
    idx: number,
    columnIdx: number,
    width: string,
    height: string,
    left: number,
    top: number,
    text: string,
    lineHeight: number, // 根据css设置的值计算得到 文字高度
}


export type WHList1Type = {
    w: number;
    h: number;
};

export type DomProps = {
    dom: HTMLElement,
}
