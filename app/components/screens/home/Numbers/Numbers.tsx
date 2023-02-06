import Container from "@/components/ui/Container/Container";
import React, { FC } from "react";
import styles from "./Numbers.module.css";

const Numbers: FC = () => {
  return (
    <section className="py-[70px]">
      <Container>
        <div className="flex flex-wrap justify-center items-center gap-[150px]">
          <div>
            <div className="flex items-center gap-[32px]">
              <b className={styles.num}>2</b>
              <p className={styles.text}>
                месяца среднее время создания проекта с нуля
              </p>
            </div>
            <div className="flex items-center gap-[32px]">
              <b className={styles.num}>5</b>
              <p className={styles.text}>лет компания на рынке IT-технологий</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-[32px]">
              <b className={styles.num}>45+</b>
              <p className={styles.text}>
                млн. ₽ принесли нашим плиентам разработанные решения
              </p>
            </div>
            <div className="flex items-center gap-[32px]">
              <b className={styles.num}>150+</b>
              <p className={styles.text}>
                успешно реализованных проектов и созданных программ
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Numbers;
