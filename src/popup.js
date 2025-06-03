import React, { useState, useEffect,useRef  } from "react";

const Popup = ({ imageUrl, zIndex, onBringToFront, initialPosition = { x: 100, y: 100 } }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const hideUntil = localStorage.getItem("popup_hide_until");
    if (!hideUntil || new Date().getTime() > parseInt(hideUntil)) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('mouseleave', handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    dragging.current = true;
    offset.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    onBringToFront();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseUp); // 추가
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;
    setPosition({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
  };

  const handleMouseUp = (e) => {
    dragging.current = false;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    window.removeEventListener('mouseleave', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    dragging.current = true;
    offset.current = { x: touch.clientX - position.x, y: touch.clientY - position.y };
    onBringToFront();

    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    if (!dragging.current) return;
    const touch = e.touches[0];
    setPosition({ x: touch.clientX - offset.current.x, y: touch.clientY - offset.current.y });
  };

  const handleTouchEnd = (e) => {
    dragging.current = false;
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  };

  const handleClose = () => setIsVisible(false);

  const handleHideForOneDay = () => {
    const hideUntil = new Date().getTime() + 24 * 60 * 60 * 1000;
    localStorage.setItem("popup_hide_until", hideUntil.toString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={{
        ...styles.overlay,
        top: position.y,
        left: position.x,
        zIndex: zIndex,
      }}
    >
      <div style={styles.popup}>
        <img src={imageUrl} alt="Popup" style={styles.image} width="800px" />
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

const isMobile = window.innerWidth <= 1024;
const popupWidth = isMobile ? 300 : 600;

const styles = {
  overlay: {
    position: "absolute",
    display: "inline-block", // auto width
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    touchAction: 'none',
    userSelect: 'none',
    width: popupWidth,     // 또는 원하는 고정 크기
  },
  popup: {
    backgroundColor: "white",
    textAlign: "center",
    zIndex: 10000,
    position: "relative",
    display: "grid",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
  buttonContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    height: "40px",
    gap: "0",
    border: "1px solid lightgray",
  },
  button: {
    cursor: "pointer",
    border: "none",
    color: "black",
    backgroundColor: "white",
    border: "1px solid lightgray",
  },
  leftButton: {
    borderRight: "none",
  },
};

export default Popup;
