const { writeFileSync } = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

const hostname = "https://www.ssnaeun.co.kr";  // 실제 웹사이트 URL로 변경
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.6 },
];

(async () => {
  try {
    const stream = new SitemapStream({ hostname });
    links.forEach(link => stream.write(link));  // 각 링크를 stream에 쓰기
    stream.end();  // 스트림 종료

    const sitemap = await streamToPromise(stream).then((data) => data.toString());
    
    writeFileSync("public/sitemap.xml", sitemap);
    console.log("✅ sitemap.xml 생성 완료!");
  } catch (error) {
    console.error("❌ 사이트맵 생성 중 오류 발생:", error);
  }
})();
