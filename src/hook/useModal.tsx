import { useEffect, useReducer, useState } from "react";

type UseModalReturn = [boolean, () => void, Element | null];

const useModal = (): UseModalReturn => {
  const [isOpen, toggleModal] = useReducer((state) => !state, false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById("root-portal"));
  }, [isOpen]);

  return [isOpen, toggleModal, portalElement];
};

export default useModal;
