import React, { useEffect, useState } from "react";
import { validator } from "../../../utils/validator";
import CheckBoxField from "../checkBoxField";
import TextField from "../textField";
import Button from "../../button";
import { useAuth } from "../../../utils/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import styles from "./loginForm.module.css";

const LoginForm = ({ onClose }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    stayOn: false,
  });
  const { logIn } = useAuth();
  const [errors, setErrors] = useState({});
  const [enterError, setEnterError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
    setEnterError(null);
  };

  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Email введен некорректно",
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения",
      },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одно число",
      },
      min: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8,
      },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
    try {
      await logIn(data);
      onClose();
      navigate("/user");
    } catch (error) {
      setEnterError(error.message);
      setErrors(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Электронная почта"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
        autoComplete="current-email"
        autoFocus
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
        autoComplete="current-password"
      />
      <CheckBoxField value={data.stayOn} onChange={handleChange} name="stayOn">
        Оставаться в системе
      </CheckBoxField>
      {enterError && <p className={styles.errorMessage}>{enterError}</p>}
      <div>
        <Button appearance="ctvBlueSubmit" type="submit" disabled={isValid}>
          Подтвердить
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
