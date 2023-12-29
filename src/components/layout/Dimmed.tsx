import classNames from "classnames";

interface DimmedProps {
  isVisible: boolean;
  close: () => void;
}

const Dimmed = ({ isVisible, close }: DimmedProps) => {
  return (
    <div
      className={classNames(
        "fixed inset-0 z-dimmed mx-auto max-w-md bg-black/60 duration-700",
        isVisible ? "opacity-100" : "inset-auto opacity-0",
      )}
      onClick={close}
    />
  );
};

export default Dimmed;
