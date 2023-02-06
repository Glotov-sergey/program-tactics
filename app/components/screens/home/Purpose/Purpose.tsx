import { checkIcon, purposeIcon, purposeImage } from "@/assets/images";
import Container from "@/components/ui/Container/Container";
import Image from "next/image";
import React, { FC } from "react";

const Purpose: FC = () => {
  return (
    <section className="py-[70px]">
      <Container>
        <div className="flex justify-between items-start">
          <div>
            <h2 className="flex items-center text-[48px] gap-10">
              <span>Цель нашей компании</span>
              <Image src={purposeIcon} alt="purpose" />
            </h2>
            <p className="text-[22px] text-[#c6c6c6] max-w-[700px]">
              Повышение эффективности российских компаний в доле экономического
              сектора
            </p>
          </div>
          <div className="text-[24px]">
            <span className="text-yellow">01 |</span> О НАС
          </div>
        </div>
        <div className="mt-[50px] flex justify-between">
          <div>
            <Image src={purposeImage} alt="code" />
          </div>
          <div className="flex flex-col gap-[41px]">
            <div className="flex items-start gap-[13px]">
              <Image src={checkIcon} alt="dot" className="translate-y-2" />
              <p className="text-[20px] text-[#c6c6c6] max-w-[758px]">
                Компания специализируется на создании, сопровождении и развитии
                технологичных корпоративных систем и мобильных приложений.
              </p>
            </div>
            <div className="flex items-start gap-[13px]">
              <Image src={checkIcon} alt="dot" className="translate-y-2" />
              <p className="text-[20px] text-[#c6c6c6] max-w-[758px]">
                Мы одни из лидеров рынка в области разработки и оптимизации
                систем автоматизации бизнеса и госуправления (CRM, ERP, BI),
                разработки ПО, интранет-порталов и развития цифрового
                маркетинга.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Purpose;
