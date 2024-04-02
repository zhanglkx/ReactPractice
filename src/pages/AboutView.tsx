import { useSearchParams, useNavigate } from "react-router-dom";

function AboutView() {
  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate(-1);
  };

  // 获取about查询参数redirect的值
  const [SearchParams] = useSearchParams();
  // 获取redirect的值
  const redirect = SearchParams.get("redirect");
  // 渲染
  return (
    <div>
      {/* // 传递查询参数 */}
      <h1>About页面查询参数：-{redirect}</h1>
      <button onClick={handleClick}>Back to Home</button>
    </div>
  );
}

// 导出组件
export default AboutView;
