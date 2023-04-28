import { scroller } from "react-scroll";

export function scrollToFooter() {
  scroller.scrollTo("footer", {
    duration: 3000,
    delay: 0,
    smooth: "easeInOutQuart",
  });
}

// export function scrollToCatalog(pathname, navigate) {
//   if (pathname !== "/") {
//     navigate("/");
//   }
//   setTimeout(() => {
//     scroller.scrollTo("catalog", {
//       duration: 3000,
//       delay: 0,
//       smooth: "easeInOutQuart",
//     });
//   }, 500);
// }

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
