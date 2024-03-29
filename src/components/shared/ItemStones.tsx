import classNames from "classnames";
import StoneIcon from "./icon/StoneIcon";

interface ItemStonesProps {
  numberOfStones: number;
  size?: "xs" | "sm" | "md";
  className?: string;
}

const ItemStones = ({
  numberOfStones,
  size = "md",
  className,
}: ItemStonesProps) => {
  return (
    <div
      className={classNames(
        className,
        { "bg-kakaoYellow": numberOfStones === 1 },
        { "bg-[#41C7FF]": numberOfStones > 1 },
        "flex items-center justify-center rounded-lg font-semibold",
        { "gap-2 px-3 py-2 text-sm": size === "md" },
        { "gap-2 px-2 py-2 text-xs": size === "sm" },
        { "gap-1 py-1.5 text-[12px]": size === "xs" },
      )}
    >
      <StoneIcon
        className={classNames(
          { "h-6": size === "md" },
          { "h-4": size === "sm" },
          { "h-3": size === "xs" },
        )}
      />{" "}
      {numberOfStones} Stone
    </div>
  );
};
export default ItemStones;
