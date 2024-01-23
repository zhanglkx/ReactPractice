import { Input } from "antd";
import React, { useState } from "react";

const Index: React.FC = () => {
  const [visibility, setVisibility] = useState<boolean>(true);
//   setVisibility(!visibility);



  return (
    <>
      <div className="flex flex-col flex-wrap justify-around w-full mt-10 h-28 bg-pink">
        <div className="w-full h-8">
          <Input activeBg='#000000' allowClear placeholder="请输入手机号" />
        </div>
        <div className="w-full h-8">
          <Input.Password
            visibilityToggle={visibility}
            allowClear
            placeholder="去输入密码"
          />
        </div>
      </div>
    </>
  );
};



export default Index;
