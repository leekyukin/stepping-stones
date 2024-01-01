import config from "@/config";
import useModal from "@/hook/useModal";
import Image from "next/image";
import { createPortal } from "react-dom";
import Dimmed from "../layout/Dimmed";

const CouponButton = () => {
  const [isOpen, toggleModal, portalElement] = useModal();

  return (
    <>
      <button className="mb-14 p-5" onClick={toggleModal}>
        <Image src={config.coupon} alt="coupon" width={1000} height={1000} />
      </button>
      {isOpen &&
        portalElement &&
        createPortal(
          <Dimmed close={toggleModal}>
            <div className="absolute z-modal w-2/3 max-w-xs">
              <Image
                className="z-modal h-auto w-full"
                src={config.stoneInfo}
                alt="stone info modal"
                width={1000}
                height={1000}
              />
            </div>
          </Dimmed>,
          portalElement,
        )}
    </>
  );
};

export default CouponButton;
