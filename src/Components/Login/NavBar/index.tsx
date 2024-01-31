import { Button, message } from "antd";
import { useLoginStore } from '@/stores/Login'
import { useEffect, useState } from "react";

const App: React.FC = () => {

  const [messageApi, contextHolder] = message.useMessage();

  const loginType = useLoginStore((state) => state.loginType);
  const updateLoginType = useLoginStore((state) => state.updateLoginType);
const [title, setTitle] = useState<string>('密码登录')

  useEffect(() => {
    if (loginType === 'phone') {
      messageApi.info('短信登录')
      setTitle('短信登录')
    } else if (loginType === 'password') {
      messageApi.info('密码登录')
      setTitle('密码登录')
      
    } else {
      updateLoginType('password')
    }


  }, [loginType])

  const changeLoginType = () => {
    const type = loginType === 'phone' ? 'password' : 'phone'
    updateLoginType(type)
  }


  return (
    <>
      {contextHolder}
      <div className="flex flex-auto justify-between items-center h-[60px]">
        <div></div>
        <Button type="text" size="large" onClick={changeLoginType}>
          {title}
        </Button>
      </div>
    </>
  );
};





export default App;
