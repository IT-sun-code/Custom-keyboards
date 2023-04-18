import { useState, useEffect } from "react";

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVariety, setModalVariety] = useState("");

  const handleModalOpen = (variety) => {
    setModalVariety(variety);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    console.log("закрыто");
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen, handleModalClose]);

  return {
    modalOpen,
    modalVariety,
    handleModalOpen,
    handleModalClose,
  };
};

export default useModal;
