import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

import '@/pages/error/403/index.less'

import Error404 from '@/assets/react.svg'
export default function Index() {
    const navigate = useNavigate()
    const goHome = () => {
        navigate('./')
    }
    return (
        <div className="error-card">
            <img src={Error404} alt="" />
            <Button type="primary" className="!text-[12px]" onClick={goHome}>
                回到首页
            </Button>
        </div>
    )
}
