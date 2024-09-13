import Image from "next/image";
import { imageStyles } from "./main.css";

const BackgroundImage = ({ mainImage }: { mainImage: string }) => {
  return (
    <div className={imageStyles.container}>
      <Image
        src="/icons/freebe-logo.svg"
        height={20}
        width={90}
        alt="freebe"
        className={imageStyles.logo}
      />
      <img src={mainImage} alt="대표 이미지" className={imageStyles.image} />
    </div>
  );
};

export default BackgroundImage;
