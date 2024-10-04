import { type ReactNode, Suspense } from "react";

const processLahanLayout = ({ children }: { children: ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default processLahanLayout;
