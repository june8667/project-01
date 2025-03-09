// 초음파클리닉
import React from "react";
import styles8 from "./section8.module.css";

const Seciont8 = () => {
  return (
    <div className={styles8["container"]}>
      <div style={{ width: "100%" }}>
        <p className={styles8["text-small"]}>SAMSUNG NAEUN INTERNAL MEDICINE</p>
        <p className={styles8["text-large"]}>초음파클리닉</p>
        <p className={styles8["text-mid"]}>
          높은 주파수를 이용하여 방사선의 노출없이 무해하고 안전한 방법으로
          <br />
          인체 내부장기를 초음파를 통해 검사하고 영상 검사 중 가장 기초가 되는
          검사법입니다.
        </p>
      </div>
      <div className={styles8["grid-container"]}>
        <div class={styles8["item"]}>
          <p className={styles8["text-item-1"]}>복부 초음파</p>
          <p className={styles8["text-item-2"]}>
            간, 담낭, 담관, 췌장, 신장, 비장의 구조적 이상을 확인합니다. <br />
            이를 통하여 질환의 진단과 치료에 도움을 줍니다.
          </p>
        </div>
        <div class={styles8["item"]}>
          <p className={styles8["text-item-1"]}>갑상선 초음파</p>
          <p className={styles8["text-item-2"]}>
            갑상선 내부의 결절과 낭종의 크기 및 형태이상을 확인합니다. <br />
            이외에 갑상선염에 의한 염증성 변화를 확인할 수 있습니다.
          </p>
        </div>
        <div class={styles8["item"]}>
          <p className={styles8["text-item-1"]}>심장 초음파</p>
          <p className={styles8["text-item-2"]}>
            실시간으로 심장의 움직이는 모습을 관찰할 수 있으며, <br />
            심장의 해부학적 구조의 이상, 심장 기능, 심장 내 압력 등을 <br />
            실시간으로 비침습적으로 관찰할 수 있습니다. <br />
          </p>
        </div>
        <div class={styles8["item"]}>
          <p className={styles8["text-item-1"]}>경동맥 초음파</p>
          <p className={styles8["text-item-2"]}>
            경동맥의 좁아진 상태와 흐르는 혈류의 적절성을 확인합니다. <br />
            경동맥의 동맥경화가 있을 때 심장혈관 등 다른 부위의 동맥경화를{" "}
            <br />
            예측하는 것에 도움이 됩니다.
          </p>
        </div>
        <div class={styles8["item"]}>
          <p className={styles8["text-item-1"]}>유방 초음파</p>
          <p className={styles8["text-item-2"]}>
            유방 X선 검사에서 발견하기 어려운 병변을 <br />
            초음파 검사를 통해 정밀하게 진단 할 수 있습니다.
          </p>
        </div>
        <div class={styles8["item"]}>
          <p className={styles8["text-item-1"]}>골밀도 검사</p>
          <p className={styles8["text-item-2"]}>
            골다공증을 진단하는 검사로서
            <br />
            빠르고 간단하게 검사받을 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Seciont8;
