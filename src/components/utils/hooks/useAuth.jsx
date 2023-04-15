import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Loading from "../../ui/loading";

import {
  setTokens,
  removeAuthData,
  getAccessToken,
} from "../../services/localStorageService/localStorageService";
import UserService from "../../services/userService";
import { useNavigate } from "react-router-dom";

export const httpAuth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/",
  params: {
    key: import.meta.env.VITE_REACT_APP_FIREBASE_KEY,
  },
});

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setUser] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function signUp({ email, password, ...rest }) {
    try {
      const { data } = await httpAuth.post("accounts:signUp", {
        email,
        password,
        returnSecureToken: true,
      });
      console.log(data);
      setTokens(data);
      await createUser({
        id: data.localId,
        email,
        favorites: 0,
        basket: 0,
        ...rest,
      });
    } catch (error) {
      errorCatcher(error);
      const { code, message } = error.response.data.error;
      console.log(code, message);
      if (code === 400) {
        if (message === "EMAIL_EXISTS") {
          const errorObject = {
            email: "Пользователь с таким Email уже существует",
          };
          throw errorObject;
        }
      }
    }
  }

  async function logIn({ email, password }) {
    try {
      const { data } = await httpAuth.post("accounts:signInWithPassword", {
        email,
        password,
        returnSecureToken: true,
      });
      setTokens(data);
      await getUserData();
    } catch (error) {
      errorCatcher(error);
      const { code, message } = error.response.data.error;
      console.log(code, message);
      if (code === 400) {
        switch (message) {
          case "INVALID_PASSWORD":
            throw new Error("Email или пароль введены некорректно");
          default:
            throw new Error("Слишком много попыток входа. Попробуйте позже");
        }
      }
    }
  }

  function logOut() {
    removeAuthData();
    setUser(null);
    navigate("/");
  }

  async function createUser(data) {
    try {
      const { content } = await UserService.create(data);
      setUser(content);
      console.log(content);
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function getUserData() {
    try {
      const { content } = await UserService.getCurrentUser();
      setUser(content);
    } catch (error) {
      errorCatcher(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (getAccessToken()) {
      getUserData();
    } else {
      setLoading(false);
    }
  }, []);

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }
  useEffect(() => {
    if (error !== null) {
      console.log(error);
      setError(null);
    }
  }, [error]);

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, currentUser }}>
      {!isLoading ? children : <Loading />}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default AuthProvider;
