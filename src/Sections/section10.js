// 유방암검진센터
import React from "react";
import styles10 from "./section10.module.css";

const Seciont10 = () => {
  return (
    <div className={styles10["container"]}>
      <div className={styles10["top"]}>
        <p className={styles10["text-top-1"]}>삼성나은내과와 협력병원이 함께합니다</p>
        <p className={styles10["text-top-2"]}>협력병원을 통해 최선의 의료서비스로 보답해드리겠습니다.</p>
      </div>
      <div className={styles10["grid-container"]}>
        <div
          className={`${styles10["grid-item"]} ${styles10["grid-item1"]}`}
        ></div>
        <div
          className={`${styles10["grid-item"]} ${styles10["grid-item2"]}`}
        ></div>
        <div
          className={`${styles10["grid-item"]} ${styles10["grid-item3"]}`}
        ></div>
        <div
          className={`${styles10["grid-item"]} ${styles10["grid-item4"]}`}
        ></div>
        <div
          className={`${styles10["grid-item"]} ${styles10["grid-item5"]}`}
        ></div>
        <div
          className={`${styles10["grid-item"]} ${styles10["grid-item6"]}`}
        ></div>
        <div
          className={`${styles10["grid-item"]} ${styles10["grid-item7"]}`}
        ></div>
        <div
          className={`${styles10["grid-item"]} ${styles10["grid-item8"]}`}
        ></div>
      </div>
    </div>
  );
};

export default Seciont10;
