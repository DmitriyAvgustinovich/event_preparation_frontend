import { AuthModalProvider } from "providers/AuthModalProvider/AuthModalProvider";

interface IAppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders = (props: IAppProvidersProps) => {
  const { children } = props;

  return <AuthModalProvider>{children}</AuthModalProvider>;
};
