import { Button } from "antd";
import { Link, Navigate } from "react-router-dom";

import { RouterPath } from "configs/route-config";

import { useGetAuthUser } from "hooks/user/use-get-auth-user";

import styles from "./NotAuthorized.module.scss";

export const NotAuthorized = () => {
  const { authUserData, isUserDataLoading } = useGetAuthUser();

  if (!isUserDataLoading && authUserData) {
    return <Navigate to={RouterPath.main} />;
  }

  return (
    <div className={styles.notAuthorizedWrapper}>
      <p className={styles.notAuthorizedTitle}>
        Вы не авторизованы.
        <br />
        Пожалуйста, пройдите авторизацию, нажав на кнопку "Войти" в левой части
        экрана.
        <br />
        Или вернитесь на главную страницу.
      </p>

      <Button
        className={styles.backToMainPageButton}
        type="primary"
        size="large"
      >
        <Link to={RouterPath.main}>Вернуться на главную страницу</Link>
      </Button>
    </div>
  );
};
