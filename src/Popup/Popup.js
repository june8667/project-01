import React from "react";

let GLOBAL_Z_INDEX = 1000;
const CLICK_THRESHOLD = 5;

export default function Popup(props) {
  const {
    index,
    image,
    width,
    height,
    initialX,
    initialY,
    onClose,
  } = props;

  const FOOTER_HEIGHT = 30;

  const [pos, setPos] = React.useState({ x: initialX, y: initialY });
  const [isExpanded, setIsExpanded] = React.useState(false);

  const originRef = React.useRef({
    x: initialX,
    y: initialY,
    width,
    height,
  });

  const [zIndex, setZIndex] = React.useState(() => ++GLOBAL_Z_INDEX);

  const dragging = React.useRef(false);
  const offset = React.useRef({ x: 0, y: 0 });

  const mouseDownPos = React.useRef({ x: 0, y: 0 });
  const moved = React.useRef(false);

  function bringToFront() {
    GLOBAL_Z_INDEX += 1;
    setZIndex(GLOBAL_Z_INDEX);
  }

  function toggleExpand() {
    bringToFront();
    setIsExpanded(prev => !prev);
  }

  function onMouseDown(e) {
    bringToFront();

    dragging.current = !isExpanded; // 🔥 확대 중엔 드래그만 금지
    moved.current = false;

    mouseDownPos.current = {
      x: e.clientX,
      y: e.clientY,
    };

    if (!isExpanded) {
      offset.current = {
        x: e.clientX - pos.x,
        y: e.clientY - pos.y,
      };
    }
  }

  function onMouseMove(e) {
    const dx = e.clientX - mouseDownPos.current.x;
    const dy = e.clientY - mouseDownPos.current.y;

    if (Math.abs(dx) > CLICK_THRESHOLD || Math.abs(dy) > CLICK_THRESHOLD) {
      moved.current = true;
    }

    if (dragging.current) {
      setPos({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    }
  }

  function onMouseUp() {
    dragging.current = false;

    if (!moved.current) {
      toggleExpand(); // ✅ 확대/축소 모두 처리
    }
  }

  function hideOneDay(e) {
    e.stopPropagation();
    const until = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem("popup-hide-" + index, until);
    onClose();
  }

  function closePopup(e) {
    e.stopPropagation();
    onClose();
  }

  return React.createElement(
    React.Fragment,
    null,

    // dim overlay
    isExpanded &&
      React.createElement("div", {
        onClick: toggleExpand,
        style: {
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: zIndex - 1,
        },
      }),

    // popup
    React.createElement(
      "div",
      {
        onMouseDownCapture: bringToFront,
        onMouseDown,
        onMouseMove,
        onMouseUp,
        onMouseLeave: () => (dragging.current = false),

        style: Object.assign(
          {
            position: "fixed",
            left: pos.x,
            top: pos.y,
            zIndex,
            userSelect: "none",
            cursor: isExpanded ? "default" : "move",
            background: "transparent",
          },
          isExpanded
            ? {
                transform: "translate(-50%, -50%)",
                left: "50%",
                top: "50%",
                width: "fit-content",
                height: "fit-content",
              }
            : {
                width: originRef.current.width,
                height: originRef.current.height,
              }
        ),
      },

      // content
      React.createElement(
        "div",
        {
          style: {
            background: "#fff",
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
          },
        },

        // image
        React.createElement("img", {
          src: image,
          draggable: false,
          style: {
            width: isExpanded ? "auto" : "100%",
            height: isExpanded ? "auto" : height - FOOTER_HEIGHT,
            maxWidth: isExpanded ? "90vw" : "100%",
            maxHeight: isExpanded ? "90vh" : "100%",
            objectFit: isExpanded ? "contain" : "fill",
            display: "block",
          },
        }),

        // footer
        React.createElement(
          "div",
          {
            style: {
              height: FOOTER_HEIGHT,
              display: "flex",
              borderTop: "1px solid #ddd",
              fontSize: 10,
            },
          },

          React.createElement(
            "div",
            {
              onMouseDown: e => e.stopPropagation(),
              onClick: hideOneDay,
              style: {
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              },
            },
            "1일 동안 보지 않음"
          ),

          React.createElement(
            "div",
            {
              onMouseDown: e => e.stopPropagation(),
              onClick: closePopup,
              style: {
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                borderLeft: "1px solid #ddd",
              },
            },
            "닫기"
          )
        )
      )
    )
  );
}
