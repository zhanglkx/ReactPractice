import Icon from "@/Components/Icon";
import "./ThirdLogin.css";
import { useEffect, useState } from "react";
import { useLoginStore } from '@/stores/Login'


function ThirdLogin() {

  const [state, setState] = useState<string>("icon-yuan");

  // const agreePolicy = useLoginStore(state => state.agreePolicy);
  const updateAgreePolicy = useLoginStore(state => state.updateAgreePolicy)

  useEffect(() => {
    const htmlRoot = document.getElementById("clickable-part");

    if (htmlRoot) {
      htmlRoot.addEventListener("click", () => {

        window.open('https://www.baidu.com/s?wd=AUX', '_blank');
      });
    }
  },);



  const switchIcon = () => {

    setState(state === "icon-yuan" ? "icon-duihao" : "icon-yuan");
    if (state === "icon-duihao") {
      agreed();
    } else if (state === "icon-yuan") {
      notAgreed();
    }
  };

  const agreed = () => {
    updateAgreePolicy(true);
  };

  const notAgreed = () => {
    updateAgreePolicy(false);
  };

  const wechatClick = () => {
    window.open('https://www.baidu.com/s?wd=weixin', '_blank');
  };

  const qqClick = () => {
    window.open('https://www.baidu.com/s?wd=qq', '_blank');
  };

  const appleClick = () => {
    window.open('https://www.baidu.com/s?wd=apple', '_blank');
  };

  return (
    <>
      <div className="  w-full  h-28 bottom-0 fixed">
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex justify-center bg-color-pink-50 h-0.5 w-2/6"></div>
          <div className="flex justify-center">其他方式登录</div>
          <div className="flex justify-center bg-color-purple-500 h-0.5 w-2/6"></div>
        </div>

        <div className="flex justify-between items-center ml-20 mr-20">
          <Icon className="w-10 h-10 " type="icon-weixin" onClick={wechatClick} />
          <Icon className="w-10 h-10 " type="icon-qq" onClick={qqClick} />
          <Icon className="w-10 h-10 " type="icon-pingguo" onClick={appleClick} />
        </div>

        <div className=" h-12 flex justify-center items-center w-full ml">

          <div className="inline-block">
            <Icon className="w-4 h-4 inline-block" type={state} onClick={switchIcon} />
            <div className="inline-block">这是一段普通的文本，但<span className="text-color-pink-500" id="clickable-part">这里</span>是可以点击的。</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdLogin;
