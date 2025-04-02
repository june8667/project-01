// 진료과목
import React from "react";
import styles from "./section2.module.css"; // CSS Module import

const Section2 = () => {
  return (
    <div className={styles["container"]}>
      
        <p className={styles["text-head"]}>MEDICAL SUBJECT</p>
        <div className={styles["grid-container"]}>
          <div className={`${styles["grid-item"]} ${styles["item-1"]}`}>
            <img
              src="/images/icons/layout01_icon01.png"
              alt="description"
              className={styles["image"]}
            />
            <span />
            <p className={styles["text-mid"]}>종합검진센터</p>
            <p className={styles["text-small"]}>
              국민건강보험공단 5대암 검진
              <span />
              (위암, 대장암, 간암, 자궁경부암, 유방암)
              <span />
              종합검진 / 공무원 채용검진
              <span />
              일반 채용검진
            </p>
          </div>
          <div className={`${styles["grid-item"]} ${styles["item-2"]}`}>
            <img
              src="/images/icons/layout01_icon02.png"
              alt="description"
              className={styles["image"]}
            />
            <span />
            <p className={styles["text-mid"]}>내시경클리닉</p>
            <p className={styles["text-small"]}>
              위·대장내시경
              <span />
              수면내시경
              <span />
              당일 용종절제술
              <span />
              조직검사 및 헬리코박터균검사
            </p>
          </div>
          <div className={`${styles["grid-item"]} ${styles["item-3"]}`}>
            <img
              src="/images/icons/layout01_icon03.png"
              alt="description"
              className={styles["image"]}
            />
            <span />
            <p className={styles["text-mid"]}>첨단영상검사</p>
            <p className={styles["text-small"]}>
              복부초음파 / 간초음파
              <span />
              심장초음파 / 갑상선초음파
              <span />
              전립선초음파 / 경동맥초음파
              <span />
               X-ray촬영 / 골밀도검사
            </p>
          </div>
          <div className={`${styles["grid-item"]} ${styles["item-4"]}`}>
            <img
              src="/images/icons/layout01_icon04.png"
              alt="description"
              className={styles["image"]}
            />
            <span />
            <p className={styles["text-mid"]}>영양웰빙클리닉</p>
            <p className={styles["text-small"]}>
              피로회복을 위한
              <span />
              수액치료
              <span />
              비만치료제
              <span />
              통증클리닉
              <span />
              (갈비뼈골절, 좌골신경통, 통풍)
            </p>
          </div>
          <div className={`${styles["grid-item"]} ${styles["item-5"]}`}>
            <img
              src="/images/icons/layout01_icon05.png"
              alt="description"
              className={styles["image"]}
            />
            <span />
            <p className={styles["text-mid"]}>위장질환클리닉</p>
            <p className={styles["text-small"]}>
              식도암 / 위암 / 대장암
              <span />
              역류성식도염
              <span />
              과민성 대장증후군
              <span />
              염증성 대장질환
            </p>
          </div>
          <div className={`${styles["grid-item"]} ${styles["item-6"]}`}>
            <img
              src="/images/icons/layout01_icon06.png"
              alt="description"
              className={styles["image"]}
            />
            <span />
            <p className={styles["text-mid"]}>간·췌장클리닉</p>
            <p className={styles["text-small"]}>
              만성 B형 / C형 간염
              <span />
              급성 A형 간염
              <span />
              지방간 / 알코올성 간질환
              <span />
              간경변증 / 담석증
            </p>
          </div>
          <div className={`${styles["grid-item"]} ${styles["item-7"]}`}>
            <img
              src="/images/icons/layout01_icon07.png"
              alt="description"
              className={styles["image"]}
            />
            <span />
            <p className={styles["text-mid"]}>알레르기&천식클리닉</p>
            <p className={styles["text-small"]}>
              알레르기 / 알레르기성 비염
              <span />
              기관지 천식
              <span />
              두드러기
              <span />
              MAST 진단 검사
            </p>
          </div>
          <div className={`${styles["grid-item"]} ${styles["item-8"]}`}>
            <img
              src="/images/icons/layout01_icon08.png"
              alt="description"
              className={styles["image"]}
            />
            <span />
            <p className={styles["text-mid"]}>예방접종클리닉</p>
            <p className={styles["text-small"]}>
              대상포진 / 간염 A형·B형
              <span />
              파상풍(백일해) / 수막구균
              <span />
              폐렴구균 / 독감4가
            </p>
          </div>
        </div>
      </div>

  );
};

export default Section2;
