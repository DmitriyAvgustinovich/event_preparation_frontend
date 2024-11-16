import React from "react";

import { Upload, message } from "antd";

import { UploadListType, UploadProps } from "antd/es/upload/interface";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import styles from "./UploadButton.module.scss";

interface IUploadButtonProps {
  disabled?: boolean;
  imageUrl?: string;
  setImageUrl?: (imageUrl: string) => void;
  downloadAfterUploadAction?: (cover: string) => void;
}

export const UploadButton = (props: IUploadButtonProps) => {
  const { disabled, imageUrl, setImageUrl, downloadAfterUploadAction } = props;

  const [isLoading, setIsLoading] = React.useState(false);

  const getBase64 = (img: Blob, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: File) => {
    const isJpgOrPngImageFormat =
      file.type === "image/jpeg" || file.type === "image/png";

    const isTwoMBImageWeight = file.size / 1024 / 1024 < 2;

    if (!isJpgOrPngImageFormat) {
      message.error("Картинка должна быть в формате JPG или PNG.");
    }

    if (!isTwoMBImageWeight) {
      message.error("Картинка не должна превышать 2MB.");
    }

    return isJpgOrPngImageFormat && isTwoMBImageWeight;
  };

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setIsLoading(true);
      return;
    }

    if (info.file.status === "done" && info.file.originFileObj) {
      getBase64(info.file.originFileObj, () => {
        setIsLoading(false);
        setImageUrl?.(info.file.response.avatarUrl);

        downloadAfterUploadAction?.(info.file.response.avatarUrl);
        message.success("Картинка успешно загружена.");
      });
    }
  };

  const UploadButton = (
    <span>
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <p>Загрузить</p>
    </span>
  );

  const uploadProps = {
    name: "file",
    action: `${import.meta.env.VITE_BASE_URL}/images/upload-avatar`,
    onChange: handleChange,
    beforeUpload: beforeUpload,
    listType: "picture-card" as UploadListType,
    showUploadList: false,
    withCredentials: true,
    disabled,
  };

  return (
    <Upload {...uploadProps}>
      {imageUrl ? (
        <img className={styles.uploadedImage} src={imageUrl} alt="" />
      ) : (
        UploadButton
      )}
    </Upload>
  );
};
