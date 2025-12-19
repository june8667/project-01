import React from "react";
import Popup from "./Popup.js";

export default function PopupGroup(props) {
  const images = props.images;
  const width = props.width;
  const height = props.height;
  const gap = props.gap;

  const [visible, setVisible] = React.useState([]);

  // React.useEffect(function () {
  //   // 🔥 테스트 중엔 전부 보이게
  //   setVisible(images.map(() => true));
  // }, [images]);

  React.useEffect(function () {
    const now = Date.now();

    const v = images.map(function (_, i) {
      const hideUntil = localStorage.getItem("popup-hide-" + i);
      return !hideUntil || now > Number(hideUntil);
    });

    setVisible(v);
  }, [images]);

  const active = visible
    .map(function (v, i) {
      return v ? i : null;
    })
    .filter(function (v) {
      return v !== null;
    });

  if (active.length === 0) return null;

  const centerX = window.innerWidth / 2;
  const count = active.length;

  return React.createElement(
    React.Fragment,
    null,
    active.map(function (index, order) {
      const offset =
        (order - (count - 1) / 2) * (width + gap);

      return React.createElement(Popup, {
        key: index,
        index: index,
        image: images[index],
        width: width,
        height: height,
        initialX: centerX + offset - width / 2,
        initialY: 100,
        onClose: function () {
          setVisible(function (prev) {
            return prev.map(function (v, i) {
              return i === index ? false : v;
            });
          });
        },
      });
    })
  );
}
