import { Button, Typography } from "antd";
import { Link } from "react-router-dom";

import { RouterPath } from "configs/route-config";

import styles from "./Forbidden.module.scss";

export const Forbidden = () => {
  return (
    <div className={styles.forbiddenWrapper}>
      <Typography.Title>
        Недостаточно прав для просмотра страницы
      </Typography.Title>

      <Link className={styles.backToMainPageButton} to={RouterPath.main}>
        <Button type="primary" size="large">
          Вернуться на главную страницу
        </Button>
      </Link>
    </div>
  );
};
