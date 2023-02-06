import { macbookImage } from "@/assets/images";
import Container from "@/components/ui/Container/Container";
import Image from "next/image";
import React, { FC } from "react";
import Items from "./Items";

const Hero: FC = () => {
  return (
    <section className="py-[73px]">
      <Container>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="uppercase max-w-[640px] text-[64px] font-medium text-yellow leading-[78px] mb-23">
              КОРПОРАТИВНЫЕ СИСТЕМЫ
            </h1>
            <h4 className="uppercase text-[34px] mb-[45px]">
              ДЛЯ ВАШЕГО БИЗНЕСА ПОД КЛЮЧ
            </h4>
            <p className="text-[#C6C6C6] max-w-[571px] leading-[25px]">
              We don&apos;t just help with your IT needs. We focus on the entire
              ecosystem surrounding it. Bringing together people, process, and
              technology, we pride ourselves on delivering solutions that work
              in reality. Not theory.
            </p>
            <div className="flex items-center mt-[50px] gap-[13px]">
              <button className="bg-yellow font-bold text-[#000] px-[36px] py-[14px] rounded-[20px]">
                Отправть Тех.Задание
              </button>
              <button className="bg-darkGray font-bold text-[#fff] px-[36px] py-[14px] rounded-[20px]">
                Скачать бриф на разработку проекта
              </button>
            </div>
          </div>
          <div>
            <Image src={macbookImage} alt="mockup" />
          </div>
        </div>
        <Items />
      </Container>
    </section>
  );
};

export default Hero;
