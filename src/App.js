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
import PopupGroup from './Popup/PopupGroup.js';
import Adress from "./address.js";
import FloatingButton from "./FloatingButton.js";
import KakaoMap from "./kakaomap.js";
import Popup from "./popup.js";
import YouTubeEmbed from './Popup/YouTubeEmbed.js';


const App = () => {

  // 🔥 최초 렌더 시 screenWidth 스냅샷
  const initialScreenWidthRef = React.useRef(window.innerWidth);

  // 🔥 ratio도 최초 한 번만 결정
  const ratioRef = React.useRef(
    initialScreenWidthRef.current >= 2500 ? 1.4 : 1
  );

  // 이후 resize 되어도 값 안 변함
  const ratio = ratioRef.current;

  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);

  

  const isMobile = window.innerWidth <= 1024;
  
  const imageurl1 = "/images/popup/e.webp";
  const imageurl4 = "/images/popup/a.webp";
  const imageurl5 = "/images/popup/b.webp";
  const imageurl6 = "/images/popup/c.webp";
  const imageurl7 = "/images/popup/d.webp";
  const imageurl8 = "/images/popup/e.png";

  return (
    <div className="total">
      {isMobile ? (
        <>
          
          </>
      ) : (
        <>
        <div>
          <PopupGroup
            images={[imageurl8, imageurl1, imageurl4]}
            width={360 * ratio}
            height={500 * ratio}
            gap={20}
          />
        </div>
        {/* <Popup 
            imageUrl={imageurl2}
            zIndex={zOrders[1]}
            onBringToFront={() => bringToFront(1)}
            initialPosition={pos1}
          />
        <Popup imageUrl={imageurl1}
          zIndex={zOrders[0]}
          onBringToFront={() => bringToFront(2)}
          initialPosition={pos3}
        /> */}
        </>
      )}
      {/* <Popup imageUrl={imageurl3}
        zIndex={zOrders[0]}
        onBringToFront={() => bringToFront(0)}
        initialPosition={pos3}
      /> */}
      <NavigationBar2 />
      <div id="section1" className="section">
        <Seciont1></Seciont1>
      </div>
      {isMobile && (
        <>
          <div
            style={{
              width: "100%",
              height: "100%",
              border: "4px solid #7ecbff",   // ⭐ 하늘색 + 두꺼운 선
              overflow: "hidden",
              boxSizing: "border-box"
            }}
          >
            <img
              src={imageurl8}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              border: "4px solid #7ecbff",   // ⭐ 하늘색 + 두꺼운 선
              overflow: "hidden",
              boxSizing: "border-box"
            }}
          >
            <img
              src={imageurl1}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              border: "4px solid #7ecbff",   // ⭐ 하늘색 + 두꺼운 선
              overflow: "hidden",
              boxSizing: "border-box"
            }}
          >
            <img
              src={imageurl4}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
          {/* <div
            style={{
              width: "100%",
              border: "4px solid #7ecbff",   // ⭐ 하늘색 + 두꺼운 선
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            <img
              src={imageurl5}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div> */}
           {/* <div
            style={{
              width: "100%",
              border: "4px solid #7ecbff",   // ⭐ 하늘색 + 두꺼운 선
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            <img
              src={imageurl7}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div> */}
          </>
      )}
      <div style={{ padding: "40px" }}>
      <YouTubeEmbed/>
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
