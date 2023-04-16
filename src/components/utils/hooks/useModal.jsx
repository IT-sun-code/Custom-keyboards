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
    const handleBeforeUnload = () => {
      document.body.style.overflow = "auto";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return {
    modalOpen,
    modalVariety,
    handleModalOpen,
    handleModalClose,
  };
};

export default useModal;
