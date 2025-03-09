// src/App.js
import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar.js";
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
import Adress from "./address.js";
import FloatingButton from "./FloatingButton.js";


const App = () => {
  return (
    <div className="total">
      
      <NavigationBar />
      <div id="section1" className="section">
        <Seciont1></Seciont1>
      </div>
      <div id="section2" className="section">
        <Seciont2></Seciont2>
      </div>
      <div id="section3" className="section">
        <Seciont3></Seciont3>
      </div>
      {/* 건강검진 */}
      <div id="section4" className="section">
        <Seciont4></Seciont4>
      </div>
      {/* 유방암검진센터 */}
      <div id="section5" className="section">
        <Seciont5></Seciont5>
      </div>
      {/* 내시경센터 */}
      <div id="section6" className="section">
        <Seciont6></Seciont6>
      </div>
      {/* 위내시경/대장내시경 */}
      <div id="section7" className="section">
        <Seciont7></Seciont7>
      </div>
      {/* 위내시경/대장내시경 */}
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
      <Adress></Adress>
      <FloatingButton></FloatingButton>
    </div>
  );
};

export default App;
