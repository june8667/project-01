import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll"; // react-scroll 사용
import styles from "./NavigationBar2.module.css"; // CSS Module 불러오기

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setShowNav(true); // 컴포넌트가 렌더링 될 때 네비게이션을 표시
  }, []);

  const rootStyles = getComputedStyle(document.documentElement);
  const offsetValue = parseInt(
    rootStyles.getPropertyValue("--nav-offset").trim(),
    10
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const menuRef = useRef(null); // 메뉴 영역을 참조하기 위한 ref

  // 메뉴 외부 클릭 시 메뉴 닫는 함수
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  // useEffect를 사용하여 컴포넌트가 마운트/언마운트될 때 이벤트 리스너 추가 및 제거
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); // 클릭 이벤트 리스너 추가

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // 언마운트 시 이벤트 리스너 제거
    };
  }, []);
  return (
    <nav
      className={`${styles.navContainer} ${isMenuOpen ? styles.open : ""} ${showNav ? styles.fadein : ''}`}
      ref={menuRef}
    >
      <div className={styles.logoBox}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="description"></img>
          <p>건강검진센터</p>
        </div>
        <div className={`${styles.hamburger}`} onClick={toggleMenu}>
          <div className={`${styles.bar}`}></div>
          <div className={`${styles.bar}`}></div>
          <div className={`${styles.bar}`}></div>
        </div>
      </div>
      <ul
        className={`${styles.navList} ${styles.menu} ${
          isMenuOpen ? styles.active : ""
        }`}
      >
        <li>
          <Link
            to="section2"
            smooth={true}
            duration={500}
            className={styles.navLink}
            onClick={toggleMenu}
            offset={offsetValue}
          >
            진료과목
          </Link>
        </li>
        <li>
          <Link
            to="section3"
            smooth={true}
            duration={500}
            className={styles.navLink}
            onClick={toggleMenu}
            offset={offsetValue}
          >
            의료진소개
          </Link>
        </li>
        <li>
          <Link
            to="section4"
            smooth={true}
            duration={500}
            className={styles.navLink}
            onClick={toggleMenu}
            offset={offsetValue}
          >
            건강검진센터
          </Link>
        </li>
        <li>
          <Link
            to="section6"
            smooth={true}
            duration={500}
            className={styles.navLink}
            onClick={toggleMenu}
            offset={offsetValue}
          >
            내시경클리닉
          </Link>
        </li>
        <li>
          <Link
            to="section8"
            smooth={true}
            duration={500}
            className={styles.navLink}
            onClick={toggleMenu}
            offset={offsetValue}
          >
            초음파클리닉
          </Link>
        </li>
        {/* <li>
          <Link
            to=""
            smooth={true}
            duration={500}
            className={styles.navLink}
            onClick={toggleMenu}
            offset={offsetValue}
          >
            병원둘러보기
          </Link>
        </li> */}
        <li>
          <Link
            to="section11"
            smooth={true}
            duration={500}
            className={styles.navLink}
            onClick={toggleMenu}
            offset={offsetValue}
          >
            오시는길
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
