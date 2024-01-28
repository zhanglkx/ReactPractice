import Icon from "@/Components/Icon";
import { Button } from "antd";
import './ThirdLogin.css'

function ThirdLogin() {
  return (
    <>
      <div className="  w-full  h-28 bottom-0 fixed">
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex justify-center bg-pink h-0.5 w-2/6"></div>
          <div className="flex justify-center">其他方式登录</div>
          <div className="flex justify-center bg-tahiti-tahiti h-0.5 w-2/6"></div>
        </div>

        <div className="flex justify-between items-center ml-20 mr-20">
          <Icon className="w-10 h-10 " type="icon-weixin" />
          <Icon className="w-10 h-10 " type="icon-qq" />
          <Icon className="w-10 h-10 " type="icon-pingguo" />
        </div>

        <div className="w-24 h-12 flex  justify-between items-center bg-custom">
          <Button type="primary" className="w-24 h-12 text-black">
            立即登录
          </Button>
        </div>
      </div>
    </>
  );
}

export default ThirdLogin;
