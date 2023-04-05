import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../screens/home";
import Page404 from "../../screens/page404";
import Constructor from "../../screens/constructor";
import AboutUs from "../../screens/aboutUs";
import CardPage from "../../screens/CardPage";
import Footer from "../../ui/footer";
import UserPage from "../../screens/userPage";
import Basket from "../../screens/basket";
import Favorites from "../../screens/favorites";
import Admin from "../../screens/admin";

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
        <Route element={<UserPage />} path={"/user"} />
        <Route element={<Basket />} path={"/basket"} />
        <Route element={<Favorites />} path={"/favorites"} />
        <Route element={<Admin />} path={"/admin"} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
