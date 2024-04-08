
import NavBar from "@/components/Login/NavBar";
import IconView from "@/components/Login/IconView";
import InputView from "@/components/Login/InputView";
import ThirdLogin from "@/components/Login/ThirdLoginView/ThirdLogin";
// import { BearCounter, Controls } from '@/pages/Demo/zustand'

function Login() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center bg-theme w-full h-full">
        <NavBar />
        <IconView />
        <InputView />
        <ThirdLogin/>
        {/* <BearCounter/>
        <div>======</div>
        <Controls/> */}
      </div>
    </>
  );
}

export default Login;
