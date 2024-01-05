import { BANK } from "@/constants";
import { useCreateOrder } from "@/hook/@queries/order";
import useModal from "@/hook/useModal";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { CreateOrderRequest } from "../../../backend/dto/order/orderRequest";

const OrderForm = ({
  totalPrice,
  submitDisable,
}: {
  totalPrice: number;
  submitDisable: boolean;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CreateOrderRequest>();

  const { mutate: order, isError, data } = useCreateOrder();

  const onSubmit = (request: CreateOrderRequest) => {
    setValue("totalPrice", totalPrice);
    order(request);
  };

  return (
    <form
      className="flex w-full flex-col items-center gap-3 rounded-3xl bg-gray p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-xl font-semibold">
        입금금액: KRW {totalPrice.toLocaleString()}
      </p>
      <input
        className="w-full rounded-full bg-white px-8 py-3"
        placeholder="입금자명"
        {...register("depositorName", {
          required: "입금자명을 입력해주세이여~",
        })}
      />
      <p className="text-red">{errors.depositorName?.message}</p>
      <select
        className="w-full rounded-full bg-white px-8 py-3 font-semibold"
        {...register("bank", { required: "은행을 선택해즈세이여~" })}
      >
        <option value="">입금 은행 선택</option>
        {BANK.map((bank) => (
          <option key={bank} value={bank}>
            {bank}
          </option>
        ))}
      </select>
      <p className="text-red">{errors.bank?.message}</p>
      <button
        type="submit"
        className={classNames(
          "w-32 rounded-full py-2.5 text-xl text-white duration-200",
          submitDisable ? "border-2 border-black bg-gray" : "bg-black",
        )}
        disabled={submitDisable}
      >
        입력 완료
      </button>
      {isError && <p className="text-red">{data?.data}</p>}
    </form>
  );
};

export default OrderForm;
