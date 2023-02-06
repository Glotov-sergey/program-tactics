import { reviewPlaceholder, yandexLogo } from "@/assets/images";
import Container from "@/components/ui/Container/Container";
import Image from "next/image";
import React from "react";

import styles from "./Reviews.module.css";

const Reviews = () => {
  return (
    <section className="py-[70px]">
      <Container>
        <h2 className="font-medium text-[48px] text-center mb-[40px]">
          <span className="text-yellow">Отзывы </span> клиентов
        </h2>
        <div className="flex flex-wrap items-center justify-between">
          <div className={styles.review}>
            <div className="flex justify-between">
              <div className="flex flex-1 items-center gap-5">
                <Image src={reviewPlaceholder} alt="placeholder" />
                <p className="font-bold text-[24px] leading-[29px]">
                  Светлана <br /> Смирнова
                </p>
              </div>
              <button>
                <p>Смотреть отзыв</p>
                <Image src={yandexLogo} alt="yandex link" />
              </button>
            </div>
            <p className="max-w-[517px] mt-[15px] text-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className={styles.review}>
            <div className="flex justify-between">
              <div className="flex flex-1 items-center gap-5">
                <Image src={reviewPlaceholder} alt="placeholder" />
                <p className="font-bold text-[24px] leading-[29px]">
                  Светлана <br /> Смирнова
                </p>
              </div>
              <button>
                <p>Смотреть отзыв</p>
                <Image src={yandexLogo} alt="yandex link" />
              </button>
            </div>
            <p className="max-w-[517px] mt-[15px] text-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
