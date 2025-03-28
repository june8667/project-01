import React from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import style from "./kakaomap.module.css";

function KakaoMap(props) {
  return (
    <Map // 지도를 표시할 Container
    center={{
      // 지도의 중심좌표
      lat: 37.6009294,
      lng: 127.1400683,
    }}
    

    style={{
      // 지도의 크기
      width: "100%",
      height: "100%",
    }}
    level={3} // 지도의 확대 레벨
  >
    <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
      position={{
        // 인포윈도우가 표시될 위치입니다
        lat: 37.6009294,
        lng: 127.1400683,
      }}
      
    >
      {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
      {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
      
      <div className={style["text-box"]}>
        삼성나은내과 
        <a 
          className={style["text-link"]}
          href="https://map.kakao.com/?map_type=TYPE_MAP&itemId=939936310&urlLevel=3&urlX=531023&urlY=1139311"
          
        >
          큰지도보기
        </a>
      </div>
    </MapMarker>
  </Map>
  );
}

export default KakaoMap;