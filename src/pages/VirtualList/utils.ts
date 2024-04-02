import {Props} from '@/views/WaterFall/Type.ts'

import WHList from '@/views/WaterFall/Data.ts'
import {DataListProps} from "@/views/VirtualList/Type.ts";


export const getList = ({ hasNextPage, page, pageSize, list}: DataListProps) => {
    return new Promise((resolve) => {
        const start = (page - 1) * pageSize;
        const nextList = WHList.slice(start, start + pageSize) as ;
        hasNextPage = !!nextList.length; //判断nextList长度是否为0，是否还有下一页
        list = page === 1 ? nextList : list.concat(nextList);
        setTimeout(
            () => {
                resolve(nextList);
            },
            page === 1 ? 0 : 2000
        ); // 模拟发送请求
    });
};
