// 의료진소개
import React from "react";
import styles from "./section3.module.css";

const Section3 = () => {
  return (
    <div className={styles["container"]}>
      <div className={`${styles["item"]} ${styles["item-2"]}`}></div>
      <div className={`${styles["item"]} ${styles["item-1"]}`}>
        <div className={styles["samsung"]}></div>
        <p className={styles["text-0"]}>
          <span className={styles["text-2"]}>대표원장 | 내과전문의</span>
          <span className={styles["text-1"]}>신수린</span>
        </p>
        <div className={styles["text-bottom"]}>
          <p className={styles["text-3"]}>
            의학박사
            <br />
            내과 지도전문의
            <br />
            내시경 세부 전문의
            <br />
            소화기내과 분과 전문의
            <br />
            강동성심병원 내과 수련
            <br />
            삼성서울병원 소화기내과 임상교수
            <br />
            강남성심병원 소화기내과 조교수
            <br />
            삼성창원병원 건강의학센터 교수
            <br />
            서울의료원 소화기내과 과장
            <br />
          </p>
          <p className={styles["text-4"]}>
            대한 내과학회
            <br />
            대한 간학회
            <br />
            대한 소화기학회
            <br />
            대한 소화기내시경학회
            <br />
            미국간학회 AASLD
            <br />
            유럽간학회 EASL
            <br />
            아시아태평양 간학회 APASL
            <br />
            임상 내분비 학회
            <br />
            임상 초음파 학회
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
