import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { PhoneCall } from "lucide-react";
import "./FloatingButton.css"; 

const FloatingButton = () => {
  const buttonRef = useRef(null);
  const [startTouch, setStartTouch] = useState(null); // 터치 시작 위치 저장
  const [endTouch, setEndTouch] = useState(null); // 터치 끝 위치 저장

  useEffect(() => {
    const handleTouchStart = (e) => {
      // 터치 시작 지점 기록
      const touch = e.touches[0];
      setStartTouch({ x: touch.pageX, y: touch.pageY });
    };

    const handleTouchEnd = (e) => {
      const touch = e.changedTouches[0];
      setEndTouch({ x: touch.pageX, y: touch.pageY });

      // 터치 시작과 끝의 차이가 5px 이상이면 전화 걸기
      if (
        startTouch &&
        Math.abs(startTouch.x - touch.pageX) <= 5 &&
        Math.abs(startTouch.y - touch.pageY) <= 5
      ) {
        window.location.href = "tel:0315527575"; // 전화 걸기
      }
    };

    const btn = buttonRef.current;
    if (btn) {
      btn.addEventListener("touchstart", handleTouchStart);
      btn.addEventListener("touchend", handleTouchEnd, { passive: false });
    }

    return () => {
      if (btn) {
        btn.removeEventListener("touchstart", handleTouchStart);
        btn.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [startTouch]);

  return (
    <Draggable nodeRef={buttonRef}>
      <div ref={buttonRef} className="floating-button">
        <PhoneCall size={30} color="white" />
      </div>
    </Draggable>
  );
};

export default FloatingButton;
