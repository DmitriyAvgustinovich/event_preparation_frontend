import { ConfigProvider } from "antd";

interface IAntColorsProviderProps {
  children: React.ReactNode;
}

export const AntColorsProvider = (props: IAntColorsProviderProps) => {
  const { children } = props;

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            algorithm: true,
            colorPrimary: "#ff6667",
            colorLink: "#ff6667",
          },
          Input: {
            algorithm: true,
            colorPrimary: "#ff6667",
          },
          Radio: {
            algorithm: true,
            colorPrimary: "#ff6667",
          },
          Select: {
            algorithm: true,
            colorPrimary: "#ff6667",
          },
          Checkbox: {
            algorithm: true,
            colorPrimary: "#ff6667",
          },
          DatePicker: {
            algorithm: true,
            colorPrimary: "#ff6667",
          },
          Spin: {
            algorithm: true,
            colorPrimary: "#ff6667",
          },
          Pagination: {
            algorithm: true,
            colorPrimary: "#ff6667",
          },
          Upload: {
            algorithm: true,
            colorPrimary: "#ff6667",
          },
          Tabs: {
            algorithm: true,
            colorPrimary: "#ff6667",
          },
          Menu: {
            algorithm: true,
            colorPrimary: "#ff6667",
          }
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
