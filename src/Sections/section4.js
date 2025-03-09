// 건강검진센터
import { useState } from "react";
import styles4 from "./section4.module.css";

const Seciont4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles4["container"]}>
      <p className={styles4["text-small"]}>SAMSUNG NAEUN INTERNAL MEDICINE</p>
      <p className={styles4["text-large"]}>건강검진센터</p>
      <p className={styles4["text-mid"]} style={{marginBottom : "-15px"}}>
        연 1회 정기적인 종합건강검진을 받을 경우 성인병과 암의 조기진단 및
        예방이 가능합니다.
      </p>
      <p className={styles4["text-mid"]}>
        건강검진을 통해 건강에 대한 불안감에서 벗어나 심신의 건강에 대한
        자부심과 생활의 활력을 유지할 수 있습니다.
      </p>
      <div className={styles4["rounded-box"]}>
        <p className={styles4["text-large2"]}>
          건강검진 프로그램 자세히 보기&nbsp;&nbsp;
        </p>
        <img
          className={styles4["image-plus"]}
          src="/images/icons/ico-plus.png"
          alt="icon"
          onClick={() => setIsOpen(true)}
        />
      </div>
      {/* 팝업(모달) */}
      {isOpen && (
        <div className={styles4["modal"]} onClick={() => setIsOpen(false)}>
          {" "}
          {/* 바깥 클릭 시 닫힘 */}
          <div
            className={styles4["overlay"]}
            onClick={togglePopup} // 오버레이 클릭 시 팝업 닫기
          ></div>
          <div
            className={styles4["modal-content"]}
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/images/popup/popup.jpg" alt="Popup" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Seciont4;
