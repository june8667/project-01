import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination"; // Pagination 스타일 추가
import "./ImageSlider.css";

const ImageSlider = () => {
  const images = [
    {
      src: "/images/slides/main01.jpg",
      text: "건강보험공단 지정 5대암 검진기관",
    },
    {
      src: "/images/slides/main02.jpg",
      text: "소화기내과 세부 전문의 진료 시스템",
    },
    {
      src: "/images/slides/main03.jpg",
      text: "대학병원급 장비 및 맞춤형 관리 시스템",
    },
  ];

  return (
    <div className="slideContainer">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // 점을 표시할 요소 지정
        }}
        style={{
          position: "relative",
        }}
      >
        {images.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={item.src}
              alt={`slide-${index}`}
              className="slideImg"
            />
            <div className="text-overlay">
              <div className="text-position">
                <p className="text-main-1">
                  나은 사람들이 나은마음으로 진료합니다
                </p>
                <p className="text-main-2">
                  SAMSUNG NAEUN
                  <br />
                  INTERNAL MEDICINE
                </p>
                <p className="text-fix">{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 페이지네이션 점을 표시할 컨테이너 */}
      <div
        className="custom-pagination"
      ></div>
    </div>
  );
};

export default ImageSlider;
