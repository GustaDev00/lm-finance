"use client";

import { type FC } from "react";
import Header from "./header";
import AboutUs from "./about-us";
import CareerMove from "./career-move";
import Advantages from "./advantages";
import SayAboutUs from "./say-about-us";
import SelectionProcess from "./selection-process";
import Vacancies from "./vacancies";
import Footer from "./footer";

export const HomeTemplate: FC = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <CareerMove />
      <Advantages />
      <SayAboutUs />
      <SelectionProcess />
      <Vacancies />
      <Footer />
    </>
  );
};
