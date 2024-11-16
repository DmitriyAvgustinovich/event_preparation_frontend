import { Form, Input } from "antd";
import { getImageUrl } from "utils";

import { UploadButton } from "components/UploadButton/UploadButton";

import {
  accountFieldsDataIndexes,
  accountFieldsTitles,
} from "constants/account-constants";

import { IUser } from "types/IUser";

interface IUseGetProfileFieldsArgs {
  authUserData?: IUser;
  isEditAccount: boolean;
  imageUrl?: string;
  setImageUrl?: (imageUrl: string) => void;
}

export const useGetAccountFields = (args: IUseGetProfileFieldsArgs) => {
  const { authUserData, isEditAccount, imageUrl, setImageUrl } = args;

  const accountFields = [
    {
      label: accountFieldsTitles.avatarUrl,
      name: accountFieldsDataIndexes.avatarUrl,
      node: (
        <UploadButton
          disabled={isEditAccount}
          imageUrl={getImageUrl(imageUrl)}
          setImageUrl={setImageUrl}
        />
      ),
    },
    {
      name: accountFieldsDataIndexes.name,
      label: accountFieldsTitles.name,
      node: (
        <Input defaultValue={authUserData?.name} disabled={isEditAccount} />
      ),
    },
    {
      name: accountFieldsDataIndexes.surname,
      label: accountFieldsTitles.surname,
      node: (
        <Input defaultValue={authUserData?.surname} disabled={isEditAccount} />
      ),
    },
    {
      name: accountFieldsDataIndexes.lastname,
      label: accountFieldsTitles.lastname,
      node: (
        <Input defaultValue={authUserData?.lastname} disabled={isEditAccount} />
      ),
    },
    {
      name: accountFieldsDataIndexes.email,
      label: accountFieldsTitles.email,
      node: (
        <Input defaultValue={authUserData?.email} disabled={isEditAccount} />
      ),
    },
  ];

  const FormItems = accountFields.map((field) => (
    <Form.Item key={field.name} {...field}>
      {field.node}
    </Form.Item>
  ));

  return { FormItems };
};
