import GoogleButton from "@/components/login/GoogleButton";
import KakaoButton from "@/components/login/KakaoButton";
import LoginTitle from "@/components/login/LoginTitle";
import NaverButton from "@/components/login/NaverButton";

const Login = () => {
  return (
    <div className="flex h-96 flex-col items-center justify-center">
      <LoginTitle />
      <div className="mx-auto mt-10 flex w-64 flex-col justify-center gap-3 text-lg font-semibold ">
        <KakaoButton />
        <NaverButton />
        <GoogleButton />
      </div>
    </div>
  );
};

export default Login;
