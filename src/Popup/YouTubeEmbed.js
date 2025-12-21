import React from "react";

function YouTubeEmbed() {
  const VIDEO_ID = "0PaLz_Ptp2A"; // ← 고정된 YouTube 영상 ID

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "640px",
        aspectRatio: "16 / 9",
        margin: "0 auto",
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
      MBN 명사수 "방치하면 독이 되는 갱년기" 신수린 원장
    </div>
  );
}

export default YouTubeEmbed;
