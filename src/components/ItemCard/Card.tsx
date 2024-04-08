import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { Props } from '@/components/ItemCard/type'
import { useNavigate } from "react-router-dom";
const { Meta } = Card;


const App: React.FC<Props> = ({ title, desc, route }: Props) => {
  const navigate = useNavigate();

  const handleNavToAbout = () => {
    // 👇️ navigate programmatically
    navigate(route);
  };

  const min = 1;
  const max = 100;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // 1 to 100

  const url: string = `https://api.dicebear.com/7.x/miniavs/svg?seed=${randomNum}`

  return (
    <Card
      style={{ width: 200, height: 235, border: '1px solid lightgray', margin: 15 }}
      hoverable
      cover={
        <img
          style={{ width: 'calc(100% - 2px)', marginLeft: 1, marginTop: 1, height: 93 }}
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" style={{ display: 'flex', justifyContent: 'center' }} />,
      ]}
      onClick={handleNavToAbout}
    >
      <Meta
        avatar={<Avatar src={url} />}
        title={title}
        description={desc}
        style={{ padding: 0, height: 53, margin: 0 }}
      />
    </Card >
  );
};



export default App;
