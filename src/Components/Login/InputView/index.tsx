import { Button, Input, message } from "antd";
import { useState } from "react";
import "./index.css";
import { useLoginStore } from '@/stores/Login'
import { useNavigate } from 'react-router-dom'

type PasswordViewProps = {
  visibility: boolean;
  inputChange: (e: any) => void;
};

const Index = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');


  const loginType = useLoginStore((state) => state.loginType);

  const inputChange = (e: any) => {
    console.log(e.target.value);
    // alert(e.target.value);
    setVisibility(true);
  };

  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;


    const numberRegex = /^[0-9]+$/;
    const isValidInput = numberRegex.test(value);
    if (isValidInput) {
      console.log(value);
      setInputValue(value)

    } else {
      setInputValue(inputValue)
    }
  }


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
            className="h-10 rounded-full  text-lg"
            allowClear
            placeholder="请输入手机号"
            maxLength={11}
            onChange={inputHandle}
            value={inputValue}
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


  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  // const routerChange = useLoginStore((state) => state.routerChange);
  // const goggo = useLoginStore((state) => state.increase);

  const forgetPassword = () => {
    messageApi.info('忘记密码？')
  };

  // useEffect(() => {
  //   console.log(routerChange);
  //   // let 
  //   navigate(goggo('/deviceList'));
  // }, []);

  return (
    <>
      {contextHolder}
      <div>
        <div className="w-full mt-2  ">
          <Input.Password
            className="h-10 rounded-full text-lg"
            visibilityToggle={visibility}
            allowClear
            placeholder="去输入密码"
            onChange={inputChange}
          />

          <div className="flex ml-3 mr-3 mt-2">
            <div className="text-xs flex-1 text-color-gray-500">密码必须包含数字、小写字母、大写字母、特殊符号，且长度要在8-18位之间</div>
            <div className="w-50 text-sm flex justify-center items-center ml-2 text-blue-300" onClick={forgetPassword}>忘记密码？</div>
          </div>

          <div className="flex items-center justify-center w-full h-12 mt-6">
            <Button
              className="w-full"
              size="large"
              type="primary"
              onClick={() => navigate('/deviceList')}
            >
              登录
            </Button>
          </div>

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

  const navigate = useNavigate();

  const goToLogin = () => {
    alert("登录");
    navigate('/deviceList');
  };

  return (
    <>
      <div className="w-full h-34 mt-2">
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
        <div className="pt-1 pl-4 pr-4 text-xs text-color-gray-500">新手机注册后可使用，自动登录</div>
        <div className="flex items-center justify-center w-full h-12 mt-6  ">
          <Button
            // style={{ color: "white", borderRadius: "30px" }}
            // className={`${styles.test } ${styles.antBtnPrimary} w-full`}
            className="w-full bg-pink"
            size="large"
            type="primary"
            onClick={goToLogin}
          >
            立即登录
          </Button>
        </div>
      </div>
    </>
  );
};

export default Index;
