import { downArrow } from "@/assets/images";
import Image from "next/image";
import React, { FC } from "react";

const Further: FC = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <button className="flex flex-col items-center gap-[14px]  hover:opacity-50 transition-opacity duration-75">
        <span className="text-yellow">Далее</span>
        <Image src={downArrow} alt="arrow" />
      </button>
    </div>
  );
};

export default Further;
