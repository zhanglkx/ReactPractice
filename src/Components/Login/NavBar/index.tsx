import { Button, message } from "antd";

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info("Hello, Ant Design!");
  };

  return (
    <>
      {contextHolder}
      <div className="bg-custom flex flex-auto justify-between items-center h-[60px]">
        <div></div>
        <Button type="text" size="large" onClick={info}>
          短信登录
        </Button>
      </div>
    </>
  );
};





export default App;
