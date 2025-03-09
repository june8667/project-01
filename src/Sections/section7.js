// 위내시경/대장내시경
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination"; // Pagination 스타일 추가
import styles7 from "./section7.module.css";
import "./section7.css";

const ImageSlider = () => {
  const texts = [
    {
      text1: "위내시경",
      text2: "위 내로 삽입하여 식도, 위, 십이지장 등의 점막 구조를 직접 관찰하며 위염, 소화성 궤양, 위암 등의 질환을 진단합니다.",
      text3: "필요에 따라서 내시경을 통하여 1~2mm 정도의 작은 조직을 뜯은 후 현미경으로 관찰하는 조직생검으로",
      text4: "위암을 비롯한 각종 질환을 확진할 수 있으며 위 내에서 성장하는 세균(헬리코박터) 감염유무도 확인할 수 있습니다.",
    },
    {
      text1: "대장내시경",
      text2: "끝에 소형 카메라가 달린 지름 1cm 정도 되는 긴 관을 항문을 통해 대장이 시작되는 오른쪽 아랫배까지",
      text3: "약 1m 정도 집어 넣은 후, 서서히 빼내면서 대장 내부를 카메라가 찍어 보내는 화면을 통해 진단하는 검사입니다.",
      text4: "내시경검사와 동시에 당일 용종제거수술도 가능합니다.",
    }
  ];

  return (
    <div style={{ position: "relative" }}>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
          el: ".custom-pagination7", // 점을 표시할 요소 지정
        }}
        style={{
          position: "relative",
        }}
      >
        {texts.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#0c78B7",
              height : "400px"
            }}
          >
            <div className={styles7["text-overlay"]}>
              <div className={styles7["text-position"]}>
                <p className={styles7["text-main"]}>{item.text1}</p>
                <p className={styles7["text-desc"]}>{item.text2}</p>
                <p className={styles7["text-desc"]}>{item.text3}</p>
                <p className={styles7["text-desc"]}>{item.text4}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 페이지네이션 점을 표시할 컨테이너 */}
      <div className="pageContainer">
      <div
        className="custom-pagination7"
      ></div>
      </div>
      
    </div>
  );
};

export default ImageSlider;
