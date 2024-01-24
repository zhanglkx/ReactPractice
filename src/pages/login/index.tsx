
import NavBar from "@/Components/Login/NavBar";
import IconView from "@/Components/Login/IconView";
import InputView from "@/Components/Login/InputView";

function Login() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center bg-theme">
        <NavBar />
        <IconView />
        <InputView />
      </div>
    </>
  );
}

export default Login;
