// 주소
import React, { useState, useEffect, useRef } from "react";
import address from "./address.module.css";
import Kakaomap from "./kakaomap";

const Adress = () => {
  return (
    <div className={address["container"]}>
      <br></br>
      <div className={address["top"]}>
        <p className={address["text-top-1"]}>SAMSUNG NAEUN INTERNAL MEDICINE</p>
        <p className={address["text-top-2"]}>오시는 길</p>
        <br />
      </div>
      <div className={address["mapContainer"]}>
        <Kakaomap></Kakaomap>
      </div>
      <div className={address["descContainer"]}>
        <div className={address["desc"]}>
          <div className={address["descItem"]}>
            <p className={address["text-desc-1"]}>진료시간</p>
            <div className={address["descSchedule"]}>
              <div>
                <p>평일</p>
                <p>점심시간</p>
                <p>토요일</p>
                <p>일·공휴일</p>
              </div>
              <div>
                <p>오전 8:30 ~ 오후 6:00</p>
                <p>오후 1:00 ~ 오후 2:00</p>
                <p>오전 8:30 ~ 오후 1:00</p>
                <p>휴진</p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className={address["desc"]}>
          <div className={address["descItem"]}>
            <p className={address["text-desc-1"]}>오시는길</p>
            <div className={address["descSchedule"]}>
              <div>
                <p>경기도 구리시 경춘로 223 명동빌딩 4층</p>
                <p>주차정보 : 건물 내 주차장이 협소한 관계로,</p>
                <p>본원에서는 공영주차장(제4노상공영주차장) 영수증을</p>
                <p>가져오신 고객분들에게 주차권을 지원해드립니다.</p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className={address["desc"]}>
          <div className={address["descItem"]}>
            <p className={address["text-desc-1"]}>문의전화</p>
            <div className={address["descSchedule"]}>
              <div className={address["telbox"]}>
                <p className={address["text-intense-1"]}>TEL. <a className={address["phonelink"]}  href="tel:01012345678">031-552-7575</a></p>
                <p className={address["phonetext"]} >모바일에서 바로 전화걸기</p>
                
                <p>FAX. 031-552-7576</p>
                <p>E-mail. samsung-naeun@naver.com</p>
                <p>블로그 바로가기</p>
                <div
                  onClick={() =>
                    window.open("https://blog.naver.com/samsung-naeun")
                  }
                  className={address["blog-box"]}
                >
                  <img
                    src="/images/icons/icon_blog.png"
                    alt="Blog"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <p>&nbsp;&nbsp;&nbsp;/samsungnaeun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adress;
