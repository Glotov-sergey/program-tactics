import { macbookImage } from "@/assets/images";
import Container from "@/components/ui/Container/Container";
import Image from "next/image";
import React, { FC } from "react";

import styles from "./Cases.module.css";

const Cases: FC = () => {
  return (
    <section className="py-[70px]">
      <Container>
        <h2 className="text-center mb-[40px] text-[48px] font-medium">
          Выполненные <span className="text-yellow">кейсы</span>
        </h2>
        <div className="flex flex-wrap justify-between items-center">
          <div className={styles.item}>
            <div className={styles.itemPreview}>
              <Image src={macbookImage} alt="case" width={525} />
            </div>
            <div className={styles.itemInfo}>
              <div className="flex-1">
                <h3 className="text-[#000] font-bold text-[48px]">
                  Finance (fullstack)
                </h3>
                <p className="text-[#000] text-[22px] font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <button className="font-semibold text-[22px] text-[#000]">
                Перейти к проекту
              </button>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemPreview}>
              <Image src={macbookImage} alt="case" width={525} />
            </div>
            <div className={styles.itemInfo}>
              <div className="flex-1">
                <h3 className="text-[#000] font-bold text-[48px]">
                  Finance (fullstack)
                </h3>
                <p className="text-[#000] text-[22px] font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <button className="font-semibold text-[22px] text-[#000]">
                Перейти к проекту
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cases;
