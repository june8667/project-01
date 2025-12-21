import React from "react";

function YouTubeEmbed() {
  const VIDEO_ID = "0PaLz_Ptp2A";

  return (
    <div style={{ maxWidth: "640px", margin: "0 auto" }}>
      {/* 영상 */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: "#000",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 1.0)"
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${VIDEO_ID}`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* 설명 텍스트 */}
      <p
        style={{
          marginTop: "20px",
          marginBttom: "0px",
          textAlign: "center",
          fontSize: "28px",
          color: "#333",
          fontFamily: "Jalnan2TTF"
        }}
      >
        MBN 명사수 "방치하면 독이 되는 갱년기" 삼성나은내과 신수린 원장
      </p>
    </div>
  );
}

export default YouTubeEmbed;
