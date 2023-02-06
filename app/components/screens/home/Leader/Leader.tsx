import { leaderImage, lines } from "@/assets/images";
import Container from "@/components/ui/Container/Container";
import Further from "@/components/ui/Further/Further";
import Image from "next/image";
import React, { FC } from "react";

const Leader: FC = () => {
  return (
    <section className="relative py-[70px]">
      <Image
        src={lines}
        alt="линии"
        className="absolute w-screen left-0 right-0 top-0 z-[-1]"
      />
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <Image src={leaderImage} alt="team photo" />
          </div>
          <div>
            <h2 className="font-medium text-[36px] text-[#fff] max-w-[575px] leading-[44px]">
              Лидер №1 высоких технологий в сфере импортозамещения 2022г.
            </h2>
            <p className="text-[16px] leading-[25px] text-[#c6c6c6] max-w-[571px] mt-[20px]">
              We don&apos;t just help with your IT needs. We focus on the entire
              ecosystem surrounding it. Bringing together people, process, and
              technology, we pride ourselves on delivering solutions that work
              in reality. Not theory.
            </p>
          </div>
        </div>
        <Further />
      </Container>
    </section>
  );
};

export default Leader;
