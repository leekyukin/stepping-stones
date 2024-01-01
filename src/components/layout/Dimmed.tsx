import useDisableScroll from "@/hook/useDisableScroll";
import classNames from "classnames";
import { ReactNode } from "react";

interface DimmedProps {
  isVisible?: boolean;
  close: () => void;
  children?: ReactNode;
}

const Dimmed = ({ isVisible = true, close, children }: DimmedProps) => {
  useDisableScroll(isVisible);
  return (
    <div
      className={classNames(
        "fixed inset-0 z-dimmed flex items-center justify-center duration-500",
        isVisible ? "opacity-100" : "inset-auto opacity-0",
      )}
    >
      {isVisible && (
        <div
          className="fixed inset-0 cursor-pointer bg-black/60"
          onClick={close}
        />
      )}
      {children}
    </div>
  );
};

export default Dimmed;
