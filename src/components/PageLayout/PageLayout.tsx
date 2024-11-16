import React from "react";

import { SidebarMenu } from "components/SidebarMenu/SidebarMenu";

import styles from "./PageLayout.module.scss";

interface IPageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = (props: IPageLayoutProps) => {
  const { children } = props;

  return (
    <div className={styles.pageLayoutWrapper}>
      <SidebarMenu />
      <div className={styles.pageLayoutContent}>{children}</div>
    </div>
  );
};
