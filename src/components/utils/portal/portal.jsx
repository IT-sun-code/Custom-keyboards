import { createPortal } from "react-dom";

const Portal = ({ children, element = document.body }) => {
  return createPortal(children, element);
};

export default Portal;
