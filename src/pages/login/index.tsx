
import NavBar from "@/Components/Login/NavBar";
import IconView from "@/Components/Login/IconView";
import InputView from "@/Components/Login/InputView";
import ThirdLogin from "@/Components/Login/ThirdLoginView/ThirdLogin";
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
