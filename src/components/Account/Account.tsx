import React from "react";

import { Button, Form, Spin, Typography } from "antd";
import {
  useGetAccountFields,
  useGetAuthUser,
  useGetQueryMessages,
} from "hooks";

import { EditOutlined } from "@ant-design/icons";

import { useUpdateUserMutation } from "store/api/users/users-api";

import { IUser } from "types/IUser";

import styles from "./Account.module.scss";

export const Account = () => {
  const [isEditAccount, setIsEditAccount] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState("");

  const { authUserData, isUserDataLoading } = useGetAuthUser();

  const [
    editAccount,
    {
      isLoading: isEditAccountLoading,
      isSuccess: isEditAccountSuccess,
      status: editAccountStatus,
      error: editAccountError,
    },
  ] = useUpdateUserMutation();

  const { FormItems } = useGetAccountFields({
    authUserData,
    isEditAccount: !isEditAccount,
    imageUrl,
    setImageUrl,
  });

  React.useEffect(() => {
    if (authUserData?.avatarUrl) {
      setImageUrl(authUserData.avatarUrl);
    }
  }, [authUserData]);

  const loadedAccountFields = !isUserDataLoading && FormItems;

  const handleEditAccount = async (formValues: IUser) => {
    const editedData = {
      ...formValues,
      id: authUserData?.id as number,
      avatarUrl: imageUrl,
    };

    await editAccount(editedData);
    setIsEditAccount(false);
  };

  useGetQueryMessages({
    isLoading: isEditAccountLoading,
    isSuccess: isEditAccountSuccess,
    status: editAccountStatus,
    error: editAccountError,
    successMessage: "Данные об аккаунте успешно обновлены.",
    errorMessage: "Произошла ошибка при обновлении данных об аккаунте.",
  });

  const handleEdit = () => {
    setIsEditAccount(true);
  };

  const handleCancelEdit = () => {
    setIsEditAccount(false);
  };

  return (
    <>
      <Typography.Title>Ваш аккаунт</Typography.Title>

      {isUserDataLoading ? (
        <Spin size="large" />
      ) : (
        <Form layout="vertical" onFinish={handleEditAccount}>
          {loadedAccountFields}

          {!isEditAccount && (
            <Button onClick={handleEdit} type="primary">
              <EditOutlined />
              Редактировать
            </Button>
          )}

          {isEditAccount && (
            <>
              <Button type="primary" htmlType="submit">
                Сохранить
              </Button>

              <Button
                className={styles.accountCancelEditButton}
                type="default"
                onClick={handleCancelEdit}
              >
                Отменить
              </Button>
            </>
          )}
        </Form>
      )}
    </>
  );
};
