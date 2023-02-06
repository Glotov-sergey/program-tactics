import React, { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-[1330px] mx-auto px-5">{children}</div>;
};

export default Container;
