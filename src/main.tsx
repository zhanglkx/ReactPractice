import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import App from "./App.jsx";
import './index.css'
import '../tailwind.css'
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider locale={zhCN}>
    <Router>
      <App />
    </Router>
  </ConfigProvider>
);
