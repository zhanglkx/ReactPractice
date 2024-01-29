import { useEffect } from "react";

// 组件 props 的类型
type Props = {
  // icon 的类型
  type: string; //其中type是必传的，不然显示不出来
  // icon 的自定义样式
  className?: string;
  // 点击事件
  onClick?: () => void;
};
const Icon = ({ type, className, onClick }: Props) => {
  useEffect(() => {
    // console.log(type, className);
  });
  return (
    <svg
      className={"icon " + className} //'icon '这里有空格，不然类名不生效
      aria-hidden="true"
      onClick={onClick}
    >
      <use xlinkHref={`#${type}`}></use>
    </svg>
  );
};
export default Icon;
