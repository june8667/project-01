import { useState } from "react";
import styles4 from "./section4.module.css";

const Seciont4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={styles4["container"]}>
      <p className={styles4["text-small"]}>SAMSUNG NAEUN INTERNAL MEDICINE</p>
      <p className={styles4["text-large"]}>내시경클리닉</p>
      <p className={styles4["text-mid"]}>
        위 대장 질환은 증상이 없이 나타나므로 발견하기 어렵기 때문에 조기 검사
        결과가 매우 중요합니다.
        <br />
        또한, 미세한 변화를 발견할 수 있는 장비만이 조기 암들을 놓치지 않고
        진단할 수 있습니다.
      </p>
      <div className={styles4["rounded-box"]}>
        <p className={styles4["text-large2"]}>
          건강검진 프로그램 자세히 보기&nbsp;&nbsp;
        </p>
        <img
          src="/images/icons/ico-plus.png"
          alt="icon"
          onClick={() => setIsOpen(true)}
        />
      </div>
      {/* 팝업(모달) */}
      {isOpen && (
        <div className={styles4["modal"]} onClick={() => setIsOpen(false)}>
          {" "}
          {/* 바깥 클릭 시 닫힘 */}
          <div
            className={styles4["overlay"]}
            onClick={togglePopup} // 오버레이 클릭 시 팝업 닫기
          ></div>
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

export default Seciont4;
