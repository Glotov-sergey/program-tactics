import { clientFirst, clientSecond, clientThird } from "@/assets/images";
import Container from "@/components/ui/Container/Container";
import Image from "next/image";
import React from "react";
import styles from "./Clients.module.css";

const Clients = () => {
  return (
    <section className="py-[70px]">
      <Container>
        <h2 className="text-[48px] font-medium text-center mb-[40px]">
          Наши <span className="text-yellow">клиенты</span>
        </h2>
        <div className={styles.items}>
          <div className="flex items-start gap-[36px]">
            <Image src={clientFirst} alt="client logo" />
            <div className="flex flex-col gap-[7px]">
              <h4 className="text-yellow text-[20px] uppercase font-semibold">
                Nt-sports
              </h4>
              <p className="text-[14px] text-[#c6c6c6] max-w-[320px]">
                Центр спортивного командирования, планирования и подбора.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[36px]">
            <Image src={clientSecond} alt="client logo" />
            <div className="flex flex-col gap-[7px]">
              <h4 className="text-yellow text-[20px] uppercase font-semibold">
                Ассоциация СВС
              </h4>
              <p className="text-[14px] text-[#c6c6c6] max-w-[320px]">
                Некоммерческая организация “Союз Ветеранов Спорта”
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[36px]">
            <Image src={clientThird} alt="client logo" />
            <div className="flex flex-col gap-[7px]">
              <h4 className="text-yellow text-[20px] uppercase font-semibold">
                Правиительство г.Москва
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Clients;
