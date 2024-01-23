import { Input } from "antd";

const index: React.FC = () => {
  return (
    <>
      <div className="w-full h-16 pt-5 bg-pink">
        <div>
          <Input allowClear placeholder="Basic usage" />
        </div>
        <div>
          <Input.Password allowClear placeholder="Basic usage" />
        </div>
      </div>
    </>
  );
};

export default index;
