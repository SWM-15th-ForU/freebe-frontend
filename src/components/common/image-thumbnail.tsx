import Image from "next/image";
import { Image as ImageType } from "product-types";

interface ImageThumbnailProps {
  image: ImageType;
  onClickDelete?: () => void;
}

const THUMBNAIL_SIZE = 80;

const ImageThumbnail = ({ image, onClickDelete }: ImageThumbnailProps) => {
  return (
    <div>
      {onClickDelete && (
        <button type="button" onClick={onClickDelete}>
          X
        </button>
      )}
      <Image
        src={image}
        width={THUMBNAIL_SIZE}
        height={THUMBNAIL_SIZE}
        sizes="80px"
        alt="등록 이미지"
      />
    </div>
  );
};

export default ImageThumbnail;
