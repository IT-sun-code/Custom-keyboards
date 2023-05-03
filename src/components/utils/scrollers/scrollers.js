import { scroller } from "react-scroll";
import PropTypes from "prop-types";

export function scrollToFooter() {
  scroller.scrollTo("footer", {
    duration: 3000,
    delay: 0,
    smooth: "easeInOutQuart",
  });
}

export function scrollToCatalog(pathname, navigate) {
  let timeoutId;
  if (pathname !== "/") {
    navigate("/");
  }
  timeoutId = setTimeout(() => {
    scroller.scrollTo("catalog", {
      duration: 3000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, 500);
  return () => clearTimeout(timeoutId);
}
scrollToCatalog.propTypes = {
  pathname: PropTypes.string,
  navigate: PropTypes.func,
};
