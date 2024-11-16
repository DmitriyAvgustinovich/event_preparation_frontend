import { RouteProps } from "react-router-dom";

import { AccountPage } from "pages/AccountPage";
import { ForbiddenPage } from "pages/ForbiddenPage";
import { MainPage } from "pages/MainPage";
import { NotAuthorizedPage } from "pages/NotAuthorizedPage";

import { LazyLoadChunk } from "components/LazyLoadChunk/LazyLoadChunk";

export type TAppRouteProps = RouteProps & {
  authOnly?: boolean;
  adminOnly?: boolean;
  element: JSX.Element;
};

export enum AppRoutes {
  MAIN = "main",
  ACCOUNT = "account",
  FORBIDDEN = "forbidden",
  NOT_AUTHORIZED = "not_authorized",
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ACCOUNT]: "/account",
  [AppRoutes.FORBIDDEN]: "/forbidden",
  [AppRoutes.NOT_AUTHORIZED]: "/not_authorized",
};

export const routeConfig: Record<AppRoutes, TAppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: (
      <LazyLoadChunk>
        <MainPage />
      </LazyLoadChunk>
    ),
  },
  [AppRoutes.ACCOUNT]: {
    path: RouterPath.account,
    element: (
      <LazyLoadChunk>
        <AccountPage />
      </LazyLoadChunk>
    ),
    authOnly: true,
  },
  [AppRoutes.FORBIDDEN]: {
    path: RouterPath.forbidden,
    element: (
      <LazyLoadChunk>
        <ForbiddenPage />
      </LazyLoadChunk>
    ),
    authOnly: true,
  },
  [AppRoutes.NOT_AUTHORIZED]: {
    path: RouterPath.not_authorized,
    element: (
      <LazyLoadChunk>
        <NotAuthorizedPage />
      </LazyLoadChunk>
    ),
  },
};
