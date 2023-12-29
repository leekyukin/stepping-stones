import Login from "@/components/login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Stepping Stones",
  description: "사람을 머물게 하는 가구, 우리도 사장님의 매출이 중요합니다.",
};

export default function LoginPage() {
  return <Login />;
}
