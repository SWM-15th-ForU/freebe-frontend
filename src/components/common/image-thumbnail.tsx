import { CSSProperties } from "react";
import Image from "next/image";
import { Image as ImageType } from "product-types";
import CloseButton from "../buttons/close-button";
import { thumbnailStyles } from "./common.css";

interface ImageThumbnailProps {
  image: ImageType;
  onClickDelete?: () => void;
  onClick?: () => void;
  isRepresentative?: boolean;
  size?: string;
  container?: CSSProperties;
}

const THUMBNAIL_SIZE = "80px";

const ImageThumbnail = ({
  image,
  onClickDelete,
  onClick,
  isRepresentative,
  size = THUMBNAIL_SIZE,
  container,
}: ImageThumbnailProps) => {
  return (
    <div
      style={{
        width: size,
        ...container,
      }}
      className={`${thumbnailStyles.container} ${isRepresentative && thumbnailStyles.represent}`}
      role="presentation"
      onClick={onClick}
    >
      <Image src={image} fill sizes="80px" alt="등록 이미지" />

      {onClickDelete && (
        <CloseButton
          onClick={onClickDelete}
          styleType="shadow"
          color="background"
          container={{
            padding: 4,
            justifyContent: "flex-end",
          }}
          size={24}
        />
      )}
      {isRepresentative && (
        <div className={thumbnailStyles.representMark}>대표</div>
      )}
    </div>
  );
};

export default ImageThumbnail;
