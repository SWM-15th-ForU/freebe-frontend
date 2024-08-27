import Image from "next/image";
import { imageContainer } from "./main.css";

const BackgroundImage = ({ mainImage }: { mainImage: string }) => {
  return (
    <div className={imageContainer}>
      <Image src={mainImage} alt="대표 이미지" fill />
    </div>
  );
};

export default BackgroundImage;
