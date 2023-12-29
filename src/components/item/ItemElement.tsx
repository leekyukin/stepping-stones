interface ItemElementProps {
  color: string;
}

const ItemElement = ({ color }: ItemElementProps) => {
  return (
    <div>
      <div
        className="flex aspect-square flex-col items-center justify-end rounded-ee-[3rem] rounded-es-2xl rounded-se-2xl rounded-ss-[3rem] border-[1.5px] border-black p-3"
        style={{
          backgroundImage: `linear-gradient(${color}, white)`,
        }}
      ></div>
      <div className="mt-2 flex flex-col items-center">
        <div className="text-xs font-bold">Feel Like Beatles</div>
        <div className="text-xs font-semibold">48,000</div>
      </div>
    </div>
  );
};

export default ItemElement;
