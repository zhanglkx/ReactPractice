import { Props } from '@/Components/ItemCard/type'

const ItemArray: Props[] = [
    {
        title: '关于',
        desc: 'About me',
        route: '/about',
    },
    {
        title: '日历',
        desc: '日历组件',
        route: '/calendar',
    },
    {
        title: ' 动态传参',
        desc: '动态传参',
        route: '/product/1',
    },
    {
        title: '登录界面',
        desc: '登录界面',
        route: "/login",
    },
    {
        title: '设备界面',
        desc: '设备列表界面',
        route: "/deviceList",
    },
    {
        title: ' TODO 任务描述是必填项',
        desc: 'TODO 任务描述是必填项',
        route: '/task',
    },
    {
        title: ' 虚拟列表',
        desc: '虚拟列表',
        route: '/virtualList',
    },
    {
        title: '瀑布流',
        desc: '展示瀑布流布局',
        route: '/waterfall',
    },
    {
        title: '/Admin',
        desc: '/Admin',
        route: '/Admin',
    },
    {
        title: 'Contact',
        desc: 'Contact',
        route: '/Contact',
    },
    {
        title: ' 表格列的数据',
        desc: ' form',
        route: '/zform',
    },
]

export default ItemArray
