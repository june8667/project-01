import React from "react";
import styles from "./section2.module.css"; // CSS Module import

const Section2 = () => {
  return (
    <div className={styles["container"]}>
      <div>
        <p className={styles["text-head"]}>MEDICAL SUBJECT</p>
      </div>
      <div className={styles["grid-container"]}>
        <div className={`${styles["grid-item"]} ${styles["item-1"]}`}>
          <img
            src="/images/icons/layout01_icon01.png"
            alt="description"
            className={styles["image"]}
          />
          <br />
          <p className={styles["text-mid"]}>종합검진센터</p>
          <p className={styles["text-small"]}>
            국민건강보험공단 4대암 검진
            <br />
            (위암, 대장암, 간암, 유방암)
            <br />
            종합검진 / 공무원 채용검진
            <br />
            일반 채용검진
          </p>
        </div>
        <div className={`${styles["grid-item"]} ${styles["item-2"]}`}>
          <img
            src="/images/icons/layout01_icon02.png"
            alt="description"
            className={styles["image"]}
          />
          <br />
          <p className={styles["text-mid"]}>내시경클리닉</p>
          <p className={styles["text-small"]}>
            위·대장내시경
            <br />
            수면내시경
            <br />
            당일 용종절제술
            <br />
            조직검사 및 헬리코박터균검사
          </p>
        </div>
        <div className={`${styles["grid-item"]} ${styles["item-3"]}`}>
          <img
            src="/images/icons/layout01_icon03.png"
            alt="description"
            className={styles["image"]}
          />
          <br />
          <p className={styles["text-mid"]}>첨단영상검사</p>
          <p className={styles["text-small"]}>
            복부초음파 / 간초음파
            <br />
            심장초음파 / 갑상선초음파
            <br />
            유방초음파 / 전립선초음파
            <br />
            경동맥초음파 / X-ray촬영
            <br />
            골밀도검사
          </p>
        </div>
        <div className={`${styles["grid-item"]} ${styles["item-4"]}`}>
          <img
            src="/images/icons/layout01_icon04.png"
            alt="description"
            className={styles["image"]}
          />
          <br />
          <p className={styles["text-mid"]}>영양웰빙클리닉</p>
          <p className={styles["text-small"]}>
            피로회복을 위한
            <br />
            수액치료
            <br />
            비만치료제
            <br />
            통증클리닉
            <br />
            (갈비뼈골절, 좌골신경통, 통풍)
          </p>
        </div>
        <div className={`${styles["grid-item"]} ${styles["item-5"]}`}>
          <img
            src="/images/icons/layout01_icon05.png"
            alt="description"
            className={styles["image"]}
          />
          <br />
          <p className={styles["text-mid"]}>위장질환클리닉</p>
          <p className={styles["text-small"]}>
            식도암 / 위암 / 대장암
            <br />
            역류성식도염
            <br />
            과민성 대장증후군
            <br />
            염증성 대장질환
          </p>
        </div>
        <div className={`${styles["grid-item"]} ${styles["item-6"]}`}>
          <img
            src="/images/icons/layout01_icon06.png"
            alt="description"
            className={styles["image"]}
          />
          <br />
          <p className={styles["text-mid"]}>간·췌장클리닉</p>
          <p className={styles["text-small"]}>
            만성 B형 / C형 간염
            <br />
            급성 A형 간염
            <br />
            지방간 / 알코올성 간질환
            <br />
            간경변증 / 담석증
          </p>
        </div>
        <div className={`${styles["grid-item"]} ${styles["item-7"]}`}>
          <img
            src="/images/icons/layout01_icon07.png"
            alt="description"
            className={styles["image"]}
          />
          <br />
          <p className={styles["text-mid"]}>알레르기&천식클리닉</p>
          <p className={styles["text-small"]}>
            알레르기 / 알레르기성 비염
            <br />
            기관지 천식
            <br />
            두드러기
            <br />
            MAST 진단 검사
          </p>
        </div>
        <div className={`${styles["grid-item"]} ${styles["item-8"]}`}>
          <img
            src="/images/icons/layout01_icon08.png"
            alt="description"
            className={styles["image"]}
          />
          <br />
          <p className={styles["text-mid"]}>예방접종클리닉</p>
          <p className={styles["text-small"]}>
            대상포진 / 간염 A형·B형
            <br />
            파상풍(백일해) / 수막구균
            <br />
            폐렴구균 / 독감4가
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
