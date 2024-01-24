// /* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "antd";
import React, { useState } from "react";
import "./style.module.css";
import { InputType } from "@/Components/Login/Interface/interface";
// const { Search } = Input;

type PasswordViewProps = {
  visibility: boolean;
  inputChange: (e: any) => void;
};

const Index: React.FC = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [inputType, setInputType] = useState<InputType>(InputType.Verification);

  const inputChange = (e: any) => {
    console.log(e.target.value);
    alert(e.target.value);
    setVisibility(true);
    setInputType(InputType.Password);
  };
  let Verify;
  if (inputType === InputType.Password) {
    Verify = <PasswordView visibility={visibility} inputChange={inputChange} />;
  } else {
    Verify = <VerificationView />;
  }

  return (
    <>
      <div className="flex flex-col flex-wrap justify-around w-5/6 h-28 mt-14">
        <div className="w-full h-7">
          <Input
            className="h-10 rounded-full"
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

/**
 *  密码界面
 * @param param0 {visibility:boolean;inputChange:(e:any)=>void;}
 * @returns 密码界面
 */
const PasswordView = ({ visibility, inputChange }: PasswordViewProps) => {
  return (
    <>
      <div>
        <div className="w-full h-7 bg-custom">
          <Input.Password
            className="h-10 rounded-full"
            visibilityToggle={visibility}
            allowClear
            placeholder="去输入密码"
            onChange={() => {
              inputChange;
            }}
          />
        </div>
      </div>
    </>
  );
};
/**
 * 验证码界面
 * @returns 验证码界面
 */
const VerificationView = () => {
  return (
    <>
      <div className="relative overflow-hidden rounded-full bg-custom">
        <Input
          style={{ borderRadius: "30px" }}
          className="w-full h-10 rounded-full"
          placeholder="请输入验证码"
          allowClear
          size="large"
          // onSearch={onSearch}
        />
        <div className="absolute top-0 right-0 flex items-center justify-center h-full w-28 bg-pink">
          发送验证码
        </div>
      </div>
    </>
  );
};

export default Index;
