import React, { useEffect, useState } from "react";
import { validator } from "../../../utils/validator";
import CheckBoxField from "../checkBoxField";
import TextField from "../textField";
import Button from "../../button";
import { useAuth } from "../../../utils/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({ onClose }) => {
  const [data, setData] = useState({
    userName: "",
    phone: "",
    email: "",
    address: "",
    password: "",
    licence: false,
  });
  const { signUp } = useAuth();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validatorConfig = {
    userName: {
      isRequired: {
        message: "Имя обязательно для заполнения",
      },
      isName: {
        message: "Имя должно содержать только буквы",
      },
    },
    phone: {
      isRequired: {
        message: "Телефон обязателен для заполнения",
      },
      isPhone: {
        message: "Телефон введен некорректно",
      },
    },
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Email введен некорректно",
      },
    },
    address: {
      isRequired: {
        message: "Адрес доставки обязателен для заполнения",
      },
      isAddress: {
        message: "Пример адреса: г.Санкт-Петербург, ул.Победы, д.2, кв.35",
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения",
      },
      isCapitalSymbol: {
        message:
          "Пароль должен содержать хотя бы одну латинскую заглавную букву",
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одно число",
      },
      min: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8,
      },
    },
    licence: {
      isRequired: {
        message:
          "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения",
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
      await signUp(data);
      onClose();
      navigate("/user");
    } catch (error) {
      setErrors(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Имя"
        name="userName"
        value={data.userName}
        onChange={handleChange}
        error={errors.userName}
        autoComplete="current-name"
        autoFocus
      />
      <TextField
        label="Телефон"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        error={errors.phone}
        autoComplete="current-phone"
      />
      <TextField
        label="Электронная почта"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
        autoComplete="current-email"
      />
      <TextField
        label="Адрес"
        name="address"
        value={data.address}
        onChange={handleChange}
        error={errors.address}
        autoComplete="current-address"
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
      <CheckBoxField
        value={data.licence}
        onChange={handleChange}
        name="licence"
        error={errors.licence}
        autoComplete="current-licence"
      >
        Подтвердить <a>лицензионное соглашение</a>
      </CheckBoxField>
      <div>
        <Button appearance="ctvBlueSubmit" type="submit" disabled={isValid}>
          Подтвердить
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
