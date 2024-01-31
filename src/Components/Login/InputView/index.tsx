// /* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input } from "antd";
import { useState } from "react";
// import styles from "./style.module.css";
import "./index.css";
import { useLoginStore } from '@/stores/Login'

type PasswordViewProps = {
  visibility: boolean;
  inputChange: (e: any) => void;
};

const Index = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  // const [inputType, setInputType] = useState<InputType>(InputType.Verification);

  const loginType = useLoginStore((state) => state.loginType);
  // const updateLoginType = useLoginStore((state) => state.updateLoginType);

  const inputChange = (e: any) => {
    console.log(e.target.value);
    // alert(e.target.value);
    setVisibility(true);
  };
  let Verify;
  if (loginType === 'password') {
    Verify = <PasswordView visibility={visibility} inputChange={inputChange} />;
  } else {
    Verify = <VerificationView />;
  }

  return (
    <>
      <div className="test flex flex-col flex-wrap justify-around w-5/6 h-30 mt-3 marker:mt-14">
        <div className="w-full h-12">
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
        <div className="w-full  h-14 flex justify-center items-center">
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
      <div className="w-full h-30 mt-7">
        <div className="relative w-full h-10 overflow-hidden ">
          <Input
            className="h-10 rounded-full"
            placeholder="请输入验证码"
            allowClear
            size="large"
            // onSearch={onSearch}
          />
          <div
            className="absolute top-0 right-0 flex items-center justify-center h-10 w-28 z-10"
            onClick={() => {
              alert("发送验证码");
            }}
          >
            发送验证码
          </div>
        </div>
        <div className="pt-1 pl-4 pr-4">新手机注册后可使用，自动登录</div>
        <div className="flex items-center justify-center w-full h-12 mt-6  ">
          <Button
            // style={{ color: "white", borderRadius: "30px" }}
            // className={`${styles.test } ${styles.antBtnPrimary} w-full`}
            className="w-full bg-pink"
            size="large"
            type="primary"
          >
            立即登录
          </Button>
        </div>
      </div>
    </>
  );
};

export default Index;
