import Icon from "@/Components/Icon";
import { Button } from "antd";
import "./ThirdLogin.css";

function ThirdLogin() {
  const htmlRoot = document.getElementById("clickable-part");
  if (htmlRoot) {
    htmlRoot.addEventListener("click", () => {
      console.log("click");
    });
  }

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

        <div className=" h-12 flex  justify-between items-center bg-custom w-full">
          <Button type="primary" className="w-24 h-12 text-black">
            立即登录
          </Button>
          {/* 这是一段普通的文本，但<span>这里</span>是可以点击的。 */}
          {/* 这是一段普通的文本，但这里是可以点击的。 */}
        </div>
      </div>
    </>
  );
}

export default ThirdLogin;
