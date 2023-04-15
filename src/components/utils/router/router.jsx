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
import Header from "../../ui/header";
import ScrollToTop from "../scrollers/scrollToTop";
import CardsProvider from "../hooks/useCards";
import AuthProvider from "../hooks/useAuth";
import PrivateRoute from "./privateRoute";
import FavoritesProvider from "../hooks/useFavorites";

const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <ScrollToTop />
        <FavoritesProvider>
          <CardsProvider>
            <Routes>
              <Route element={<Home />} path={"/"} />
              <Route element={<Constructor />} path={"/constructor"} />
              <Route element={<AboutUs />} path={"/aboutUs"} />
              <Route element={<Page404 />} path={"*"} />
              <Route element={<CardPage />} path={"/cards/:id"} />
              <Route
                path="/user"
                element={
                  <PrivateRoute>
                    <UserPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/basket"
                element={
                  <PrivateRoute>
                    <Basket />
                  </PrivateRoute>
                }
              />
              <Route
                path="/favorites"
                element={
                  <PrivateRoute>
                    <Favorites />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <Admin />
                  </PrivateRoute>
                }
              />
            </Routes>
          </CardsProvider>
        </FavoritesProvider>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Router;
