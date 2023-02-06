import { lines, teamImage } from "@/assets/images";
import Container from "@/components/ui/Container/Container";
import Image from "next/image";
import React from "react";
import styles from "./Team.module.css";

const Team = () => {
  return (
    <section className="py-[70px] relative">
      <Image
        src={lines}
        alt="линии"
        className="absolute w-screen left-0 right-0 top-[-200px] z-[-1]"
      />
      <Container>
        <h2 className="text-[48px] font-medium text-center mb-[71px]">
          Команда <span className="text-yellow">Program Tactics</span>
        </h2>
        <div className="flex items-start justify-between">
          <div className={styles.item}>
            <Image
              className="absolute top-[-20px]"
              src={teamImage}
              alt="team member"
            />
            <div>
              <h4 className="text-center text-[24px] font-bold mt-5 mb-3">
                Данил Ленченков
              </h4>
              <p className="font-semibold text-[#c6c6c6] text-[14px]">
                Ведущий Front-end разработчик
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <Image
              className="absolute top-[-20px]"
              src={teamImage}
              alt="team member"
            />
            <div>
              <h4 className="text-center text-[24px] font-bold mt-5 mb-3">
                Елизавета Репина
              </h4>
              <p className="font-semibold text-[#c6c6c6] text-[14px]">
                Исполнительный директор
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <Image
              className="absolute top-[-20px]"
              src={teamImage}
              alt="team member"
            />
            <div>
              <h4 className="text-center text-[24px] font-bold mt-5 mb-3">
                Кристина Прохоренко
              </h4>
              <p className="font-semibold text-center text-[#c6c6c6] text-[14px]">
                Ведущий специалист секции <br /> маркетинга
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Team;
