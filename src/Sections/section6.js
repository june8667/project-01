import React from "react";
import styles6 from "./section6.module.css";

const Seciont5 = () => {
  return (
    <div className={styles6["container"]}>
      <div>
        <div className={styles6["top"]}>
          <p className={styles6["text-small"]}>
            SAMSUNG NAEUN INTERNAL MEDICINE
          </p>
          <p className={styles6["text-large"]}>내시경클리닉</p>
          <p className={styles6["text-mid-top"]}>
            위 대장 질환은 증상이 없이 나타나므로 발견하기 어렵기 때문에 조기
            검사 결과가 매우 중요합니다.
            <br />
            또한, 미세한 변화를 발견할 수 있는 장비만이 조기 암들을 놓치지 않고
            진단할 수 있습니다.
          </p>
        </div>
        <div className={styles6["parent"]}>
          <div className={styles6["child"]}>
            <p className={styles6["text-number"]}>01</p>
            <img
              className={styles6["image-hpt"]}
              src="/images/icons/layout04_icon01.png"
              alt="icon"
            />
            <p className={styles6["text-box"]}>첨단 내시경 장비 사용</p>
            <p className={styles6["text-mid"]}>
              대학병원에서 사용하고 있는 첨단 내시경 장비를 도입하여 안전하고
              믿을 수 있는 검사를 진행합니다.
            </p>
          </div>
          <div className={styles6["child"]}>
            <p className={styles6["text-number"]}>02</p>
            <img
              className={styles6["image-bed"]}
              src="/images/icons/layout04_icon02.png"
              alt="icon"
            />
            <p className={styles6["text-box"]}>내시경 세척기 보유</p>
            <p className={styles6["text-mid"]}>
              내시경 전용 세척기를 통하여 내시경 검사 기구를 세척, 소독, 헹굼을
              하고 청결 상태를 유지합니다.
            </p>
          </div>
          <div className={styles6["child"]}>
            <p className={styles6["text-number"]}>03</p>
            <img
              className={styles6["image-bed"]}
              src="/images/icons/layout04_icon03.png"
              alt="icon"
            />
            <p className={styles6["text-box"]}>믿을 수 있는 내시경</p>
            <p className={styles6["text-mid"]}>
              위내시경 2만례, 대장내시경 5천례 이상 숙련된 소화기내시경 전문의가
              직접 검사합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seciont5;
