import { IMeta } from "@/types/meta/meta.interface";
import React, { FC, PropsWithChildren } from "react";
import Header from "../ui/Header/Header";
import Meta from "./Meta";

const MainLayout: FC<PropsWithChildren<IMeta>> = ({
  children,
  title,
  description,
}) => {
  return (
    <>
      <Meta title={title} description={description} />
      <Header />
      <main className="flex-1">{children}</main>
      <footer>I am a footer</footer>
    </>
  );
};

export default MainLayout;
