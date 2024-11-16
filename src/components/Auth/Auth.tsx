import React from "react";

import { Button, Typography } from "antd";

import { AuthLogin } from "components/AuthLogin/AuthLogin";
import { AuthRegister } from "components/AuthRegister/AuthRegister";

import styles from "./Auth.module.scss";

export const Auth = () => {
  const [isHaveAnAccount, setIsHaveAnAccount] = React.useState(false);

  const handleHaveAnAccount = () => {
    setIsHaveAnAccount(false);
  };

  const handleNotHaveAnAccount = () => {
    setIsHaveAnAccount(true);
  };

  const isHaveAnAccountText = isHaveAnAccount
    ? "Есть аккаунт?"
    : "Нет аккаунта?";

  return (
    <div className={styles.authFormWrapper}>
      {isHaveAnAccount ? <AuthRegister /> : <AuthLogin />}

      <div className={styles.authGoToLoginWrapper}>
        <Typography.Text>{isHaveAnAccountText}</Typography.Text>

        {isHaveAnAccount ? (
          <Button
            className={styles.authGoToLoginButton}
            type="link"
            onClick={handleHaveAnAccount}
          >
            Войти
          </Button>
        ) : (
          <Button
            className={styles.authGoToRegisterButton}
            type="link"
            onClick={handleNotHaveAnAccount}
          >
            Зарегистрироваться
          </Button>
        )}
      </div>
    </div>
  );
};
