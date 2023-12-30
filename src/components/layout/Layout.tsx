import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-auto h-screen max-w-md overflow-hidden border-2 border-main">
      <Header />
      <div className="mx-auto max-w-md">{children}</div>
    </div>
  );
};

export default Layout;
