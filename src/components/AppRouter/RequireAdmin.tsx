import { Navigate } from "react-router-dom";

import { RouterPath } from "configs/route-config";

import { useGetAuthUser } from "hooks/user/use-get-auth-user";

interface IRequireAdminProps {
  children: JSX.Element;
}

export function RequireAdmin(props: IRequireAdminProps) {
  const { children } = props;

  const { authUserData, isUserDataLoading, isUserAdmin } = useGetAuthUser();

  if (!isUserDataLoading && authUserData && !isUserAdmin) {
    return <Navigate to={RouterPath.forbidden} />;
  }

  if (!isUserDataLoading && !authUserData) {
    return <Navigate to={RouterPath.not_authorized} />;
  }

  return children;
}
