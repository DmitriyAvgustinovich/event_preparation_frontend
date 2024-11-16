import React from "react";

import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { message } from "antd";

import { queryStatuses } from "constants/general-constants";

interface IUseGetQueryMessagesArgs {
  isLoading: boolean;
  isSuccess: boolean;
  status: string;
  error: FetchBaseQueryError | SerializedError | undefined;
  successMessage: string;
  errorMessage: string;
}

export const useGetQueryMessages = (args: IUseGetQueryMessagesArgs) => {
  const { isLoading, isSuccess, status, error, successMessage, errorMessage } =
    args;

  React.useEffect(() => {
    if (isSuccess && !isLoading && status === queryStatuses.fulfilled) {
      message.success(successMessage);
    }

    if (!isSuccess && !isLoading && status === queryStatuses.rejected) {
      message.error(errorMessage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isSuccess, status, error]);
};
