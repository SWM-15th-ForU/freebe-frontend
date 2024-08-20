import Image from "next/image";
import { Image as ImageType } from "product-types";
import CloseButton from "../buttons/close-button";

interface ImageThumbnailProps {
  image: ImageType;
  onClickDelete?: () => void;
}

const THUMBNAIL_SIZE = 80;

const ImageThumbnail = ({ image, onClickDelete }: ImageThumbnailProps) => {
  return (
    <div
      style={{
        width: "20%",
        aspectRatio: 1,
        position: "relative",
        marginTop: 15,
      }}
    >
      <Image src={image} fill sizes="80px" alt="등록 이미지" />

      {onClickDelete && (
        <CloseButton
          onClick={onClickDelete}
          styleType="shadow"
          container={{ padding: 4, justifyContent: "flex-end" }}
          size={24}
        />
      )}
    </div>
  );
};

export default ImageThumbnail;
