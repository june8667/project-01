// 건강검진센터
import React, { useState } from "react";
import styles4 from "./section4.module.css";

const Seciont4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles4["container"]}>
      <p className={styles4["text-small"]}>SAMSUNG NAEUN INTERNAL MEDICINE</p>
      <p className={styles4["text-large"]}>건강검진센터</p>
      <p className={styles4["text-mid"]} style={{ marginBottom: "-15px" }}>
        연 1회 정기적인 종합건강검진을 받을 경우 성인병과 암의 조기진단 및
        예방이 가능합니다.
      </p>
      <p className={styles4["text-mid"]}>
        건강검진을 통해 건강에 대한 불안감에서 벗어나 심신의 건강에 대한
        자부심과 생활의 활력을 유지할 수 있습니다.
      </p>
      <div className={styles4["rounded-box"]}>
        <p className={styles4["text-large2"]}>
          "최신 건강검진 프로그램 완비" &nbsp;&nbsp;
        </p>
        {/* <img
          className={styles4["image-plus"]}
          src="/images/icons/ico-plus.png"
          alt="icon"
          onClick={() => setIsOpen(true)}
        /> */}
      </div>
      {/* 팝업(모달) */}
      {isOpen && (
        <div style={modalStyles.overlay} onClick={() => setIsOpen(false)}>
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

// 스타일 객체
const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // 검은색 투명 배경
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "80%",
  },
};

export default Seciont4;
