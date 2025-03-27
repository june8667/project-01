// 유방암검진센터
import React from "react";
import styles5 from "./section5.module.css";

const Seciont5 = () => {
  return (
    <div className={styles5["container"]}>
      <div className={styles5["top"]}>
        <p className={styles5["text-large"]}>유방암검진센터</p>
        <p className={styles5["text-mid"]}>
          초음파 검사와 유방 촬영술을 통해 염증성 병변을 구분하고 만져지지 않는
          유방암까지 섬세하게 검사할 수 있습니다. 전문의와의 상담을 통해
          유방검사를 진행하므로 맞춤형 진료를 받을 수 있습니다.
        </p>
      </div>
      <div className={styles5["parent"]}>
        <div className={styles5["child"]}>
          <img
            className={styles5["image-hpt"]}
            src="/images/icons/layout03_icon01.png"
            
          />
          <p className={styles5["text-box"]}>
            <span style={{ color: "white", fontWeight: "500" }}>
              여성만을 위한
            </span>
            <br />
            프라이빗하고
            <br />
            편안한분위기
          </p>
        </div>
        <div className={styles5["child"]}>
          <img
            className={styles5["image-bed"]}
            src="/images/icons/layout03_icon02.png"
            
          />
          <p className={styles5["text-box"]}>
            <span style={{ color: "white", fontWeight: "500" }}>
              첨단 장비를 사용한
              <br />
              체계적인
            </span>
            &nbsp;여성
            <br />
            암검진 시스템
          </p>
        </div>
      </div>
    </div>
  );
};

export default Seciont5;
