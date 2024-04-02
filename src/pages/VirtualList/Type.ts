import {Props} from "@/views/WaterFall/Type.ts";

export  type DataListProps = {
    start?: number,
    page: number,
    pageSize: number,
    list: Props[],
    hasNextPage: boolean,
}
