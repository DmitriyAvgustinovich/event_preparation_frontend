import React from "react";

import { Button, Form } from "antd";
import { useContexts, useGetAuthFields, useGetQueryMessages } from "hooks";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import { useNavigate } from "react-router-dom";
import { getValidateErrorMessage } from "utils";

import { useSignUpMutation } from "store/api/auth/auth-api";

import { RouterPath } from "configs/route-config";

import { IUser } from "types/IUser";

import styles from "./AuthRegister.module.scss";

export const AuthRegister = () => {
  const [imageUrl, setImageUrl] = React.useState("");

  const {
    authModalContext: { setIsAuthModalOpen },
  } = useContexts();

  const navigate = useNavigate();

  const { RegisterFields } = useGetAuthFields({
    isEdit: true,
    imageUrl,
    setImageUrl,
  });

  const [
    register,
    {
      isLoading: isSignUpLoading,
      isSuccess: isSignUpSuccess,
      status: signUpStatus,
      error: signUpError,
    },
  ] = useSignUpMutation();

  const onFinishRegister = (formValues: IUser) => {
    const registerFields = {
      ...formValues,
      avatarUrl: imageUrl,
    };

    register(registerFields);

    setIsAuthModalOpen(false);

    setTimeout(() => {
      navigate(RouterPath.main);
    }, 1000);
  };

  const onFailedRegister = (formValues: ValidateErrorEntity) => {
    getValidateErrorMessage(formValues);
  };

  useGetQueryMessages({
    isLoading: isSignUpLoading,
    isSuccess: isSignUpSuccess,
    status: signUpStatus,
    error: signUpError,
    successMessage: "Профиль создан!",
    errorMessage: "Произошла ошибка при создании профиля.",
  });

  return (
    <Form
      className={styles.authRegisterFormWrapper}
      layout="vertical"
      onFinish={onFinishRegister}
      onFinishFailed={onFailedRegister}
    >
      {RegisterFields}

      <Button
        htmlType="submit"
        type="primary"
        size="large"
        loading={isSignUpLoading}
        block
      >
        Зарегистрироваться
      </Button>
    </Form>
  );
};
