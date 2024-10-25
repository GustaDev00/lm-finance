/* eslint-disable import/no-anonymous-default-export */
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({ delay: 0.4 });

    const title = sectionRef.current.querySelector("h1");
    const subtitle = sectionRef.current.querySelector("p");
    const button = sectionRef.current.querySelector("[data-timeline='button']");
    const dealsText = sectionRef.current.querySelector("[data-timeline='deals-text']");
    const timelineElements = sectionRef.current.querySelectorAll("[data-timeline]");

    tl.fromTo(title, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(subtitle, { y: 100, opacity: 0 }, { y: 0, opacity: 0.6, duration: 1 }, "<+=0.2")
      .fromTo(button, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "<+=0.2")
      .fromTo(dealsText, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "<+=0.2");

    timelineElements.forEach((element) => {
      tl.fromTo(element, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "<+=0.2");
    });
  }, []);

  return { sectionRef };
};
