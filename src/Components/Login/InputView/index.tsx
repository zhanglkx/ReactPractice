import { Input } from "antd";
import React, { useState } from "react";
import "./index.css";
import { InputType } from "@/Components/Login/Interface/interface";

const { Search } = Input;

const Index: React.FC = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [inputType, setInputType] = useState<InputType>(InputType.Password);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    alert(e.target.value);
    setVisibility(true);
  };
  let Verify;
  if (inputType === InputType.Password) {
    Verify = <PasswordView visibility={visibility} inputChange={inputChange} />;
  } else {
    Verify = <VerificationView />;
  }

  return (
    <>
      <div className="flex flex-col flex-wrap justify-around w-5/6 h-20 mt-14 bg-pink">
        <div className="w-full h-7">
          <Input
            className="rounded-full"
            allowClear
            placeholder="请输入手机号"
            onChange={inputChange}
          />
        </div>
        {Verify}
      </div>
    </>
  );
};

const PasswordView: React.FC = (visibility, inputChange) => {
  return (
    <>
      <div>
        <div className="w-full h-7 bg-custom">
          <Input.Password
            className="rounded-full"
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

const VerificationView: React.FC = () => {
  return (
    <>
      <div>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          loading
        />
      </div>
    </>
  );
};

export default Index;
