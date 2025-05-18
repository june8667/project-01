import ImageSlider2 from "../components/ImageSlider2";
import interior from "./Interior.module.css";

const Interior = () => {
  return (
    <div className={interior["container"]}>
      <br></br>
      <div className={interior["top"]}>
        <p className={interior["text-top-1"]}>
          SAMSUNG NAEUN INTERNAL MEDICINE
        </p>
        <p className={interior["text-top-2"]}>병원 둘러보기</p>
        <br />
      </div>
      <ImageSlider2></ImageSlider2>
      <br></br>
    </div>
  );
};

export default Interior;
