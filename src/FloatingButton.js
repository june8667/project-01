import React, { useRef } from "react";
import Draggable from "react-draggable";
import { PhoneCall } from "lucide-react";
import "./FloatingButton.css"; // 스타일 분리

const FloatingButton = () => {
  const buttonRef = useRef(null);

  const handleCall = () => {
    window.location.href = "tel:0315527575";
  };

  return (
    <Draggable nodeRef={buttonRef}>
      <div
        ref={buttonRef}
        className="floating-button"
        onClick={handleCall}
        onTouchEnd={handleCall}
      >
        <PhoneCall size={30} color="white" />
      </div>
    </Draggable>
  );
};

export default FloatingButton;
