import Container from "@/components/ui/Container/Container";
import Further from "@/components/ui/Further/Further";
import React from "react";

import styles from "./Trust.module.css";

const Trust = () => {
  return (
    <section className="py-[70px]">
      <Container>
        <div className={styles.block}>
          <h2 className="text-[36px] font-medium mb-3">
            Доверьте проект нашим специалистам
          </h2>
          <p className="mb-[55px]">Есть вопросы по разработке?</p>
          <div className="flex items-center gap-[26px]">
            <button className="uppercase bg-pink font-semibold py-[14px] px-[71px] rounded-[16px]">
              Контакты
            </button>
            <button className="uppercase bg-yellow font-semibold py-[14px] px-[71px] rounded-[16px] text-[#000]">
              Обсудить проект
            </button>
          </div>
        </div>
      </Container>
      <Further />
    </section>
  );
};

export default Trust;
