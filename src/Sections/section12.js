import React, { useState, useEffect } from "react";
import styles12 from "./section12.module.css";

const Section11 = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 모달이 열릴 때 body 스크롤을 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    
    <div className={styles12["container"]}>
      <div className={styles12["top"]}>
      {/* 클릭하면 모달 열기 */}
      <p onClick={() => setIsOpen(true)}>
        비급여항목
      </p>

      {/* 모달 */}
      {isOpen && (
        <div style={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles12["modal"]} onClick={(e) => e.stopPropagation()}>
            <img src="/images/nosupport.jpg" alt="Example" style={{ width : "100%", borderRadius: "10px" }} />
          </div>
        </div>
      )}
      </div>
      <div className={styles12["bottom"]}>
        <div className={styles12["logo"]}>
          <img src="/images/logo.png" alt="description"></img>
          <p>건강검진센터</p>
        </div>
        <div className={styles12["desc"]}>
          <div>
            <p className={styles12["text1"]}>삼성나은내과의원 031.552.7575</p>
            <p className={styles12["text2"]}>대표자:신수린 사업자번호:453-97-01687 소재지:경기도 구리시 경춘로 223 명동빌딩 4층 </p>
            <p className={styles12["text3"]}>Copyright 2025.삼성나은내과의원 all rights reserved.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Designed by JuneShin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 스타일 객체
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right:0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // 검은색 투명 배경
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    overflow: "hidden", // 전체 스크롤 방지
    
  },
};

export default Section11;
