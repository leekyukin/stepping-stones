import { BANK } from "@/constants";
import classNames from "classnames";

const OrderForm = ({ submitDisable }: { submitDisable: boolean }) => {
  return (
    <form className="flex w-full flex-col items-center gap-3 rounded-3xl bg-gray p-8">
      <input
        className="w-full rounded-full bg-white px-8 py-3"
        placeholder="입금자명"
      />
      <select className="w-full rounded-full bg-white px-8 py-3 font-semibold">
        <option value="">입금 은행 선택</option>
        {BANK.map((bank) => (
          <option key={bank} value={bank}>
            {bank}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className={classNames(
          "mt-5 w-32 rounded-full py-2.5 text-xl text-white duration-200",
          submitDisable ? "border-2 border-black bg-gray" : "bg-black",
        )}
        disabled={submitDisable}
      >
        입력 완료
      </button>
    </form>
  );
};

export default OrderForm;
