import React from "react";

import { Spin } from "antd";

interface ILazyLoadChunkProps {
  children: React.ReactNode;
}

export const LazyLoadChunk = (props: ILazyLoadChunkProps) => {
  const { children } = props;

  return <React.Suspense fallback={<Spin />}>{children}</React.Suspense>;
};
