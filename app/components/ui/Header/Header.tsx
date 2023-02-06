import React from "react";
import Container from "../Container/Container";
import { logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className="pt-[25px]">
      <Container>
        <div className="flex items-center">
          <div className="mr-[154px]">
            <Image src={logo} alt="program tactics" />
          </div>
          <nav className="flex gap-[20px] flex-1">
            <ul className="text-[18px] flex gap-[20px]">
              <li>
                <Link
                  className="hover:text-yellow transition-colors duration-75"
                  href="/about"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow transition-colors duration-75"
                  href="/about"
                >
                  Услуги
                </Link>
              </li>
            </ul>
            <ul className="text-[18px] flex gap-[20px]">
              <li>
                <Link
                  className="hover:text-yellow transition-colors duration-75"
                  href="/about"
                >
                  Реализованные проекты
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow transition-colors duration-75"
                  href="/about"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-[37px]">
            <a
              className="text-[21px] font-semibold hover:text-yellow"
              href="tel:+79166974227"
            >
              +7 (916) 697 42-27
            </a>
            <button className={styles.button}>Обсудить проект</button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
