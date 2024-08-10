import { reservation } from "product-types";
import { GridStyles } from "./images.css";

interface GridImageProps extends reservation.ImageListType {
  handleClick: () => void;
}

const GridImage = ({ url, selected, handleClick }: GridImageProps) => {
  return (
    <div
      className={GridStyles.container}
      onClick={handleClick}
      role="presentation"
    >
      <img
        src={url}
        alt={url}
        className={GridStyles.image}
        style={{
          outlineWidth: selected ? 1 : 0,
        }}
      />
    </div>
  );
};

export default GridImage;
