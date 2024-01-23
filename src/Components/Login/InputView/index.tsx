import { Input } from "antd";
import React, { useState } from "react";

const Index: React.FC = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
//   setVisibility(!visibility);

const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
  alert(e.target.value);
  setVisibility(true);
};


  return (
    <>
      <div className="flex flex-col flex-wrap justify-around w-full mt-10 h-28 bg-pink">
        <div className="w-full h-8">
          <Input allowClear placeholder="请输入手机号" onChange={inputChange}/>
        </div>
        <div className="w-full h-8">
          <Input.Password
            visibilityToggle={visibility}
            allowClear
            placeholder="去输入密码"
            onChange={inputChange}
          />
        </div>
      </div>
    </>
  );
};



export default Index;
