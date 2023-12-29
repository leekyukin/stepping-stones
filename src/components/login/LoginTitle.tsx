import { FaHeart } from "react-icons/fa";

const LoginTitle = () => {
  return (
    <h1 className="mt-64 text-2xl font-semibold">
      <div>Wanna Join the </div>
      <div className="flex items-center gap-3">
        <span className="bg-kakaoYellow px-1 leading-6">St-St</span> Club?{" "}
        <FaHeart className="text-[#DD0000]" />
      </div>
    </h1>
  );
};

export default LoginTitle;
