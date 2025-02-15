// src/App.js
import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar.js";
import Seciont1 from "./Sections/section1.js";
import Seciont2 from "./Sections/section2.js";
import Seciont3 from "./Sections/section3.js";
import Seciont4 from "./Sections/section4.js";
import Seciont5 from "./Sections/section5.js";


const App = () => {
  return (
    <div className="total">
      {/* <NavigationBar /> */}
      <div id="section1" className="section">
        <Seciont1></Seciont1>
      </div>
      <div id="section2" className="section">
        <Seciont2></Seciont2>
      </div>
      <div id="section3" className="section">
        <Seciont3></Seciont3>
      </div>
      {/* 내시경클리닉 */}
      <div id="section4" className="section">
        <Seciont4></Seciont4>
      </div>
      {/* 유방암검진센터 */}
      <div id="section5" className="section">
        <Seciont5></Seciont5>
      </div>
    </div>
  );
};

export default App;
