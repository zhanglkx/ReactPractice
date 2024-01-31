import { Button, message } from "antd";
import { useLoginStore } from '@/stores/Login'
import { useEffect } from "react";

const App: React.FC = () => {

  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info("Hello, Ant Design!");
  };

  const loginType = useLoginStore((state) => state.loginType);
  const updateLoginType = useLoginStore((state) => state.updateLoginType);


  useEffect(() => {
    if (loginType === 'phone') {
      message.info('短信登录')
    } else if (loginType === 'password') {
      message.info('密码登录')
    }else{
      updateLoginType('password')
    }
  }, [loginType])

  const changeLoginType = () => {
    const type = loginType === 'phone' ? 'password' : 'phone'
    updateLoginType(type)
    info();
  }


  return (
    <>
      {contextHolder}
      <div className="flex flex-auto justify-between items-center h-[60px]">
        <div></div>
        <Button type="text" size="large" onClick={changeLoginType}>
          {loginType}
        </Button>
      </div>
    </>
  );
};





export default App;
