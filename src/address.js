// 주소
import React, { useState, useEffect, useRef } from "react";
import address from "./address.module.css";

const Adress = () => {
  // IW, IH 값을 상태로 관리
  const [iw, setIw] = useState(804);
  const [ih, setIh] = useState(410);

  // parent div와 map image를 참조하기 위한 useRef
  const parentDivRef = useRef(null);

  // 부모 div의 크기를 업데이트하는 함수
  const updateMapSize = () => {
    if (parentDivRef.current) {
      const parentWidth = parentDivRef.current.offsetWidth; // 부모 div의 width
      const parentHeight = parentDivRef.current.offsetHeight; // 부모 div의 height

      // padding을 제외한 실제 이미지 크기를 계산 (padding 제외)
      setIw(parentWidth); // padding을 제외한 width로 IW 설정
      setIh(parentHeight); // padding을 제외한 height로 IH 설정
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 map 크기 계산
    updateMapSize();

    // 윈도우 리사이즈 이벤트 핸들러 등록
    window.addEventListener("resize", updateMapSize);

    // 언마운트될 때 이벤트 핸들러 제거
    return () => {
      window.removeEventListener("resize", updateMapSize);
    };
  }, []);

  return (
    <div className={address["container"]}>
      <div className={address["top"]}>
        <p className={address["text-top-1"]}>SAMSUNG NAEUN INTERNAL MEDICINE</p>
        <p className={address["text-top-2"]}>오시는 길</p>
        <br />
      </div>
      <div ref={parentDivRef} className={address["mapContainer"]}>
        <a
          href="https://map.kakao.com/?urlX=530943&urlY=1139278&urlLevel=2&map_type=TYPE_MAP&map_hybrid=false"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width={iw}
            height={ih}
            src={`https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=1.25&MX=530943&MY=1139278&S=0&IW=${iw}&IH=${ih}&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo`}
            style={{ border: "1px solid #ccc" }}
            alt="Kakao Map"
          />
        </a>
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
                <p>경기도 구리시 경춘로 223 명동빌딩 4증</p>
                <p>주차정보 : 건물 내 주차장이 협소한 관계로,</p>
                <p>본원에서는 공영주차장 영수증을 가져오신</p>
                <p>고객분들에게 주차권을 지원해드립니다.</p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className={address["desc"]}>
          <div className={address["descItem"]}>
            <p className={address["text-desc-1"]}>문의전화</p>
            <div className={address["descSchedule"]}>
              <div>
                <p className={address["text-intense-1"]}>TEL. 031-552-7575</p>
                <p>FAX. 031-552-7576</p>
                <p>E-mail. samsung-naeun@naver.com</p>
                <p>블로그 바로가기</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adress;
