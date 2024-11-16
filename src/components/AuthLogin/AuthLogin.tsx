import { Button, Form } from "antd";
import { useContexts, useGetAuthFields, useGetQueryMessages } from "hooks";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import { useNavigate } from "react-router-dom";
import { getValidateErrorMessage } from "utils";

import { useSignInMutation } from "store/api/auth/auth-api";

import { RouterPath } from "configs/route-config";

import { IUser } from "types/IUser";

export const AuthLogin = () => {
  const { LoginFields } = useGetAuthFields({ isEdit: true });

  const {
    authModalContext: { setIsAuthModalOpen },
  } = useContexts();

  const navigate = useNavigate();

  const [
    login,
    {
      isLoading: isLoginLoading,
      isSuccess: isLoginSuccess,
      status: loginStatus,
      error: loginError,
    },
  ] = useSignInMutation();

  const onFinishCreateQuestionnaire = (formValues: IUser) => {
    login(formValues);

    setIsAuthModalOpen(false);

    setTimeout(() => {
      navigate(RouterPath.main);
    }, 1000);
  };

  const onFailedCreateQuestionnaire = (formValues: ValidateErrorEntity) => {
    getValidateErrorMessage(formValues);
  };

  useGetQueryMessages({
    isLoading: isLoginLoading,
    isSuccess: isLoginSuccess,
    status: loginStatus,
    error: loginError,
    successMessage: "Авторизация прошла успешно.",
    errorMessage: "Неверный логин или пароль.",
  });

  return (
    <Form
      layout="vertical"
      onFinish={onFinishCreateQuestionnaire}
      onFinishFailed={onFailedCreateQuestionnaire}
    >
      {LoginFields}

      <Button
        htmlType="submit"
        type="primary"
        size="large"
        loading={isLoginLoading}
        block
      >
        Войти
      </Button>
    </Form>
  );
};
