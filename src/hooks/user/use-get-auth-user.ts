import { useGetAuthUserQuery } from "store/api/auth/auth-api";

import { userRoles } from "constants/general-constants";

export const useGetAuthUser = () => {
  const { data: authUserData, isLoading: isUserDataLoading } =
    useGetAuthUserQuery();

  const isUserAdmin = authUserData?.role === userRoles.admin;

  return { authUserData, isUserDataLoading, isUserAdmin };
};
