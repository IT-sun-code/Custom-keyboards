import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../screens/home";
import Page404 from "../../screens/page404";
import Constructor from "../../screens/constructor";
import AboutUs from "../../screens/aboutUs";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<Constructor />} path={"/constructor"} />
        <Route element={<AboutUs />} path={"/about"} />
        <Route element={<Page404 />} path={"*"} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
