import { Form, Input } from "antd";

import { UploadButton } from "components/UploadButton/UploadButton";

import { RouterPath } from "configs/route-config";

import {
  authFieldsDataIndexes,
  authFieldsPlaceholders,
  authFieldsTitles,
} from "constants/auth-list-fields";
import { DEFAULT_VALIDATE_MESSAGE } from "constants/general-constants";

import { IUser } from "types/IUser";

interface IUseGetAuthFieldsArgs {
  formValues?: IUser;
  isEdit: boolean;
  imageUrl?: string;
  setImageUrl?: (imageUrl: string) => void;
}

export const useGetAuthFields = (args: IUseGetAuthFieldsArgs) => {
  const { formValues, isEdit, imageUrl, setImageUrl } = args;

  const location = window.location.pathname;
  const isAccountPage = location === RouterPath.account;

  const registerFieldsArray = [
    {
      label: authFieldsTitles.avatarUrl,
      name: authFieldsDataIndexes.avatarUrl,
      node: (
        <UploadButton
          disabled={!isEdit}
          imageUrl={imageUrl ?? ""}
          setImageUrl={setImageUrl}
        />
      ),
    },
    {
      label: authFieldsTitles.name,
      name: authFieldsDataIndexes.name,
      rules: [
        {
          required: !isAccountPage,
          message: `${DEFAULT_VALIDATE_MESSAGE} имя`,
        },
      ],
      node: (
        <Input
          defaultValue={formValues?.name}
          placeholder={authFieldsPlaceholders.name}
          disabled={!isEdit}
        />
      ),
    },
    {
      label: authFieldsTitles.surname,
      name: authFieldsDataIndexes.surname,
      rules: [
        {
          required: !isAccountPage,
          message: `${DEFAULT_VALIDATE_MESSAGE} фамилию`,
        },
      ],
      node: (
        <Input
          defaultValue={formValues?.surname}
          disabled={!isEdit}
          placeholder={authFieldsPlaceholders.surname}
        />
      ),
    },
    {
      label: authFieldsTitles.lastname,
      name: authFieldsDataIndexes.lastname,
      node: (
        <Input
          defaultValue={formValues?.lastname}
          disabled={!isEdit}
          placeholder={authFieldsPlaceholders.lastname}
        />
      ),
    },
    {
      label: authFieldsTitles.email,
      name: authFieldsDataIndexes.email,
      rules: [
        {
          required: !isAccountPage,
          message: `${DEFAULT_VALIDATE_MESSAGE} e-mail`,
        },
      ],
      node: (
        <Input
          defaultValue={formValues?.email}
          disabled={!isEdit}
          placeholder={authFieldsPlaceholders.email}
        />
      ),
    },
    {
      label: authFieldsTitles.password,
      name: authFieldsDataIndexes.password,
      rules: [
        {
          required: true,
          message: `${DEFAULT_VALIDATE_MESSAGE} Пароль`,
        },
      ],
      node: <Input.Password placeholder={authFieldsPlaceholders.password} />,
    },
  ];

  if (isAccountPage) {
    registerFieldsArray.pop();
  }

  const RegisterFields = registerFieldsArray.map((field) => (
    <Form.Item {...field} key={field.name}>
      {field.node}
    </Form.Item>
  ));

  const loginFieldsArray = [
    {
      label: authFieldsTitles.email,
      name: authFieldsDataIndexes.email,
      rules: [
        {
          required: true,
          message: `${DEFAULT_VALIDATE_MESSAGE} e-mail`,
        },
      ],
      node: <Input placeholder={authFieldsPlaceholders.email} />,
    },
    {
      label: authFieldsTitles.password,
      name: authFieldsDataIndexes.password,
      rules: [
        {
          required: true,
          message: `${DEFAULT_VALIDATE_MESSAGE} пароль`,
        },
      ],
      node: <Input.Password placeholder={authFieldsPlaceholders.password} />,
    },
  ];

  const LoginFields = loginFieldsArray.map((field) => (
    <Form.Item {...field} key={field.name}>
      {field.node}
    </Form.Item>
  ));

  return { RegisterFields, LoginFields };
};
