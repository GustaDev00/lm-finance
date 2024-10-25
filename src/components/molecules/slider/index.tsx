import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import useAnimation from "./animation";
import * as S from "./styles";
import { SliderProps } from "./props";

export const Slider = ({ items, className }: SliderProps) => {
  const { ref, isInView } = useAnimation();
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      if (isInView) {
        swiperRef.current.autoplay.start();
      } else {
        swiperRef.current.autoplay.stop();
      }
    }
  }, [isInView]);

  return (
    <S.Slide ref={ref} className={className}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay]}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {items.map((img, index) => (
          <SwiperSlide key={index}>
            <S.Container>
              <S.Img {...img} />
            </S.Container>
          </SwiperSlide>
        ))}
      </Swiper>
      <S.Content>
        <S.Current>{activeIndex + 1}</S.Current>
        <S.Line />
        <S.Total>{items.length}</S.Total>
        <S.Prev onClick={handlePrev} />
        <S.Next onClick={handleNext} />
      </S.Content>
    </S.Slide>
  );
};
