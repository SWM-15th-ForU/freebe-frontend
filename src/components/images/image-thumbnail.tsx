import { CSSProperties } from "react";
import Image from "next/image";
import { Image as ImageType } from "product-types";
import CloseButton from "../buttons/close-button";
import { thumbnailStyles } from "../common/common.css";

interface ImageThumbnailProps {
  image?: ImageType;
  onClickDelete?: () => void;
  onClickFullsize?: () => void;
  onClick?: () => void;
  isRepresentative?: boolean;
  size?: string;
  container?: CSSProperties;
}

const THUMBNAIL_SIZE = "80px";

const ImageThumbnail = ({
  image,
  onClickDelete,
  onClickFullsize,
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
      {image && (
        <Image
          src={image}
          fill
          sizes="80px"
          alt="등록 이미지"
          style={{ objectFit: "cover" }}
        />
      )}

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
      {onClickFullsize && (
        <button
          type="button"
          onClick={onClickFullsize}
          className={thumbnailStyles.button}
        >
          <Image
            src="/icons/full-size.svg"
            width={24}
            height={24}
            alt="전체 보기"
          />
        </button>
      )}
      {isRepresentative && (
        <div className={thumbnailStyles.representMark}>대표</div>
      )}
    </div>
  );
};

export default ImageThumbnail;
