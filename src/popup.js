import React, { useState, useEffect, useRef } from "react";

const Popup = ({
  imageUrl,
  zIndex,
  onBringToFront,
  initialPosition = { x: 100, y: 100 },
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  const imgRef = useRef(null);

  // ✅ 1. 로컬스토리지 체크 (1일 숨김 기능)
  useEffect(() => {
    const hideUntil = localStorage.getItem("popup_hide_until");
    if (!hideUntil || new Date().getTime() > parseInt(hideUntil)) {
      setIsVisible(true);
    }
  }, []);

  // ✅ 2. 드래그 관련 이벤트 제거
  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("mouseleave", handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    dragging.current = true;
    offset.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    onBringToFront?.();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;
    const newX = e.clientX - offset.current.x;
    const newY = e.clientY - offset.current.y;

    const popupWidth = size.width || imgRef.current?.offsetWidth || 300;
    const viewportWidth = window.innerWidth;
    const clampedX = Math.min(Math.max(0, newX), viewportWidth - popupWidth);
    setPosition({ x: clampedX, y: newY });
  };

  const handleMouseUp = () => {
    dragging.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mouseleave", handleMouseUp);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    dragging.current = true;
    offset.current = {
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    };
    onBringToFront?.();
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    if (!dragging.current) return;
    const touch = e.touches[0];
    const newX = touch.clientX - offset.current.x;
    const newY = touch.clientY - offset.current.y;

    const popupWidth = size.width || imgRef.current?.offsetWidth || 300;
    const viewportWidth = window.innerWidth;
    const clampedX = Math.min(Math.max(0, newX), viewportWidth - popupWidth);
    setPosition({ x: clampedX, y: newY });
  };

  const handleTouchEnd = () => {
    dragging.current = false;
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
  };

  const handleClose = () => setIsVisible(false);

  const handleHideForOneDay = () => {
    const hideUntil = new Date().getTime() + 24 * 60 * 60 * 1000;
    localStorage.setItem("popup_hide_until", hideUntil.toString());
    setIsVisible(false);
  };

  // ✅ 이미지 로드 완료 시 크기 측정 + 표시 준비
  const handleImageLoad = () => {
    if (imgRef.current) {
      setSize({
        width: imgRef.current.naturalWidth,
        height: imgRef.current.naturalHeight,
      });
      setIsImageLoaded(true);
    }
  };

  // ✅ 조건: 팝업이 표시 상태이면서 이미지도 로드 완료된 경우만 표시
  if (!isVisible) return null;

  return (
    <div
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={{
        ...styles.overlay,
        top: position.y,
        left: position.x,
        width: size.width || "auto",
        height: (size.height || 0) + 40,
        zIndex: zIndex,
        opacity: isImageLoaded ? 1 : 0, // ✅ 로딩 전에는 숨김
        transition: "opacity 0.3s ease",
      }}
    >
      <div style={styles.popup}>
        <img
          ref={imgRef}
          src={imageUrl}
          alt="Popup"
          style={styles.image}
          onLoad={handleImageLoad}
        />
        {isImageLoaded && (
          <div style={styles.buttonContainer}>
            <button
              onClick={handleHideForOneDay}
              style={{ ...styles.button, ...styles.leftButton }}
            >
              1일 동안 보지 않음
            </button>
            <button onClick={handleClose} style={styles.button}>
              닫기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "absolute",
    display: "block",
    zIndex: 9999,
    touchAction: "none",
    userSelect: "none",
    maxWidth: "none",
    maxHeight: "none",
    overflow: "visible",
  },
  popup: {
    backgroundColor: "white",
    textAlign: "center",
    zIndex: 10000,
    position: "relative",
    display: "grid",
  },
  image: {
    maxWidth: "none",
    height: "auto",
    display: "block",
  },
  buttonContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    height: "40px",
    gap: "0",
    borderTop: "1px solid lightgray",
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
