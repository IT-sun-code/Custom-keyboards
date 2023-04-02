import { scroller } from "react-scroll";

export function scrollToFooter() {
  scroller.scrollTo("footer", {
    duration: 3000,
    delay: 0,
    smooth: "easeInOutQuart",
  });
}

export function scrollToСatalog() {
  scroller.scrollTo("catalog", {
    duration: 3000,
    delay: 0,
    smooth: "easeInOutQuart",
  });
}
