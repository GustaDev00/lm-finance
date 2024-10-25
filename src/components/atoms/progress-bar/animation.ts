import { useEffect, useRef } from "react";
import gsap from "gsap";

export default ({ duration, isActive }: { duration: number; isActive: boolean }) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) {
      gsap.killTweensOf(progressRef.current); // Para a animação imediatamente
      return;
    }

    const resetAnimation = () => {
      gsap.set(progressRef.current, { width: "0%" });
      gsap.to(progressRef.current, {
        width: "100%",
        duration,
        ease: "linear",
        onComplete: resetAnimation,
      });
    };

    resetAnimation();
  }, [isActive, duration]);

  return { progressRef };
};
