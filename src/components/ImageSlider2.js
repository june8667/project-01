import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination"; // Pagination 스타일 추가
import "./ImageSlider2.css";
import "swiper/css/navigation";

const ImageSlider2 = () => {
  const images = [
    "/images/interior/1.webp",
    "/images/interior/2.webp",
    "/images/interior/3.webp",
    "/images/interior/4.webp",
    "/images/interior/5.webp",
    "/images/interior/6.webp",
    "/images/interior/7.webp",
    "/images/interior/8.webp",
    "/images/interior/9.webp",
    "/images/interior/10.webp",
    "/images/interior/11.webp",
    "/images/interior/12.webp",
    "/images/interior/13.webp",
    "/images/interior/14.webp",
    "/images/interior/15.webp",
    "/images/interior/16.webp",
    "/images/interior/17.webp",

  ];

  return (
    <div style={{width : "100%"}}>
      <div className="slideContainer1">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          navigation={true}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination3", // 점을 표시할 요소 지정
          }}
          style={{ position: "relative" }}
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={src} alt={`slide-${index}`} className="slideImg2" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* 페이지네이션 점을 표시할 컨테이너 */}
      <div className="custom-pagination3"></div>
    </div>
  );
};

export default ImageSlider2;
