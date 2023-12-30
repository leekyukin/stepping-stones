import GoogleButton from "@/components/login/GoogleButton";
import KakaoButton from "@/components/login/KakaoButton";
import LoginTitle from "@/components/login/LoginTitle";
import NaverButton from "@/components/login/NaverButton";
import DecorationBandMarquee from "../shared/DecorationBand";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <LoginTitle />
      <div className="mx-auto flex w-64 flex-col justify-center gap-3 text-lg font-semibold ">
        <KakaoButton />
        <NaverButton />
        <GoogleButton />
      </div>

      <DecorationBandMarquee />
    </div>
  );
};

export default Login;
