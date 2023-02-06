import { IMeta } from "@/types/meta/meta.interface";
import Head from "next/head";
import React, { FC } from "react";

const Meta: FC<IMeta> = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description ? (
          <meta name="description" content={description} />
        ) : (
          <meta name="robots" content="noindex" />
        )}
      </Head>
    </>
  );
};

export default Meta;
