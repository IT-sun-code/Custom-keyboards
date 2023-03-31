import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../screens/home";
import Page404 from "../../screens/page404";
import Constructor from "../../screens/constructor";
import AboutUs from "../../screens/aboutUs";
import CardPage from "../../screens/CardPage";
import Footer from "../../ui/footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<Constructor />} path={"/constructor"} />
        <Route element={<AboutUs />} path={"/aboutUs"} />
        <Route element={<Page404 />} path={"*"} />
        <Route element={<CardPage />} path={"/cards/:id"} />
        <Route element={<Footer />} path={"/footer"} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
