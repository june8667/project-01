import React, { useState, useEffect } from "react";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hideUntil = localStorage.getItem("popup_hide_until");
    if (!hideUntil || new Date().getTime() > parseInt(hideUntil)) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleHideForOneDay = () => {
    const hideUntil = new Date().getTime() + 24 * 60 * 60 * 1000; // 24시간 후
    localStorage.setItem("popup_hide_until", hideUntil.toString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <img
          src="/images/popup/popup2.webp" // 원하는 이미지 URL로 변경
          alt="Popup"
          style={styles.image}
          width="800px"
        />
        <div style={styles.buttonContainer}>
        <button onClick={handleHideForOneDay} style={{ ...styles.button, ...styles.leftButton }}>
        1일 동안 보지 않음
        </button>
          <button onClick={handleClose} style={styles.button}>닫기</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "absolute",
    top: "30px",
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999, // 다른 요소보다 위에 배치
  },
  popup: {
    backgroundColor: "white",
    textAlign: "center",
    zIndex: 10000, // overlay보다 더 위에 배치
    position: "relative",
    display: "grid",
    
    
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
  buttonContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr", // 두 개의 버튼을 동일한 크기로 배치
    height: "40px", // 높이 증가
    gap: "0", // 버튼 간격 없음 (구분선만 보이게)
    border: "1px solid lightgray", // 네 면 모두 회색 테두리 추가
  },
  button: {
    cursor: "pointer",
    border: "none",
    color: "black",
    backgroundColor: "white",
    border: "1px solid lightgray", // 네 면 모두 회색 테두리 추가
  },
};

export default Popup;
