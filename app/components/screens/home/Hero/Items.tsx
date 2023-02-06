import { codeIcon, integrationIcon, mobileIcon } from "@/assets/images";
import Image from "next/image";
import React, { FC } from "react";

const Items: FC = () => {
  return (
    <div className="flex items-center mt-[40px]">
      <div className="flex items-start gap-[12px]">
        <Image src={codeIcon} alt="code" />
        <div className="flex flex-col items-start gap-[5px]">
          <h3 className="max-w-[226px] text-[16px]">
            Уникальные решения в каждом проекте
          </h3>
          <button className="text-[16px] hover:text-yellow">
            Подробнее &gt;
          </button>
        </div>
      </div>
      <div className="flex items-start gap-[12px]">
        <Image src={integrationIcon} alt="code" />
        <div className="flex flex-col items-start gap-[5px]">
          <h3 className="max-w-[226px] text-[16px]">
            Интеграция с любыми сервисам
          </h3>
          <button className="text-[16px] hover:text-yellow">
            Подробнее &gt;
          </button>
        </div>
      </div>
      <div className="flex items-start gap-[12px]">
        <Image src={mobileIcon} alt="code" />
        <div className="flex flex-col items-start gap-[5px]">
          <h3 className="max-w-[226px] text-[16px]">
            Мобильное приложение системы (iOS/Android)
          </h3>
          <button className="text-[16px] hover:text-yellow">
            Подробнее &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
