// src/components/NavigationBar.js
import React, { useState } from "react";
import { Link } from "react-scroll";
import "./NavigationBar.css"; // 스타일을 별도의 CSS 파일로 분리

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav
      className={`navbar ${isMenuOpen ? "open" : ""}`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      <div className="logo2">
        <div>
          <img src="/images/logo.png" alt="description" className="logoImage" />
        </div>
        <div>
          <p className="logoText">건강검진센터</p>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul
        className={`menu ${isMenuOpen ? "active" : ""}`}
        style={{ listStyle: "none", margin: 0, padding: 0 }}
      >
        <li>
          <Link
            to="section1"
            smooth={true}
            duration={500}
            style={{ color: "#fff", cursor: "pointer" }}
          >
            진료과목
          </Link>
        </li>
        <li>
          <Link
            to="section2"
            smooth={true}
            duration={500}
            style={{ color: "#fff", cursor: "pointer" }}
          >
            의료진소개
          </Link>
        </li>
        <li>
          <Link
            to="section3"
            smooth={true}
            duration={500}
            style={{ color: "#fff", cursor: "pointer" }}
          >
            건강검진센터
          </Link>
        </li>
        <li>
          <Link
            to="section4"
            smooth={true}
            duration={500}
            style={{ color: "#fff", cursor: "pointer" }}
          >
            내시경클리닉
          </Link>
        </li>
        <li>
          <Link
            to="section5"
            smooth={true}
            duration={500}
            style={{ color: "#fff", cursor: "pointer" }}
          >
            초음파클리닉
          </Link>
        </li>
        <li>
          <Link
            to="section5"
            smooth={true}
            duration={500}
            style={{ color: "#fff", cursor: "pointer" }}
          >
            병원둘러보기
          </Link>
        </li>
        <li>
          <Link
            to="section5"
            smooth={true}
            duration={500}
            style={{ color: "#fff", cursor: "pointer" }}
          >
            오시는길
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
