import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import App from "./App.jsx";
import './index.css'
import '../tailwind.css'
import {ConfigProvider} from "antd";
import zhCN from "antd/locale/zh_CN";
import {BrowserRouter as Router} from "react-router-dom";
import {ErrorBoundary} from "react-error-boundary";
import Error404 from '@/pages/Error/404/index.tsx'
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';


const fallbackRender = ({error}: any) => {
    return <div>
        <p>出错了：</p>
        <div>{error.message}</div>
        <Error404/>
    </div>
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ConfigProvider locale={zhCN}>
        <DndProvider backend={HTML5Backend}>
            <Router>
                <ErrorBoundary fallbackRender={fallbackRender}>
                    <App/>
                </ErrorBoundary>
            </Router>
        </DndProvider>
    </ConfigProvider>
);
