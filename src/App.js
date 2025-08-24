// src/App.js
import React, { useEffect, useState } from 'react';
import "./App.css";
import NavigationBar2 from "./components/NavigationBar2.js";
import Seciont1 from "./Sections/section1.js";
import Seciont2 from "./Sections/section2.js";
import Seciont3 from "./Sections/section3.js";
import Seciont4 from "./Sections/section4.js";
import Seciont5 from "./Sections/section5.js";
import Seciont6 from "./Sections/section6.js";
import Seciont7 from "./Sections/section7.js";
import Seciont8 from "./Sections/section8.js";
import Seciont9 from "./Sections/section9.js";
import Seciont10 from "./Sections/section10.js";
import Seciont12 from "./Sections/section12.js";
import Interior from "./Sections/Interior.js";
import Adress from "./address.js";
import FloatingButton from "./FloatingButton.js";
import KakaoMap from "./kakaomap.js";
import Popup from "./popup.js";


const App = () => {
  const [zOrders, setZOrders] = useState([1000, 2000]); // 오버레이 2개

  const bringToFront = (index) => {
    const maxZ = Math.max(...zOrders) + 1;
    setZOrders((prev) => {
      const newOrders = [...prev];
      newOrders[index] = maxZ;
      return newOrders;
    });
  };

  const getCenterPosition = ({ offsetXPercent = 0, offsetYPercent = 0 } = {}) => {
    const xOffset = (window.innerWidth / 2) * (offsetXPercent / 100);
    const yOffset = (window.innerHeight / 2) * (offsetYPercent / 100);

    const x = window.innerWidth / 2 + xOffset;
    const y = window.innerHeight / 2 + yOffset;
    return { x, y };
  };

  const getCenterPosition2 = ({ offsetXPercent = 0, offsetYPercent = 0 } = {}) => {
    const xOffset = (window.innerWidth / 2) * (offsetXPercent / 100);
    const yOffset = (window.innerHeight / 2) * (offsetYPercent / 100);

    const x = window.innerWidth / 2 + xOffset;
    const y = window.innerHeight / 2 + yOffset;
    return { x, y };
  };

  const getCenterPosition3 = ({ offsetXPercent = 0, offsetYPercent = 0 } = {}) => {
    const xOffset = (window.innerWidth / 2) * (offsetXPercent / 100);
    const yOffset = (window.innerHeight / 2) * (offsetYPercent / 100);

    const x = window.innerWidth / 2 + xOffset;
    const y = window.innerHeight / 2 + yOffset;
    return { x, y };
  };

  const mobilePositions = [
    { x: -110, y: -30}, // 모바일용 팝업1 초기 위치
    { x: -20, y: -90 }, // 모바일용 팝업2 초기 위치
    { x: -20, y: -90 }, // 모바일용 팝업2 초기 위치
  ];

  const desktopPositions = [
    { x: -60, y: -60 }, // 데스크탑용 팝업1 초기 위치
    { x: -25, y: -70 }, // 데스크탑용 팝업2 초기 위치
    { x: 10, y: -70 }, // 데스크탑용 팝업2 초기 위치
  ];

  const isMobile = window.innerWidth <= 1024;
  const initialPositions = isMobile ? mobilePositions : desktopPositions;
  const pos1 = getCenterPosition({ offsetXPercent: initialPositions[0].x, offsetYPercent: initialPositions[0].y });
  //const pos2 = getCenterPosition2({ offsetXPercent: initialPositions[1].x, offsetYPercent: initialPositions[1].y });
  const pos3 = getCenterPosition3({ offsetXPercent: initialPositions[2].x, offsetYPercent: initialPositions[2].y });

  return (
    <div className="total">
      <Popup 
        imageUrl="/images/popup/popup.webp"
        zIndex={zOrders[2]}
        onBringToFront={() => bringToFront(2)}
        initialPosition={pos1}
      />
       {/* <Popup imageUrl="/images/popup/popup2.webp"
        zIndex={zOrders[1]}
        onBringToFront={() => bringToFront(1)}
        initialPosition={pos2}
      /> */}
      <Popup imageUrl="/images/popup/popup3.webp"
        zIndex={zOrders[0]}
        onBringToFront={() => bringToFront(0)}
        initialPosition={pos3}
      />
      <NavigationBar2 />
      <div id="section1" className="section">
        <Seciont1></Seciont1>
      </div>
      {/* 진료과목소개 */}
      <div id="section2" className="section">
        <Seciont2></Seciont2>
      </div>
      {/* 의료진소개 */}
      <div id="section3" className="section">
        <Seciont3></Seciont3>
      </div>
      {/* 건강검진 */}
      <div id="section4" className="section">
        <Seciont4></Seciont4>
      </div>
      {/* 유방암검진센터 */}
      {/* <div id="section5" className="section">
        <Seciont5></Seciont5>
      </div> */}
      {/* 내시경클리닉 */}
      <div id="section6" className="section">
        <Seciont6></Seciont6>
      </div>
      {/* 위내시경/대장내시경 */}
      <div id="section7" className="section">
        <Seciont7></Seciont7>
      </div>
      {/* 초음파클리닉 */}
      <div id="section8" className="section">
        <Seciont8></Seciont8>
      </div>
      {/* 약속합니다 */}
      <div id="section9" className="section">
        <Seciont9></Seciont9>
      </div>
      {/* 협력병원 */}
      <div id="section10" className="section">
        <Seciont10></Seciont10>
      </div>
      {/* 병원둘러보기 */}
      <div id="section11" className="section">
        <Interior></Interior>
      </div>
      {/* 오시는길 */}
      <div id="section12" className="section">
        <Adress></Adress>
      </div>
      {/* 비급여 항목 */}
      <div id="section13" className="section">
      <Seciont12></Seciont12>
      </div>
      <FloatingButton></FloatingButton>
    </div>
  );
};

export default App;
