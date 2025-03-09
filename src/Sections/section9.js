// 유방암검진센터
import React, { useState } from "react";
import styles9 from "./section9.module.css";

const Seciont9 = () => {
  const [isTextB1, setisTextB1] = useState(false);
  const [isTextB2, setisTextB2] = useState(false);
  const [isTextB3, setisTextB3] = useState(false);

  const toggleText1 = () => {
    setisTextB1((prev) => !prev); // 클릭할 때마다 B와 A 텍스트를 토글
  };

  const toggleText2 = () => {
    setisTextB2((prev) => !prev); // 클릭할 때마다 B와 A 텍스트를 토글
  };

  const toggleText3 = () => {
    setisTextB3((prev) => !prev); // 클릭할 때마다 B와 A 텍스트를 토글
  };


  return (
    <div className={styles9["container"]}>
      <div className={styles9["top"]}>
        <div className={styles9["top-contents"]}>
          <img
            className={styles9["image-logo"]}
            src="/images/logo/logo-horizontal.png"
            alt="icon"
          />
          <p className={styles9["text-1"]}>약속합니다</p>
        </div>
      </div>
      <div className={styles9["parent"]}>
        <div
          className={`${styles9.child} ${styles9.child1} }`}
          onClick={toggleText1}
        >
          {/* 첫 번째 텍스트 (A) */}
          <div
            className={`${styles9.textboxA} ${
              !isTextB1 ? styles9.fadeIn : styles9.fadeOut
            }`}
          >
            <p>
              환자 안전 중심의
              <br /> 소독장비
            </p>
            <img
              className={styles9["image-click"]}
              src="/images/click-white.png"
              alt="icon"
            />
          </div>
          {/* 두 번째 텍스트 (B) */}
          <div
            className={`${styles9.textboxB} ${
              isTextB1 ? styles9.fadeIn : styles9.fadeOut
            }`}
          >
            <p>
              독립된 소독실 운영 및 내시경 세척기 사용
              <br />
              대한 소화기 내시경 학회의 기준을 준수하여
              <br />
              1:1 내시경 소독으로 철저하게 관리합니다.
            </p>
          </div>
        </div>
        <div 
          className={`${styles9.child} ${styles9.child2}`}
          onClick={toggleText2}
        >
          {/* 첫 번째 텍스트 (A) */}
          <div
            className={`${styles9.textboxA} ${styles9.textboxAblack} ${
              !isTextB2 ? styles9.fadeIn : styles9.fadeOut
            }`}
          >
            <p>
              소화기내과 내시경
              <br />
              세부전문의 원장
            </p>
            <img
              className={styles9["image-click"]}
              src="/images/click.png"
              alt="icon"
            />
          </div>
          {/* 두 번째 텍스트 (B) */}
          <div
            className={`${styles9.textboxB} ${styles9.textboxBblack} ${
              isTextB2 ? styles9.fadeIn : styles9.fadeOut
            }`}
          >
            <p>
              내시경 세부 전문의가
              <br />
              가족처럼
              <br />
              진료하고
              <br />내 몸처럼 치료합니다.
            </p>
          </div>
        </div>
        <div 
          className={`${styles9.child} ${styles9.child3}`}
          onClick={toggleText3}
        >
          {/* 첫 번째 텍스트 (A) */}
          <div
            className={`${styles9.textboxA} ${
              !isTextB3 ? styles9.fadeIn : styles9.fadeOut
            }`}
          >
            <p>
              근거 중심의 진료
              <br />
              체계적인 시스템
            </p>
            <img
              className={styles9["image-click"]}
              src="/images/click-white.png"
              alt="icon"
            />
          </div>
          {/* 두 번째 텍스트 (B) */}
          <div
            className={`${styles9.textboxB} ${
              isTextB3 ? styles9.fadeIn : styles9.fadeOut
            }`}
          >
            <p>
              충분한 면담 후
              <br />
              필요한 검사만을
              <br />
              진행하겠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seciont9;
