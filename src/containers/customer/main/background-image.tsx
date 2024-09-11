import { imageStyles } from "./main.css";

const BackgroundImage = ({ mainImage }: { mainImage: string }) => {
  return (
    <div className={imageStyles.container}>
      <img src={mainImage} alt="대표 이미지" className={imageStyles.image} />
    </div>
  );
};

export default BackgroundImage;
