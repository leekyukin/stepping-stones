import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-auto w-full max-w-md">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
