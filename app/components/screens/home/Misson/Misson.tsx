import { missionIcon, nikitaImage, nikitaWriting } from "@/assets/images";
import Container from "@/components/ui/Container/Container";
import Image from "next/image";
import React from "react";

const Misson = () => {
  return (
    <section className="py-[70px]">
      <Container>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-[32px]">
            <Image src={nikitaImage} alt="director" />
            <div>
              <h4 className="text-yellow text-[20px] font-semibold">
                Никита Салтанюк
              </h4>
              <p className="max-w-[297px] text-[20px] text-[#c6c6c6]">
                Учредитель, директор по развитию Program Tactics
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <h2 className="flex font-medium text-[48px] gap-[40px]">
              <span>Миссия нашей компании</span>
              <Image src={missionIcon} alt="mission" />
            </h2>
            <p className="max-w-[912px] text-[22px] text-[#c6c6c6]">
              Получить высоко развитое технологическое общество, в котором
              присутсвует разумность обмена, производства продукта и достижения
              цели их потребления
            </p>
            <Image className="self-end" src={nikitaWriting} alt="writing" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Misson;
