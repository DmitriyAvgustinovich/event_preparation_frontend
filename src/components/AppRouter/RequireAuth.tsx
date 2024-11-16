import { Navigate } from "react-router-dom";

import { RouterPath } from "configs/route-config";

import { useGetAuthUser } from "hooks/user/use-get-auth-user";

interface IRequireAuthProps {
  children: JSX.Element;
}

export function RequireAuth(props: IRequireAuthProps) {
  const { children } = props;

  const { authUserData, isUserDataLoading } = useGetAuthUser();

  if (!isUserDataLoading && !authUserData) {
    return <Navigate to={RouterPath.not_authorized} />;
  }

  return children;
}
